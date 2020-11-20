import { Box } from '@chakra-ui/react'

export const Container = (props) => (
  <Box w="full" pb="12" pt="3" mx="auto" maxW="1200px" px={{ base: 4, md: 6 }} {...props} />
)

export default Container
