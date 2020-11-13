import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  IconButton,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { Sidebar } from '@/components/ui'
import { beginnerSidebar, intermediateSidebar, advancedSidebar } from '@/configs/sidebar'
import { useRef } from 'react'

function getRoutes(route) {
  switch (route) {
    case 'beginner':
      return beginnerSidebar.routes
    case 'intermediate':
      return intermediateSidebar.routes
    case 'advanced':
      return advancedSidebar.routes
    default:
      return beginnerSidebar.routes
  }
}

const MobileNav = (props) => {
  const { pathname } = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

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
    </>
  )
}

export default MobileNav
