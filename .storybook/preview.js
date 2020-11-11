import { addParameters } from '@storybook/html'
import '@storybook/addon-console'
import '../dist/style.css'

addParameters({
  a11y: {
    config: {},
    options: {}
  },
  layout: 'fullscreen'
})
