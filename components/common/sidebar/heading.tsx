import { chakra, useColorModeValue } from '@chakra-ui/react'

export default function Heading({ children }) {
  const color = useColorModeValue('gray.900', 'gray.400')

  return (
    <chakra.h4
      fontSize="sm"
      fontWeight="semibold"
      my={5}
      textTransform="uppercase"
      letterSpacing="wider"
      color={color}
    >
      {children}
    </chakra.h4>
  )
}
