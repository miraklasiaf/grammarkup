import { Stack, Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from '../Link'

const User1 = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </Box>
)

const User2 = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </Box>
)
const User3 = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
  </Box>
)

export function BottomNavItem(props) {
  const { href, label, icon, ...rest } = props

  return (
    <Box {...rest}>
      <NavLink href={href}>
        <Stack spacing="0" textAlign="center" alignItems="center" justifyContent="center">
          <Icon boxSize="1.4rem" as={icon} marginBottom="0.2rem" />
        </Stack>
      </NavLink>
    </Box>
  )
}

const BottomNav = () => {
  const bg = useColorModeValue('white', 'bg.dark')

  return (
    <Stack
      pos="fixed"
      direction="row"
      display={{ base: 'flex', md: 'none' }}
      w="100%"
      bottom="0"
      left="0"
      spacing={3}
      px="1rem"
      py="0.8rem"
      borderTopWidth="1px"
      bg={bg}
    >
      <BottomNavItem width="33%" href="/beginner/getting-started" icon={User1} />
      <BottomNavItem width="33%" href="/intermediate/getting-started" icon={User2} />
      <BottomNavItem width="33%" href="/advanced/getting-started" icon={User3} />
    </Stack>
  )
}

export default BottomNav
