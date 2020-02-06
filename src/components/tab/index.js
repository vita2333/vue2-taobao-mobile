import { createNamespace } from '@/utils/create'
import { ChildrenMixin } from '@/mixins/relation'
import { isDef } from '@/utils'

const [createComponent, bem] = createNamespace('tab')
export default createComponent({
  mixins: [ChildrenMixin('vitaTabs')],
  props: {
    name: [Number, String],
    title: [String],
  },
  data() {
    return {
      inited: false,
    }
  },
  computed: {
    computedName() {
      return isDef(this.name) ? this.name : this.index
    },
    isActive() {
      return this.computedName === this.parent.currentName
    },
  },
  watch: {
    'parent.currentIndex': function() {
      this.inited = this.inited || this.isActive
    },
    title() {
      this.parent.setLine()
    },
    inited(val) {
      if (val) {
        this.$nextTick(() => {
          this.parent.$emit('rendered', this.computedName, this.title)
        })
      }
    },
  },
  render(h) {
    const { slots, isActive } = this
    const shouldRender = this.inited
    const show = isActive
    const Content = shouldRender ? slots() : h()
    return (
      <div vShow={show} role="tabpanel" className={bem('pane')}>
        {Content}
      </div>
    )
  },
})
