import { useRef, useEffect } from 'react'
import NavLink from './nav-link'
import { Box } from '@chakra-ui/react'

export default function Post({ isMobile, route, onClick, ...props }: any) {
  const selectedRef = useRef()
  const ref = route.selected ? selectedRef : null

  useEffect(() => {
    if (ref && ref.current && !isMobile) {
      const content = document.querySelector('#sidebar-content')
      // 32 is the top and bottom margin for `.link`
      //@ts-expect-error
      const height = ref.current.offsetTop - 32
      //@ts-expect-error
      content.scrollTop = height - content.offsetHeight / 2
    }
  }, [ref, isMobile])

  return (
    <Box ref={ref} mt={3}>
      <NavLink
        route={route}
        scrollSelectedIntoView={props.scrollSelectedIntoView}
        categorySelected={props.categorySelected}
        onClick={onClick}
      />
    </Box>
  )
}
