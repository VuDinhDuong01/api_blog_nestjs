/* eslint-disable prettier/prettier */

export const customQueryBuilder = async ({ start = '1', limit = '10', model, tag, sort = 'createdAt:DESC', conditions = [] }
    : { start?: string, limit?: string, model: any, tag: string, sort?: string, conditions?: Array<any> }) => {
    const [field, sortBy] = sort?.split(':')
    const queryBuilder = model.createQueryBuilder(tag)
    if (conditions.length > 0) {
        conditions.forEach(async (element) => {
            await queryBuilder.andWhere(element.key, element.value)
        })
    }
    const [result, total] = await queryBuilder
        .orderBy(`${tag}.${field}`, `${sortBy}`)
        .skip(Number(limit) * (Number(start) - 1))
        .limit(Number(limit))
        .getManyAndCount();
    const totalPage = Math.ceil(total / Number(limit))
    return {
        message: 'get all success',
        records: {
            data: Number(start) > totalPage ? [] : result,
            limit: Number(limit),
            total: total,
            totalPage: Math.ceil(total / Number(limit)),
            currentPage: Number(start)
        }
    }
}