import { useRef } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, Stack, chakra } from '@chakra-ui/core'
import SidebarCategory from './sidebar-category'
import SidebarLink from './sidebar-link'

const Sidebar = ({ routes, isMobile, ...props }) => {
  const { pathname } = useRouter()
  const ref = useRef(null)

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
      pl={1}
      overflowY={isMobile ? 'none' : 'auto'}
      flexShrink={0}
      h={isMobile ? 'calc(100vh - 5.5rem)' : 'calc(((100vh - 1.5rem) - 64px) - 42px);'}
      {...props}
    >
      {/* <Search /> */}
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && (
              <chakra.h4 fontSize="md" fontWeight="bold" my="1.25rem">
                {c1.title}
              </chakra.h4>
            )}

            {c1.routes.map((c2) => {
              if (!c2.routes) {
                return (
                  <SidebarLink mt="3" key={c2.path} href={c2.path}>
                    {c2.title}
                  </SidebarLink>
                )
              }

              const selected = pathname.startsWith(c2.path)
              const opened = selected || c2.open

              return (
                <SidebarCategory
                  contentRef={ref}
                  key={c2.path}
                  {...c2}
                  selected={selected}
                  opened={opened}
                >
                  <Stack spacing="3">
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
