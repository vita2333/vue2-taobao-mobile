import Vue, { VNode } from 'vue'

export function ParentMixin(parent: string) {
  return {
    provide() {
      return { [parent]: this }
    },
    data() {
      return {
        children: [],
      }
    },
  }
}
type ChildrenMixinThis = {
  disableBindRelation?: boolean
}
export function ChildrenMixin(parent: string, options: ChildrenMixinThis = {}) {
  const indexKey = options.indexKey || 'index'
  return Vue.extend({
    inject: {
      [parent]: {
        default: null,
      },
    },
    computed: {
      parent() {
        if ((this as ChildrenMixinThis).disableBindRelation) {
          return null
        }
        return (this as any)[parent]
      },

    },
  })
}
