import { mount } from '@vue/test-utils'

export { mount }

export function later(delay: number = 0): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, delay)
  })
}

export function snapshotDemo(Demo: any, options: any = {}) {
  test('renders demo correctly', async () => {
    if (options.beforeTest) {
      options.beforeTest()
    }
    const wrapper = mount(Demo)
    await later()
    expect(wrapper).toMatchSnapshot()
    if (options.afterTest) {
      options.afterTest()
    }
  })
}
