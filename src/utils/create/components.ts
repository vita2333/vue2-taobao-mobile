import Vue, { ComponentOptions, RenderContext, VNode, VueConstructor } from 'vue'
import { camelize } from '@/utils/format/string'
import { DefaultProps, FunctionComponent } from '@/utils/types'

export interface VitaComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean // 使组件无状态 (没有 data) 和无实例 (没有 this 上下文)。他们用一个简单的 render 函数返回虚拟节点使它们渲染的代价更小。
  install?: (Vue: VueConstructor) => void
}

export type TsxBaseProps<Slots> = {
  key: string | number
  // hack for jsx prop spread
  props: any
  class: any
  style: string | object[] | object
  scopedSlots: Slots
}
export type TsxComponent<Props, Events, Slots> = (
  props: Partial<Props & Events & TsxBaseProps<Slots>>
) => VNode

function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this
  Vue.component(name as string, this)
  Vue.component(camelize(`-${name}`), this)
}

// unify slots & scopedSlots
export function unifySlots(context: RenderContext) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {}
  const slots = context.slots()

  Object.keys(slots).forEach((key) => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })

  return scopedSlots
}

/**
 * 转换函数式组件->对象式组件
 * 函数式组件写起来更灵活
 */
function transformFunctionComponents(pure: FunctionComponent): VitaComponentOptions {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: (h, context): any => pure(h, context.props, unifySlots(context), context),
  }
}

export function createComponent(name: string) {
  return function<Props = DefaultProps, Events = {}, Slots = {}>(
    sfc: VitaComponentOptions | FunctionComponent
  ): TsxComponent<Props, Events, Slots> {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponents(sfc)
    }
    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || []
    }
    sfc.name = name
    sfc.install = install
    return sfc as TsxComponent<Props, Events, Slots>
  }
}
