import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  IconButton,
  Box,
  useDisclosure,
  VStack
} from '@chakra-ui/core'
import NavLink from './header-nav-link'
import { useRouter } from 'next/router'
import Sidebar from './sidebar/sidebar'
import { MdDehaze } from 'react-icons/md'
import useRouteChanged from '@/utils/use-route-changed'
import beginner from '@/configs/beginner-sidebar'
import intermediate from '@/configs/intermediate-sidebar'
import advanced from '@/configs/advanced-sidebar'
import { useRef } from 'react'

function getRoutes(route) {
  switch (route) {
    case 'beginner':
      return beginner.routes
    case 'intermediate':
      return intermediate.routes
    case 'advanced':
      return advanced.routes
    default:
      return beginner.routes
  }
}

const MobileNav = (props) => {
  const { pathname } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  useRouteChanged(onClose)

  const section = pathname.split('/')[1]

  const routes = getRoutes(section)

  return (
    <>
      <IconButton
        aria-label="Open menu"
        fontSize="lg"
        display={{ sm: 'inline-flex', md: 'none' }}
        variant="ghost"
        verticalAlign="middle"
        icon={<MdDehaze />}
        onClick={onOpen}
        ref={btnRef}
        {...props}
      />
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Grammarkup</DrawerHeader>
            <DrawerBody py={0} px={4}>
              <Box top="0">
                <VStack as="nav" spacing={4} alignItems="flex-start">
                  <NavLink href="/beginner/getting-started">Beginner Grammar</NavLink>
                  <NavLink href="/intermediate/getting-started">
                    Intermediate Grammar
                  </NavLink>
                  <NavLink href="/advanced/getting-started">Advanced Grammar</NavLink>
                </VStack>

                <Sidebar routes={routes} isMobile />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MobileNav
