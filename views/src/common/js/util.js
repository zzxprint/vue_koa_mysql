export default {
    // 是否还能加入购物车
    canPlusCommodity(item, cartList) {
        // 判断购物车折扣商品是否超出上限
        for(let i = 0; i < cartList.length; i++) {
            if(cartList[i].discountPrice != undefined && cartList[i].discountPrice != '') {
                // 当商品有折扣时判断
                if(cartList[i].commodityId == item.commodityId && cartList[i].count >= 2) {
                    return false
                }
            }
        }
        return true
    },
}