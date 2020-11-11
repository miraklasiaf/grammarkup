import { Flex, Box, HStack, useColorModeValue } from '@chakra-ui/core'
import MobileNav from './mobile-nav'
import NextLink from 'next/link'
import { ThemeSwitcher, NavLink } from '@/components/ui'
import { Logo } from '@/components/icons'
import { useRouter } from 'next/router'

const HeaderContent = () => {
  const router = useRouter()
  const logoColor = useColorModeValue('gray.600', 'whiteAlpha.800')

  return (
    <Flex w="full" h="full" px={6} align="center" justify="space-between">
      <Flex align="center">
        <NextLink href="/" passHref>
          <Box
            as="a"
            display="block"
            aria-label="Grammarkup, Back to homepage"
            fontWeight="bold"
            color={logoColor}
          >
            <Logo />
          </Box>
        </NextLink>
        <HStack as="nav" spacing={4} ml={6} display={{ base: 'none', md: 'flex' }}>
          <NavLink href="/beginner/getting-started">Beginner</NavLink>
          <NavLink href="/intermediate/getting-started">Intermediate</NavLink>
          <NavLink href="/advanced/getting-started">Advanced</NavLink>
        </HStack>
      </Flex>

      <Flex maxW="720px" align="center" color="gray.400">
        <ThemeSwitcher />
        {router.pathname === '/' ? null : <MobileNav display={{ md: 'none' }} />}
      </Flex>
    </Flex>
  )
}

const Header = (props) => {
  const bg = useColorModeValue('white', 'gray.900')

  return (
    <Box
      as="header"
      pos="fixed"
      w="full"
      insetX={0}
      top={0}
      bg={bg}
      zIndex="1"
      borderBottomWidth="1px"
      {...props}
    >
      <Box h={16} mx="auto" maxW="1200px">
        <HeaderContent />
      </Box>
    </Box>
  )
}

export default Header
