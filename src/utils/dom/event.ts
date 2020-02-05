import { EventHandler } from '@/utils/types'
import { isServer } from '@/utils'
// eslint-disable-next-line import/no-mutable-exports
export let supportPassive = false

if (!isServer) {
  try {
    const opts = {}
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get() {
        supportPassive = true
      },
    })
    window.addEventListener('test-passive', null as any, opts)
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export function on(target: EventTarget, event: string, handler: EventHandler, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, supportPassive ? { capture: false, passive } : false)
  }
}

export function off(target: EventTarget, event: string, handler: EventHandler) {
  if (!isServer) {
    target.removeEventListener(event, handler)
  }
}
