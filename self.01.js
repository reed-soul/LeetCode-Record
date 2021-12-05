/**
 * 通过平级的商品规格，生成深层递进嵌套的table
 * sku [taste: ['木质香','柑橘'],color:['透明','浅绿'],capacity:['200ml','100ml']]
 * target [{taste:'木质香‘}]
 */

const sku = [{ key: 'taste', data: ['木质香', '柑橘'] }, { key: 'color', data: ['透明', '浅绿'] }, { key: 'capacity', data: ['200ml', '100ml'] }]
const target = [
    { taste: '木质香', color: '透明', capacity: '200ml' },
    { taste: '木质香', color: '透明', capacity: '100ml' },
    { taste: '木质香', color: '浅绿', capacity: '200ml' },
    { taste: '木质香', color: '浅绿', capacity: '100ml' },
    { taste: '柑橘调', color: '透明', capacity: '200ml' },
    { taste: '柑橘调', color: '透明', capacity: '100ml' },
    { taste: '柑橘调', color: '浅绿', capacity: '200ml' },
    { taste: '柑橘调', color: '浅绿', capacity: '100ml' },
]



function generateTables(sku) {
    let result = []

    sku.forEach((skuItem, index) => {
        if (index === 0) {
            result = skuItem.data.map(skuValue => ({ [skuItem.key]: skuValue }))
        } else {
            let tempResult = []
            for (const i of result) {
                tempResult = [...tempResult, ...skuItem.data.map(skuValue => ({ ...i, [skuItem.key]: skuValue }))]
            }
            result = tempResult
        }
    })

    return result
}


console.log(generateTables(sku))