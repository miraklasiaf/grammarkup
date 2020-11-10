import { Box, Stack } from '@chakra-ui/core'
import { Routes } from '@/utils'
import { useRouter } from 'next/router'
import * as React from 'react'
import Category from './Category'
import SidebarLink from './SidebarLink'
import Heading from './Heading'

export type SidebarContentProps = Routes & {
  pathname?: string
  contentRef?: any
}

export function SidebarRoutes(props: SidebarContentProps) {
  const { routes, pathname, contentRef } = props

  return (
    <>
      {routes.map((c1, idx) => {
        return (
          <React.Fragment key={idx}>
            {c1.heading && <Heading>{c1.title}</Heading>}
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
                <Category
                  key={c2.rootPath}
                  contentRef={contentRef}
                  selected={selected}
                  opened={opened}
                  {...c2}
                >
                  <Stack spacing={2}>
                    {c2.routes.map((c3) => (
                      <SidebarLink key={c3.path} href={c3.path}>
                        {c3.title}
                      </SidebarLink>
                    ))}
                  </Stack>
                </Category>
              )
            })}
          </React.Fragment>
        )
      })}
    </>
  )
}

const Sidebar = ({ routes, isMobile, ...props }: any) => {
  const { pathname } = useRouter()

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={ref}
      as="aside"
      pos={isMobile ? 'static' : 'sticky'}
      top={isMobile ? 0 : '6.5rem'}
      w={isMobile ? 'full' : '280px'}
      mt={isMobile ? 2 : 0}
      pr={isMobile ? 2 : 8}
      pb={isMobile ? 4 : 2}
      pl={3}
      overflowY={isMobile ? 'none' : 'auto'}
      flexShrink={0}
      h={isMobile ? 'full' : 'calc(((100vh - 1.5rem) - 64px) - 42px);'}
      {...props}
    >
      {/* <Search /> */}
      <SidebarRoutes routes={routes} pathname={pathname} contentRef={ref} />
    </Box>
  )
}

export default Sidebar
