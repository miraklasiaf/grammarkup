import Link from 'next/link'
import { useRouter } from 'next/router'
import { chakra, PropsOf, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const StyledLink = React.forwardRef(function StyledLink(
  props: PropsOf<typeof chakra.a> & { isActive?: boolean },
  ref: React.Ref<any>
) {
  const { isActive, ...rest } = props

  return (
    <chakra.a
      aria-current={isActive ? 'page' : undefined}
      width="100%"
      pl="4"
      rounded="md"
      ref={ref}
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      transition="all 0.2s"
      _activeLink={{
        color: useColorModeValue('gray.900', 'teal.200'),
        fontWeight: '700'
      }}
      {...rest}
    />
  )
})

function NavLink({ route: { href, pathname, title, selected } }: any) {
  const router = useRouter()
  const onlyHashChange = pathname === router.pathname

  return onlyHashChange ? (
    <a href={pathname}>{title}</a>
  ) : (
    <Link href={pathname || href} passHref>
      <StyledLink isActive={selected}>{title}</StyledLink>
    </Link>
  )
}

export default NavLink
