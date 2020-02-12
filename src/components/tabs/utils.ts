import { cancelRaf, raf } from '@/utils/dom/raf'

let scrollLeftRafId: number

export function scrollLeftTo(el: HTMLElement, to: number, duration: number) {
  cancelRaf(scrollLeftRafId)

  let count = 0
  const from = el.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)

  function animate() {
    el.scrollLeft += (to - from) / frames

    if (++count < frames) {
      scrollLeftRafId = raf(animate)
    }
  }
  animate()
}
