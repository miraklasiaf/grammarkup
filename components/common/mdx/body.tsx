import { chakra } from '@chakra-ui/react'

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
