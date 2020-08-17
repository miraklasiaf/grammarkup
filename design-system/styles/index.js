import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    fontFamily: 'body',
    color: mode('gray.900', 'whiteAlpha.900')(props),
    bg: mode('white', 'gray.900')(props),
    lineHeight: 'normal',
    minHeight: 'full',
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    },
    '.deleted': {
      color: '#ff8383 !important',
      fontStyle: 'normal !important'
    },
    '.inserted': {
      color: '#b5f4a5 !important',
      fontStyle: 'normal !important'
    },
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased'
  })
}

export default styles
