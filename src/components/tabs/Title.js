import { createNamespace } from '@/utils/create'

const [createComponent, bem] = createNamespace('tab')

export default createComponent({
  props: {
    title: String,
    isActive: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
  render() {
    return (
      <div
        role="tab"
        aria-selected={this.isActive}
        class={[bem({ active: this.isActive })]}
        onClick={this.onClick}
      >
        <span class={bem('text')}>{this.$slots.default || this.title}</span>
      </div>
    )
  },
})
