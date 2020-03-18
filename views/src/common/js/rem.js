const baseSize = 37.5

// 设置rem函数
function setRem () {
  // 当页面宽度相对于375宽等比缩放比例
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()

// 窗口改变时重置rem
window.onresize = function () {
  setRem()
}
