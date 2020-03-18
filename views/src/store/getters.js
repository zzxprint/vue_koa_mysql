const getters = {
    // 商品分类
    categoryId: state => state.commodity.categoryId,
    // 购物车
    cartList: state => state.shoppingCart.cartList,
    // 购物车总金额
    cartTotalPrice: state => {
        let price = 0
        for(let i = 0; i < state.shoppingCart.cartList.length; i++){
            if(state.shoppingCart.cartList[i].selected == true){
                let discountPrice = state.shoppingCart.cartList[i].discountPrice
                if(discountPrice != undefined && discountPrice != ''){
                    // 当商品有折扣时
                    price += state.shoppingCart.cartList[i].count * Number(state.shoppingCart.cartList[i].discountPrice)
                }else{
                    // 当商品没有折扣时
                    price += state.shoppingCart.cartList[i].count * Number(state.shoppingCart.cartList[i].commodityPrice)
                }
            }
        }
        // 计算价格，保留两位小数
        price = (price * 100 / 100).toFixed(2)
        return price
    },
    // 购物车是否全选
    cartAllSelected: state => {
        let flag = true
        for(let i = 0; i < state.shoppingCart.cartList.length; i++){
            if(state.shoppingCart.cartList[i].selected == false){
                flag = false
                break
            }
        }
        return flag
    },
    // 购物车总数量
    cartTotalCount: state => {
        let count = 0
        if(state.shoppingCart.cartList.length != 0){
            for(let i = 0; i < state.shoppingCart.cartList.length; i++){
                count += state.shoppingCart.cartList[i].count
            }
        }
        return count
    },
    // 购物车选中的商品数量
    cartSelectCount: state => {
        let count = 0
        if(state.shoppingCart.cartList.length != 0){
            for(let i = 0; i < state.shoppingCart.cartList.length; i++){
                if(state.shoppingCart.cartList[i].selected){
                    count += state.shoppingCart.cartList[i].count
                }
            }
        }
        return count
    },
    // 用户信息
    userInfo: state => state.user.userInfo
}

export default getters