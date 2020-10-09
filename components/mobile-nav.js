import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  IconButton,
  Box,
  useDisclosure
} from '@chakra-ui/core'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import Sidebar from './sidebar/sidebar'
import useRouteChanged from '@/utils/use-route-changed'
import beginner from '@/configs/beginner-sidebar'
import intermediate from '@/configs/intermediate-sidebar'
import advanced from '@/configs/advanced-sidebar'
import BottomNav from './bottom-nav'
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
        size="md"
        fontSize="lg"
        aria-label="Open menu"
        display={{ sm: 'flex', md: 'none' }}
        variant="ghost"
        icon={<HamburgerIcon />}
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
                <Sidebar routes={routes} isMobile />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <BottomNav />
    </>
  )
}

export default MobileNav
