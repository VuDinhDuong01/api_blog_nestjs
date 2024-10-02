/* eslint-disable prettier/prettier */
import { User } from "src/core/entity/auth";
import { IImportUserAdapter } from "src/modules/user/adapter";
import { ForbiddenException } from "src/utils/base-exception";
import { Repository } from "typeorm";
import { join } from 'path';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import XLSX from "xlsx";
import { comparePassword } from "src/utils/hash-password";
import omit from 'lodash/omit'

export class ImportUserCase implements IImportUserAdapter {
    constructor(private readonly useModel: Repository<User>) { }
    async execute(input): Promise<any> {
        if (!input) {
            throw new ForbiddenException('file not correct')
        }
        const fileUpload = input.originalname
        const catName = fileUpload.split('.')
        const validateXLSX = catName[catName.length - 1]
        if (validateXLSX !== 'xlsx' && validateXLSX !== 'xls') {
            throw new ForbiddenException('file format is incorrect')
        }
        const createFolderUploads = join(__dirname, '..') + '/src/uploads'
        if (!existsSync(createFolderUploads)) {
            mkdirSync(createFolderUploads, { recursive: true });
        }
        const filePath = join(createFolderUploads, input.originalname)
        const writeStream = createWriteStream(filePath);

        writeStream.write(input.buffer);
        writeStream.end();
        const wb = XLSX.readFile(filePath);
        const dataExcel = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

        const staticData: { successful: any[], failed: any[] } = { successful: [], failed: [] }
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const valid = dataExcel.map(async (body: any) => {
            body.errorField = []
            if (!body.email) body.errorField.push('Email không được bỏ trống')
            if (await this.useModel.findOne({ where: { email: body.email } })) body.errorField.push('Email đã tồn tại.')

            if (!body.password) body.errorField.push('password không được bỏ trống')
            if (!body.username) body.errorField.push('username không được bỏ trống')
            if (!strongPasswordRegex.test(body.password)) body.errorField.push('password phải là mật khẩu mạnh.')
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            body.errorField.length > 0 ? staticData.failed.push(body) : staticData.successful.push(omit(body, ['errorField']))

        })
        await Promise.all(valid)
        if (staticData.successful.length > 0) {
            staticData.successful.forEach(async (item) => {
                const payload = {
                    ...item, password: comparePassword.hash(item.password),
                    verify: 1,
                    updatedBy: null,
                }
                await this.useModel.save(payload)
            })
        }
        return {
            message: 'import user success',
            data: staticData
        }
    }

}