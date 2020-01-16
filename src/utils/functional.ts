import { RenderContext, VNodeData } from 'vue'
import { ObjectIndex } from '@/utils/types'

type Context = RenderContext & { data: VNodeData & ObjectIndex }

// emit event
export function emit(context: Context, eventName: string, ...args: any) {
  const listeners = context.listeners[eventName]
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach((listener) => {
        listener(...args)
      })
    } else {
      listeners(...args)
    }
  }
}
