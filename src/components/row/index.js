import { createNamespace } from '@/utils/create'

const [createComponent, bem] = createNamespace('row')

export default createComponent({
  props: {
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div',
    },
    type: String,
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    },
  },
  render() {
    const { align, justify } = this
    const flex = this.type === 'flex'
    const margin = `-${Number(this.gutter) / 2}px`
    const style = this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    return (
      <this.tag
        class={bem({
          flex,
          [`align-${align}`]: align,
          [`justify-${justify}`]: justify,
        })}
        style={style}
        onclick={this.onClick}
      >
        {this.$slots.default}
      </this.tag>
    )
  },
})
