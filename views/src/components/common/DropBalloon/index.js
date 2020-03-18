import ballComponent from './dropBalloon.vue'

const dropBalloon = {}

dropBalloon.install = function(Vue) {
    const ballConstructor = Vue.extend(ballComponent)
    const instance = new ballConstructor()
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    Vue.prototype.$setDropBalloon = () => {
        instance.setDropBalloon()
    }
}

export default dropBalloon