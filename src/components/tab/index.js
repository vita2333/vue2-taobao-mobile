import { createNamespace } from '@/utils/create'
import { ChildrenMixin } from '@/mixins/relation'
import { isDef } from '@/utils'

const [createComponent] = createNamespace('tab')
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
      return this.computedName() === this.parent.currentName
    },
  },
  watch: {},
})
