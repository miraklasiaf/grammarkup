import { Box, Text, Stack, Link, chakra } from '@chakra-ui/core'

export const Footer = () => (
  <Box as="footer" mt={8} textAlign="center" pb={12}>
    <Text fontSize="sm">
      <span>Support Grammarkup:</span>
    </Text>
    <Stack mt={3} direction="row" spacing="12px" justify="center">
      <Link href="https://ko-fi.com/miraklasiaf" isExternal>
        <chakra.img
          w={32}
          src="https://d33wubrfki0l68.cloudfront.net/3152c2f2d5e1060f65508be266a5341fed8230d5/587c6/assets/img/kofi-min.png"
        />
      </Link>
      <Link href="https://saweria.co/miraklasiaf" isExternal>
        <chakra.h1 fontFamily="Comforta, cursive">saweria.co</chakra.h1>
      </Link>
    </Stack>
  </Box>
)

export default Footer
