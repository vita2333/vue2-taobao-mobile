import { createNamespace } from '@/utils/create'
import { CreateElement } from 'vue'
import { DefaultProps, ScopedSlots } from '@/utils/types'

const [createComponent, bem] = createNamespace('cell-group')

function CellGroup(
  h: CreateElement,
  props: DefaultProps,
  slots: ScopedSlots
  // context: RenderContext<DefaultProps>
) {
  const Group = <div>{slots.default?.()}</div>
  let Title
  if (props.title || slots.title) {
    Title = <div class={bem('title')}>{slots.title ? slots.title() : props.title}</div>
  }
  return (
    <div class={bem()}>
      {Title}
      {Group}
    </div>
  )
}

export default createComponent(CellGroup)
