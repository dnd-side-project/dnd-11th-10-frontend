import { Preview } from '@storybook/react'
import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'background',
      values: [
        {
          name: 'background',
          value: '#0E121B',
        },
      ],
    },
  },
}

export default preview
