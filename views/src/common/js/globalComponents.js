import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import PriceBox from '@/components/common/PriceBox'

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.component('Footer', Footer)
  Vue.component('Header', Header)
  Vue.component('PriceBox', PriceBox)
}

export default plugin
