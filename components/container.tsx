import { Box } from '@chakra-ui/core'

export const Container = (props) => (
  <Box
    w="full"
    pb="12"
    pt="3"
    mx="auto"
    maxW="8xl"
    pl={6}
    pr={{ base: 6, md: 0 }}
    {...props}
  />
)

export default Container
