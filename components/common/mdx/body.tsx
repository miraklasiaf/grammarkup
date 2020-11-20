import { chakra, Alert, useColorModeValue } from '@chakra-ui/react'

export const P = ({ children, ...delegated }) => {
  return (
    <chakra.p apply="mdx.p" {...delegated}>
      {children}
    </chakra.p>
  )
}

export const UL = ({ children, ...delegated }) => {
  return (
    <chakra.ul apply="mdx.ul" {...delegated}>
      {children}
    </chakra.ul>
  )
}

export const OL = ({ children, ...delegated }) => {
  return (
    <chakra.ol apply="mdx.ul" {...delegated}>
      {children}
    </chakra.ol>
  )
}

export const LI = ({ children, ...delegated }) => {
  return (
    <chakra.li pb="4px" {...delegated}>
      {children}
    </chakra.li>
  )
}

export const Blockquote = ({ children, ...delegated }) => {
  return (
    <Alert
      as="blockquote"
      display="flex"
      justifyContent="center"
      my="6"
      w="98%"
      role="none"
      borderRadius="md"
      fontStyle="italic"
      textAlign="center"
      color={useColorModeValue('hsl(225deg, 12%, 40%)', 'hsl(210deg, 14%, 66%)')}
      bg={useColorModeValue('white', 'bg.dark')}
      {...delegated}
    >
      {children}
    </Alert>
  )
}

export const Pre = ({ children, ...delegated }) => {
  return <chakra.div my="2em" borderRadius="sm" {...delegated} />
}

export const Strong = ({ children, ...delegated }) => {
  return (
    <chakra.strong fontWeight="semibold" {...delegated}>
      {children}
    </chakra.strong>
  )
}

export const Hr = ({ children, ...delegated }) => {
  return (
    <chakra.hr apply="mdx.hr" {...delegated}>
      {children}
    </chakra.hr>
  )
}
