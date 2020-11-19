import { chakra, useColorModeValue } from '@chakra-ui/react'

const LinkedHeading = (props) => {
  const anchorColor = useColorModeValue('hsl(255deg, 85%, 30%)', 'hsl(53deg, 100%, 50%)')

  return (
    <chakra.h2
      color={anchorColor}
      fontWeight="bold"
      css={{
        '&[id]': {
          pointerEvents: 'none'
        },
        '&[id]::before': {
          display: 'block',
          height: ' 6rem',
          marginTop: '-6rem',
          visibility: 'hidden',
          content: `""`
        },
        '&[id]:hover a': { opacity: 1 }
      }}
      {...props}
    >
      <chakra.div pointerEvents="auto">
        {props.children}
        {props.id && (
          <chakra.a
            aria-label="anchor"
            color={anchorColor}
            fontWeight="normal"
            outline="none"
            _focus={{ opacity: 1, boxShadow: 'outline' }}
            opacity={0}
            ml="0.375rem"
            href={`#${props.id}`}
          >
            #
          </chakra.a>
        )}
      </chakra.div>
    </chakra.h2>
  )
}

export const H1 = ({ children, ...delegated }) => {
  return (
    <chakra.h1 apply="mdx.h1" {...delegated}>
      {children}
    </chakra.h1>
  )
}

export const H2 = ({ children, ...delegated }) => {
  return (
    <LinkedHeading apply="mdx.h2" {...delegated}>
      {children}
    </LinkedHeading>
  )
}

export const H3 = ({ children, ...delegated }) => {
  return (
    <LinkedHeading as="h3" apply="mdx.h3" {...delegated}>
      {children}
    </LinkedHeading>
  )
}

export const H4 = ({ children, ...delegated }) => {
  return (
    <LinkedHeading as="h4" apply="mdx.h4" {...delegated}>
      {children}
    </LinkedHeading>
  )
}
