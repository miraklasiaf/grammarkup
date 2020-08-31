import {
  Flex,
  Box,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/core'
import MobileNav from './mobile-nav'
import NextLink from 'next/link'
import NavLink from './header-nav-link'
import { FaMoon, FaSun } from 'react-icons/fa'

const HeaderContent = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const logoColor = useColorModeValue('gray.600', 'whiteAlpha.800')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex w="full" h="full" px={6} align="center" justify="space-between">
      <Flex align="center">
        <NextLink href="/" passHref>
          <Box
            as="a"
            display="block"
            aria-label="Chakra UI, Back to homepage"
            fontWeight="bold"
            color={logoColor}
          >
            Grammarkup
          </Box>
        </NextLink>
        <HStack as="nav" spacing={4} ml={6} display={{ base: 'none', md: 'flex' }}>
          <NavLink href="/beginner/nouns/common-nouns">Beginner</NavLink>
          <NavLink href="/intermediate/getting-started">Intermediate</NavLink>
          <NavLink href="/advanced/getting-started">Advanced</NavLink>
        </HStack>
      </Flex>

      <Flex maxW="720px" align="center" color="gray.400">
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
        <MobileNav display={{ md: 'none' }} />
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
      <Box h={16} mx="auto" maxW="7xl">
        <HeaderContent />
      </Box>
    </Box>
  )
}

export default Header
