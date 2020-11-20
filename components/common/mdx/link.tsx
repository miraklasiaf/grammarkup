import { chakra } from '@chakra-ui/react'

export const Link = ({ children, ...delegated }) => (
  <chakra.a apply="mdx.a" {...delegated}>
    {children}
  </chakra.a>
)
