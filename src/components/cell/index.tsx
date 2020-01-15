import { createNamespace } from '@/utils/create'
import { CreateElement } from 'vue'
import { DefaultProps, ScopedSlots } from '@/utils/types'
import { isDef } from '@/utils'
import { Mod } from '@/utils/create/bem'

const [createComponent, bem] = createNamespace('cell')

function Cell(
  h: CreateElement,
  props: DefaultProps,
  slots: ScopedSlots,
  // context: RenderContext<DefaultProps>
) {
  const { title, label, size, value } = props
  const showTitle = slots.title || isDef(title)

  function Label() {
    const showLabel = slots.label || isDef(label)
    if (showLabel) {
      return <div class={[bem('label')]}>{slots.label ? slots.label() : label}</div>
    }
  }

  function Title() {
    if (showTitle) {
      return (
        <div class={[bem('title')]}>
          {slots.title ? slots.title() : <span>{title}</span>}
          {Label()}
        </div>
      )
    }
  }
  function Value() {
    const showValue = slots.label || isDef(value)
    if (showValue) {
      return (
        <div class={bem('value')}>{slots.default ? slots.default() : <span>{value}</span>}</div>
      )
    }
  }
  const classes: Mod = {}
  if (size) {
    classes[size] = size
  }
  return (
    <div class={bem(classes)}>
      {Title()}
      {Value()}
    </div>
  )
}
export default createComponent(Cell)
