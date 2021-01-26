import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import foundations from './foundations'
import { mdx } from './mdx'

export const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif'
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.700', 'hsl(0deg, 0%, 100%)')(props),
        bg: mode('white', 'bg.dark')(props)
      }
    })
  },
  ...foundations,
  mdx
})

export default theme
