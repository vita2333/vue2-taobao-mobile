import Col from '..'
import Row from '@/components/row'
import { mount } from '../../../../tests'

test('Col click event', () => {
  const wrapper = mount(Col)
  wrapper.trigger('click')
  expect(wrapper.emitted('click')).toBeTruthy()
})

test('Row click event', () => {
  const wrapper = mount(Row)
  wrapper.trigger('click')
  expect(wrapper.emitted('click')).toBeTruthy()
})
