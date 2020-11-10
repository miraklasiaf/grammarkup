import chakraTheme from '@chakra-ui/theme'
import foundations from './foundations'
import styles from './styles'

const theme = {
  ...chakraTheme,
  ...foundations,
  styles,
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
  textStyles: {
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2.75rem', md: '3.5rem' }
    },
    'heading-2': {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2.5rem', md: '2.75rem' }
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold'
    }
  },
  mdx: {
    h1: {
      mt: '2rem',
      mb: '.25rem',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: '1.875rem',
      letterSpacing: '-.025em'
    },
    h2: {
      mt: '4rem',
      mb: '0.5rem',
      lineHeight: 1,
      fontWeight: 'semibold',
      fontSize: '1.5rem',
      letterSpacing: '-.025em',
      '& + h3': {
        mt: '1.5rem'
      }
    },
    h3: {
      mt: '3rem',
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      letterSpacing: '-.025em'
    },
    h4: {
      mt: '3rem',
      lineHeight: 1.375,
      fontWeight: 'semibold',
      fontSize: '1.125rem'
    },
    a: {
      color: 'teal.500',
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'teal.600'
      }
    },
    p: {
      mt: '1.25rem',
      lineHeight: 1.7,
      'blockquote &': {
        mt: 0
      }
    },
    hr: {
      my: '4rem'
    },
    ul: {
      mt: '1.5rem',
      ml: '1.25rem',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '0.25rem'
      }
    },
    code: {
      rounded: 'sm',
      px: '1',
      fontSize: 'base',
      py: '2px',
      whiteSpace: 'nowrap',
      lineHeight: 'normal'
    }
  }
}

export default theme
