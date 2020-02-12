import { createNamespace } from '@/utils/create'
import { isHidden } from '@/utils/dom/style'
import { addUnit } from '@/utils/format/unit'
import Title from './Title'
import Content from './Content'
import { ParentMixin } from '@/mixins/relation'
import { BindEventMixin } from '@/mixins/bind-event'
import { isDef } from '@/utils'
import { getVisibleHeight } from '@/utils/dom/scroll'
import { scrollLeftTo } from '@/components/tabs/utils'

const [createComponent, bem] = createNamespace('tabs')
export default createComponent({
  mixins: [
    ParentMixin('vitaTabs'),
    BindEventMixin(function(bind) {
      bind(window, 'resize', this.resize, true)
    }),
  ],
  props: {
    active: {
      type: [Number, String],
      default: 0,
    },
  },
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
  watch: {
    color: 'setLine',
    active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name)
      }
    },
    scrollOffset() {
      // todo sticky
      return 0
    },
  },
  mounted() {
    this.onShow()
  },

  activated() {
    console.log('222===', 222)
    this.onShow()
    this.setLine()
  },

  methods: {
    // @exposed-api
    resize() {
      this.setLine()
    },
    onShow() {
      this.$nextTick(() => {
        this.inited = true
        this.tabHeight = getVisibleHeight(this.$refs.wrap)
        this.scrollIntoView(true)
      })
    },
    // update nav bar style
    setLine() {
      console.log('111===', 111)
      this.$nextTick(() => {
        const { titles } = this.$refs
        if (!titles || !titles[this.currentIndex] || isHidden(this.$el)) {
          console.log('titles===', titles)
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
    setCurrentIndexByName(name) {
      const matched = this.children.filter((tab) => tab.computedName === name)
      const defaultIndex = (this.children[0] || {}).index || 0
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex)
    },
    setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex)
      if (isDef(currentIndex) && currentIndex !== this.currentIndex) {
        const shouldEmitChange = this.currentIndex !== null
        this.currentIndex = currentIndex
        this.$emit('input', this.currentName)
        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title)
        }
      }
    },
    findAvailableTab(index) {
      const diff = index < this.currentIndex ? -1 : 1

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index
        }

        index += diff
      }
    },
    // emit event when clicked
    onClick(index) {
      const { title, computedName } = this.children[index]
      this.setCurrentIndex(index)
      this.$emit('click', computedName, title)
    },
    // scroll active tab into view
    scrollIntoView(immediate) {
      const { titles } = this.$refs

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return
      }
      const { nav } = this.$refs
      const title = titles[this.currentIndex].$el
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2
      scrollLeftTo(nav, to, immediate ? 0 : this.duration)
    },
  },
  render() {
    const Nav = this.children.map((item, index) => (
      <Title
        ref="titles"
        refInFor
        title={item.title}
        isActive={index === this.currentIndex}
        scopedSlots={{ default: () => item.slots('title') }}
        onClick={() => {
          this.onClick(index)
        }}
      />
    ))
    const Wrap = (
      <div ref="wrap" class={[bem('wrap')]}>
        <div ref="nav" role="tablist" class={bem('nav')}>
          {this.slots('nav-left')}
          {Nav}
          <div class={bem('line')} style={this.lineStyle}></div>
          {this.slots('nav-right')}
        </div>
      </div>
    )
    return (
      <div class={bem()}>
        {Wrap}
        <Content currentIndex={this.currentIndex} onChange={this.setCurrentIndex}>
          {this.slots()}
        </Content>
      </div>
    )
  },
})
