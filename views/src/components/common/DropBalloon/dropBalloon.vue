<template>
    <div class="drop-balloon-content">
    </div>
</template>

<script>
export default {
    methods: {
        setDropBalloon() {
            // 获取坐标
            let x = event.clientX //鼠标位置的横坐标
            let y = window.innerHeight - event.clientY
            // 获取父元素
            let parentDiv = document.getElementsByClassName('drop-balloon-content')[0]
            // 生成子元素
            let childDiv = document.createElement('div')
            childDiv.className = 'drop-balloon'
            childDiv.style.left = (x - 10) + 'px'
            childDiv.style.bottom = (y - 13) + 'px'
            // 生成vant元素
            let vantDiv = document.createElement('i')
            vantDiv.className = 'van-icon van-icon-cart-circle cart-icon'
            childDiv.appendChild(vantDiv)
            // 动画
            setTimeout(() => {
                childDiv.className += ' ' + 'left'
            }, 10);
            setTimeout(() => {
                childDiv.className += ' ' + 'drop'
                vantDiv.className += ' ' + 'shrink'
            }, 30);
            // // 放到父元素中
            parentDiv.appendChild(childDiv)
            // // 动画执行完删除元素
            setTimeout(() => {
                let ball = document.getElementsByClassName('drop-balloon')
                ball[0].remove()
            }, 1000)
        }
    }
}
</script>

<style>
.drop-balloon{
    position: fixed;
    height: 60px;
    width: 60px;
    z-index: 999;
    border-radius: 50%;
    /* background: #00AAEE; */
    transition: all 1s;
}
.left{
    left: 440px !important;
    transition: all linear 0.8s;
}
.drop{
    bottom: 0px !important;
    height: 0;
    width: 0;
    transition: cubic-bezier(.5,-0.25,.9,-0.09) 0.7s;
}
.cart-icon{
    margin-bottom: 20px;
    font-size: 60px;
    color: #00AAEE;
}
.shrink{
    font-size: 1px !important;
    transition: all 1s;
}
</style>