<template>
    <div class="footer">
		<van-tabbar v-model="active" active-color="#00AAEE" route safe-area-inset-bottom>
			<van-tabbar-item to="/" name="shop" icon="shop-o">首页</van-tabbar-item>
			<van-tabbar-item to="/category" name="order" icon="description">分类</van-tabbar-item>
			<van-tabbar-item to="/cart" name="cart" icon="shopping-cart-o" :info="cartCount">购物车</van-tabbar-item>
			<van-tabbar-item to="/mine" name="mine" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<script>
export default {
	data () {
		return {
			active: '/'
		}
	},
	computed: {
		cartCount() {
			let count = this.$store.getters.cartTotalCount
			if(count == 0){
				return ''
			}else{
				return count
			}
		}
	}
}
</script>

<style lang="less" scoped>
.footer{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100%;
	z-index: 999;
	box-shadow: 0 -2px 5px #EFEFEF;
	/deep/ .van-info{
		right: -15px;
		padding: 3px 8px 0 8px;
	}
}
</style>
