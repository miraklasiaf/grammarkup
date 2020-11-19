import { chakra, useColorModeValue } from '@chakra-ui/react'

export default function Heading({ children }) {
  const color = useColorModeValue('teal.700', 'inherit')

  return (
    <chakra.h4
      fontSize="sm"
      fontWeight="bold"
      my={5}
      textTransform="uppercase"
      letterSpacing="wider"
      color={color}
    >
      {children}
    </chakra.h4>
  )
}
