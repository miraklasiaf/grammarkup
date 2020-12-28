import { chakra, useColorModeValue, BoxProps } from '@chakra-ui/react'
import { useRef, useState, useEffect, ReactNode, RefObject } from 'react'

interface CategoryProps extends BoxProps {
  isMobile?: boolean
  title: string
  opened?: boolean
  selected?: boolean
  children: ReactNode
  contentRef?: RefObject<any>
}

interface SidebarState {
  toggle?: boolean
  shouldScroll?: boolean
}

function Category(props: CategoryProps) {
  const { isMobile, title, selected, opened, children, contentRef, ...rest } = props

  const ref = useRef<HTMLDivElement | null>(null)

  const [{ toggle, shouldScroll = false }, setToggle] = useState<SidebarState>({
    toggle: selected || opened
  })

  // If a category is selected indirectly, open it. This can happen when using the search input
  useEffect(() => {
    if (selected) {
      setToggle({ toggle: true, shouldScroll: true })
    }
  }, [selected])

  // Navigate to the start of the category when manually opened
  useEffect(() => {
    if (toggle && shouldScroll && ref.current != null) {
      const contentEl = contentRef.current

      if (toggle == true && contentEl) {
        // 10 is added for better margin
        const height = ref.current.offsetTop - (isMobile ? 10 : contentEl.offsetTop)
        contentEl.scrollTop = height
        setToggle({ toggle })
      }
    }
  }, [toggle, shouldScroll, isMobile, contentRef])

  return (
    <chakra.div mt={6} mb={4} ref={ref} {...rest}>
      <chakra.p
        width="full"
        textTransform="uppercase"
        letterSpacing="wider"
        fontSize="xs"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        userSelect="none"
        color={useColorModeValue('gray.900', 'inherit')}
      >
        {title}
      </chakra.p>
      <chakra.div role="group" hidden={!toggle} mt="16px" mx="-3">
        {children}
      </chakra.div>
    </chakra.div>
  )
}

export default Category
