
import realestate from '@/components/realestate'
import { mount } from '@vue/test-utils'

describe('realestate.vue', () => {
  it('it should shows correct title', () => {
    const wrapper = mount(realestate)
    expect(wrapper.vm.$el.querySelector('#title').textContent)
      .to.equal('Welcome To The Real Estate Information')
  })
  it('div should exist', () => {
    const wrapper = mount(realestate)
    const div = wrapper.find('div')
    // eslint-disable-next-line no-unused-expressions
    expect(div.exists()).to.be.true
  })
  it('input text should render correct value', async () => {
    const wrapper = mount(realestate)
    const Input = wrapper.find('input[type="text"]')
    await Input.setValue('street')
    expect(wrapper.vm.$data.search).to.equal('street')
  })
})
