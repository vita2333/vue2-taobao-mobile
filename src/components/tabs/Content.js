import { createNamespace } from '@/utils/create'
import { TouchMixin } from '@/mixins/touch'

const [createComponent, bem] = createNamespace('tabs')
const MIN_SWIPE_DISTANCE = 50

export default createComponent({
  mixins: [TouchMixin],
  props: {
    currentIndex: Number,
  },
  computed: {
    listeners() {
      return {
        touchstart: this.touchStart,
        touchmove: this.touchMove,
        touchend: this.onTouchEnd,
        touchcancel: this.onTouchEnd,
      }
    },
  },
  methods: {
    onTouchEnd() {
      const { direction, deltaX, currentIndex } = this

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1)
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1)
        }
      }
    },
    genChildren() {
      return this.slots()
    },
  },
  render() {
    return (
      <div class={bem('content')} {...{ on: this.listeners }}>
        {this.genChildren()}
      </div>
    )
  },
})
