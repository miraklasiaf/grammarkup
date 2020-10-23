import { extendTheme } from '@chakra-ui/core'
import { foundations } from './foundations'
import { layerStyles, textStyles } from './styles'
import { ColorModeOptions } from '@chakra-ui/system'
import { mode, Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: mode('text', 'white')(props),
      bg: mode('white', 'dark')(props),
      margin: 0,
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    }
  })
}

/**
 * Color mode config
 */
const config: ColorModeOptions = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const customTheme = {
  config,
  styles,
  layerStyles,
  textStyles,
  ...foundations,
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 4
    },
    wide: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['layout', null, 'wide']
    },
    copy: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['copy', null, 'copyPlus']
    },
    narrow: {
      width: '100%',
      mx: 'auto',
      px: 4,
      maxWidth: ['narrow', null, 'narrowPlus']
    }
  },
  mdx: {
    h1: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: '2xl'
    },
    h2: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: 'xl'
    },
    h3: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: 'xl'
    },
    h4: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: 'lg'
    },
    h5: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: 'sm'
    },
    h6: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      mt: 0,
      mb: 0,
      fontSize: 0
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 8
    },
    img: {
      maxWidth: '100%'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'border'
    },
    a: {
      color: 'primary',
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
      ':focus,:hover': {
        textDecorationStyle: 'wavy'
      }
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 'lg',
      p: 4,
      color: 'text',
      bg: 'sunken',
      overflow: 'auto',
      borderRadius: 'default',
      code: {
        color: 'inherit',
        mx: 0,
        '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
          color: 'muted'
        },
        '.comment': {
          fontStyle: 'italic'
        },
        '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable': {
          color: 'red'
        },
        '.atrule, .attr-value, .keyword': {
          color: 'blue'
        },
        '.selector, .attr-name, .string, .char, .builtin, .inserted': {
          color: 'orange'
        }
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      color: 'accent',
      bg: 'sunken',
      borderRadius: 'small',
      mx: 1,
      px: 1
    },
    'p > code, li > code': {
      color: 'accent',
      fontSize: 'xl'
    },
    li: {
      my: 2
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'border',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    }
  }
}

const theme = extendTheme(customTheme)

export default theme
