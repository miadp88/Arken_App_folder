import { mount } from '@vue/test-utils'
import GuessAge from '../components/GuessAge.vue'
import { it, expect } from 'vitest'
// eslint-disable-next-line no-unused-vars
const wrapper = mount(GuessAge)

it('testing GuessAge component props', async () => {
  expect(GuessAge.props.title).toContain('Guess User Age App')
})

it('Test if data is a function', () => {
  expect(typeof GuessAge.data).toBe('function')
})
