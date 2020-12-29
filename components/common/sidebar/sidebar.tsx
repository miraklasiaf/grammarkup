import { Box } from '@chakra-ui/react'
import * as React from 'react'

const Sidebar = ({ routes, isMobile, children, ...props }: any) => {
  return (
    <Box
      as="aside"
      pos={isMobile ? 'static' : 'sticky'}
      top={isMobile ? 0 : '6.5rem'}
      w={isMobile ? 'full' : '280px'}
      mt={isMobile ? 2 : 0}
      pr={isMobile ? 2 : 4}
      pb={isMobile ? 4 : 2}
      pl={3}
      overflowY={isMobile ? 'none' : 'auto'}
      flexShrink={0}
      h={isMobile ? 'full' : 'calc(((100vh - 1.5rem) - 64px) - 42px);'}
      id="sidebar-content"
      {...props}
    >
      {/* <Search /> */}
      {children}
    </Box>
  )
}

export default Sidebar
