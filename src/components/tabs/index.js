import { createNamespace } from '@/utils/create'

const [createComponent, bem] = createNamespace('tabs')
export default createComponent({
  model: {
    prop: 'active',
  },
  data() {
    return {
      position: '',
      currentIndex: null,
    }
  },
  computed: {},
  methods: {
    // @exposed-api
    resize() {
      this.setLine()
    },
    // update nav bar style
    setLine() {
      this.$nextTick(() => {
        const { titles } = this.$refs
        if (!titles || !titles[this.currentIndex]) {
        }
      })
    },
  },
})
