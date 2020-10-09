import NavLink from './header-nav-link'
import { Stack, Box, Text, Icon, useColorModeValue } from '@chakra-ui/core'
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from 'react-icons/io'

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
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <Stack
      pos="fixed"
      direction="row"
      display={{ base: 'flex', md: 'none' }}
      w="100%"
      bottom="0"
      left="0"
      zIndex={1000}
      spacing={3}
      px="1rem"
      py="0.8rem"
      borderTopWidth="1px"
      bg={bg}
    >
      <BottomNavItem
        width="33%"
        href="/beginner/getting-started"
        icon={IoIosStarOutline}
      />
      <BottomNavItem
        width="33%"
        href="/intermediate/getting-started"
        icon={IoIosStarHalf}
      />
      <BottomNavItem width="33%" href="/advanced/getting-started" icon={IoIosStar} />
    </Stack>
  )
}

export default BottomNav
