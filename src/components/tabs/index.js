import { createNamespace } from '@/utils/create'
import { isHidden } from '@/utils/dom/style'
import { addUnit } from '@/utils/format/unit'
import Title from './Title'
import { ParentMixin } from '@/mixins/relation'

const [createComponent] = createNamespace('tabs')
export default createComponent({
  mixins: [ParentMixin('vitaTabs')],
  model: {
    prop: 'active',
  },
  data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {},
    }
  },
  computed: {
    currentName() {
      const activeTab = this.children[this.currentIndex]
      if (activeTab) {
        return activeTab.computedName
      }
    },
  },
  methods: {
    // @exposed-api
    resize() {
      this.setLine()
    },
    // update nav bar style
    setLine() {
      this.$nextTick(() => {
        const { titles } = this.$refs
        if (!titles || !titles[this.currentIndex] || isHidden(this.$el)) {
          return
        }
        const title = titles[this.currentIndex].$el
        const width = title.offsetWidth / 2
        const left = title.offsetLeft + title.offsetWidth / 2
        this.lineStyle = {
          width: addUnit(width),
          transform: `translateX(${left}px) translateX(-50%)`,
        }
        console.log('thisLineStyle===', this.lineStyle)
      })
    },
  },
  render() {
    const Nav = this.children.map((item, index) => (
      <Title ref="titles" refInFor title={item.title} isActive={index === this.currentIndex} />
    ))
    console.log('nav===', Nav)
    return <div>{Nav}</div>
  },
})
