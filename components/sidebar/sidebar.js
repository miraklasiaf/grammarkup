import * as React from 'react'
import { useRouter } from 'next/router'
import { Box, chakra, Stack } from '@chakra-ui/core'
import SidebarCategory from './sidebar-category'
import SidebarLink from './sidebar-link'

const Sidebar = ({ routes }) => {
  const { pathname } = useRouter()
  const ref = React.useRef(null)

  return (
    <Box
      ref={ref}
      as="aside"
      pos="sticky"
      top={24}
      w="280px"
      pr={8}
      pb={8}
      pl={2}
      overflowY="auto"
      flexShrink={0}
      h="calc(((100vh - 1.5rem) - 64px) - 42px);"
    >
      {/* <Search /> */}
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && (
              <chakra.h4 fontSize="md" my={5} fontWeight="bold">
                {c1.title}
              </chakra.h4>
            )}

            {c1.routes.map((c2) => {
              if (!c2.routes) {
                return (
                  <SidebarLink mt={4} key={c2.path} href={c2.path}>
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
