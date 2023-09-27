import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import CurrencyOutput from '../CurrencyOutput.vue'

const vuetify = createVuetify({
  components,
  directives
})

describe('CurrencyOutput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CurrencyOutput, {
      propsData: {
        value: '123.12',
        'onUpdate:modelValue': e => wrapper.setProps({ value: e })
      },
      global: {
        plugins: [vuetify]
      }
    })
  })

  it('Меняется props при инпуте', async () => {
    expect(wrapper.props('value')).toBe('123.12')
    await wrapper.find('input').setValue('987.54')
    expect(wrapper.props('value')).toBe('987.54')
  })
})
