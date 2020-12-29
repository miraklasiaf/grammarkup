import { chakra, useColorModeValue } from '@chakra-ui/react'

export default function Heading({ title, children }) {
  const color = useColorModeValue('teal.700', 'gray.500')

  return (
    <div className="heading">
      <chakra.h4
        fontSize="sm"
        fontWeight="bold"
        my={5}
        textTransform="uppercase"
        letterSpacing="wider"
        color={color}
      >
        {title}
      </chakra.h4>
      <div>{children}</div>
    </div>
  )
}
