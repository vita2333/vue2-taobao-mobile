import { createNamespace } from '@/utils/create'

const [createComponent, bem] = createNamespace('icon')
export default createComponent({
  props: {
    name: String,
    size: String,
    color: String,
  },
  render() {
    const { name, size, color } = this
    return <i class={bem([name, size, color])}></i>
  },
})
