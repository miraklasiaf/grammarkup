import { Icon, chakra } from '@chakra-ui/core'
import { useRef, useState, useEffect } from 'react'

const Arrow = (props) => (
  <svg viewBox="0 0 6 10" fill="none" {...props}>
    <path
      d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
)

function SidebarCategory(props) {
  const { isMobile, title, selected, opened, children, contentRef } = props

  const ref = useRef(null)

  const [{ toggle, shouldScroll = false }, setToggle] = useState({
    toggle: selected || opened
  })

  const onClick = () => {
    setToggle({ toggle: !toggle, shouldScroll: true })
  }

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
    <chakra.div mt={4} ref={ref}>
      <chakra.button
        w="full"
        cursor="pointer"
        style={{ outlineOffset: 4 }}
        fontSize="sm"
        fontWeight="semibold"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        userSelect="none"
        color="gray.700"
        onClick={onClick}
        _hover={{
          color: 'gray.800'
        }}
      >
        {title}
        <Icon
          w="auto"
          h="1em"
          fontSize="sm"
          mr={4}
          transformOrigin="center"
          transform={toggle ? 'rotate(90deg)' : undefined}
          transition="transform 0.15s ease"
          as={Arrow}
          color="gray.400"
        />
      </chakra.button>
      <chakra.div hidden={!toggle} mt={3} pl={3} overflow="hidden">
        {children}
      </chakra.div>
    </chakra.div>
  )
}

export default SidebarCategory
