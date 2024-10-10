/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const totalKey = (conditions: Array<{key: string, value: any}>, tag: string) => {
    const keys = []
    conditions.forEach((element: { key: string, value: any }) => {
        if (element.value.length === 1) {
            keys.push({
                key: `${tag}.${element.key} = :${element.key}`,
                value: { [element.key]: element.value[0]}
            })
        } else {
            keys.push({
                key: `${tag}.${element.key}  IN (:...${element.key})`,
                value: {
                    [element.key]: element.value
                }
            })
        }
    });
    return keys
}