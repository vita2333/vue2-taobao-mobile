import Cell from '..'
import CellGroup from '../../cell-group'
import { mount } from '../../../../tests'

test('click event', () => {
  const click = jest.fn()
  const wrapper = mount(Cell, {
    context: {
      on: {
        click,
      },
    },
  })

  wrapper.trigger('click')
  expect(click).toHaveBeenCalled()
})

test('render slot', () => {
  const wrapper = mount({
    template: `
      <cell>
        <template v-slot:title>Custom Title</template>
        <template v-slot:label>Custom Label</template>
      </cell>
    `,
    components: {
      Cell,
    },
  })

  expect(wrapper).toMatchSnapshot()
})

test('CellGroup title slot', () => {
  const wrapper = mount(CellGroup, {
    scopedSlots: {
      title: () => 'CustomTitle',
    },
  })

  expect(wrapper).toMatchSnapshot()
})
