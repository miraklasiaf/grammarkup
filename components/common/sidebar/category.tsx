import { Icon, chakra, useColorModeValue, BoxProps } from '@chakra-ui/react'
import { useRef, useState, useEffect, ReactNode } from 'react'

const Arrow = (props) => (
  <svg viewBox="0 0 5 8" fill="none" {...props}>
    <path
      d="M0 0.724246C0 0.111374 0.681914 -0.223425 1.13107 0.168926L4.66916 3.25957C5.11028 3.6449 5.11028 4.3551 4.66916 4.74043L1.13107 7.83107C0.681913 8.22342 0 7.88863 0 7.27575V0.724246Z"
      fill="currentColor"
    />
  </svg>
)

interface CategoryProps extends BoxProps {
  isMobile?: boolean
  title: string
  level?: number
  opened?: boolean
  selected?: boolean
  children: ReactNode
}

interface SidebarState {
  toggle?: boolean
  shouldScroll?: boolean
}

function Category({ isMobile, title, selected, opened, children }: CategoryProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [{ toggle, shouldScroll = false }, setToggle] = useState<SidebarState>({
    toggle: selected || opened
  })
  const toggleCategory = () => {
    setToggle({ toggle: !toggle, shouldScroll: true })
  }

  // If a category is selected indirectly, open it. This can happen when using the search input
  useEffect(() => {
    if (selected) {
      setToggle({ toggle: true })
    }
  }, [selected])

  // Navigate to the start of the category when manually opened
  useEffect(() => {
    if (toggle && shouldScroll) {
      const content = document.querySelector('#sidebar-content')
      // 10 is added for better margin
      //@ts-expect-error
      const height = ref.current.offsetTop - (isMobile ? 10 : content.offsetTop)

      content.scrollTop = height
      setToggle({ toggle })
    }
  }, [toggle, shouldScroll, isMobile])

  return (
    <chakra.div mt={3} ref={ref}>
      <chakra.button
        width="full"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        userSelect="none"
        color={useColorModeValue('gray.900', 'gray.400')}
        onClick={toggleCategory}
      >
        {title}
        <Icon
          w="auto"
          h="2"
          mr="4"
          transformOrigin="center"
          transform={toggle ? 'rotate(90deg)' : undefined}
          transition="transform 0.15s ease"
          as={Arrow}
          color="teal.400"
        />
      </chakra.button>
      <chakra.div role="group" hidden={!toggle} mt={1}>
        {children}
      </chakra.div>
    </chakra.div>
  )
}

export default Category
