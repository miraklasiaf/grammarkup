import { Box, Stack, chakra, useColorModeValue } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import * as React from 'react'
import SidebarCategory from './SidebarCategory'
import SidebarLink from './SidebarLink'

const Sidebar = ({ routes, isMobile, ...props }: any) => {
  const { pathname } = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)
  const color = useColorModeValue('gray.700', 'inherit')

  return (
    <Box
      ref={ref}
      as="aside"
      pos={isMobile ? 'static' : 'sticky'}
      top={isMobile ? 0 : '6.5rem'}
      w={isMobile ? 'full' : '280px'}
      mt={isMobile ? 2 : 0}
      pr={isMobile ? 2 : 8}
      pb={8}
      pl={3}
      overflowY={isMobile ? 'none' : 'auto'}
      flexShrink={0}
      h={isMobile ? 'full' : 'calc(((100vh - 1.5rem) - 64px) - 42px);'}
      {...props}
    >
      {/* <Search /> */}
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && (
              <chakra.h4
                fontSize="sm"
                fontWeight="bold"
                my="1.25rem"
                textTransform="uppercase"
                letterSpacing="wider"
                color={color}
              >
                {c1.title}
              </chakra.h4>
            )}

            {c1.routes.map((c2) => {
              if (!c2.routes) {
                return (
                  <SidebarLink ml="-3" mt="2" key={c2.path} href={c2.path}>
                    {c2.title}
                  </SidebarLink>
                )
              }

              const selected = pathname.startsWith(c2.rootPath)

              const opened = selected || c2.open

              return (
                <SidebarCategory
                  key={c2.rootPath}
                  contentRef={ref}
                  selected={selected}
                  opened={opened}
                  {...c2}
                >
                  <Stack spacing={3}>
                    {c2.routes.map((c3) => (
                      <SidebarLink key={c3.path} href={c3.path}>
                        {c3.title}
                      </SidebarLink>
                    ))}
                  </Stack>
                </SidebarCategory>
              )
            })}
          </React.Fragment>
        )
      })}
    </Box>
  )
}

export default Sidebar
