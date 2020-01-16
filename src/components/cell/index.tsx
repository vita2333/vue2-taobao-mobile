import { createNamespace } from '@/utils/create'
import { CreateElement } from 'vue'
import { DefaultProps, ScopedSlots } from '@/utils/types'
import { isDef } from '@/utils'
import { Mod } from '@/utils/create/bem'
import Icon from '@/components/icon'
import '@/components/icon/index.less'

const [createComponent, bem] = createNamespace('cell')
export const cellProps = {
  icon: String,
  size: String,
  isLink: Boolean,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
}

function Cell(
  h: CreateElement,
  props: DefaultProps,
  slots: ScopedSlots
  // context: RenderContext<DefaultProps>
) {
  const { title, label, size, value, isLink } = props
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
  function RightIcon() {
    let rightIconSlot = slots['right-icon']
    if (!rightIconSlot && isLink) {
      rightIconSlot = () => <Icon name={'arrow-right'}></Icon>
    }
    if (rightIconSlot) {
      return <span class={bem('right-icon')}>{rightIconSlot()}</span>
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
      {RightIcon()}
    </div>
  )
}
Cell.props = cellProps

export default createComponent(Cell)
