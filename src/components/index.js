import './index.less'
import Cell from './cell'
import CellGroup from './cell-group'
import Col from './col'
import Icon from './icon'
import Row from './row'

function install(Vue) {
  const components = [Cell, CellGroup, Col, Icon, Row]
  components.forEach((item) => {
    if (item.install) {
      Vue.use(item)
    } else {
      Vue.component(item.name, item)
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, Cell, CellGroup, Col, Icon, Row }
