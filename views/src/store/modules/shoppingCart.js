const shoppingCart = {
    state: {
        cartList: []
    },

    mutations: {
        // 购物车增加一个商品
        PLUS_COMMODITY: (state, payload) => {
            let commodity = Object.assign({}, payload)
            // 当购物车为空时直接push
            if(state.cartList.length == 0){
                commodity.count = 1
                // 默认选中
                commodity.selected = true
                state.cartList.push(commodity)
            }else {
                for(let i = 0; i < state.cartList.length; i++){
                    if(state.cartList[i].commodityId == commodity.commodityId){
                        state.cartList[i].count++
                        break
                    }
                    if(i == state.cartList.length - 1){
                        // 找到数组末尾还没有就添加进去
                        commodity.count = 1
                        // 默认选中
                        commodity.selected = true
                        state.cartList.push(commodity)
                        break
                    }
                }
            }
        },
        // 购物车减去一个商品
        MINUS_COMMODITY: (state, payload) => {
            let commodity = Object.assign({}, payload)
            for(let i = 0; i < state.cartList.length; i++){
                if(commodity.commodityId == state.cartList[i].commodityId){
                    state.cartList[i].count--
                    // 如果商品数量少于1，则删除
                    if(state.cartList[i].count <= 0){
                        state.cartList.splice(i, 1)
                    }
                    break
                }
            }
        },
        // 购物车删除一个商品
        DELETE_COMMODITY: (state, payload) => {
            let commodity = Object.assign({}, payload)
            for(let i = 0; i < state.cartList.length; i++){
                if(commodity.commodityId == state.cartList[i].commodityId){
                    state.cartList.splice(i, 1)
                    break
                }
            }
        },
        // 全选与取消全选
        CHECKALL_COMMODITY: (state, payload) => {
            for(let i = 0; i < state.cartList.length; i++){
                state.cartList[i].selected = payload
            }
        },
        // 删除所有选中的商品
        DELETE_SELECT_COMMODITY: state => {
            for(let i = 0; i < state.cartList.length; i++){
                if(state.cartList[i].selected){
                    state.cartList.splice(i--, 1)
                }
            }
        },
    }
}

export default shoppingCart