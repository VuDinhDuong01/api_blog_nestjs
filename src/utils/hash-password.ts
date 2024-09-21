/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bcrypt from 'bcrypt';

export class comparePassword {
    static  hash(password: string) {
        const saltOrRounds = 10;
        const hash =  bcrypt.hashSync(password, saltOrRounds);
        return hash
    }

    static  compare(pass: string, hash: string) {
        return  bcrypt.compareSync(pass, hash);
    }
}
