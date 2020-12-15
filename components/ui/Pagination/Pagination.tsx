import NextLink from 'next/link'
import { Link, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const PaginationLink = (props) => {
  const { label, href, children, ...rest } = props
  const color = useColorModeValue('blue.600', 'blue.400')

  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{
          textDecor: 'none'
        }}
        flex="1"
        borderRadius="md"
        {...rest}
      >
        <Text fontSize="sm" px="2">
          {label}
        </Text>
        <Text mt="1" fontSize="base" fontWeight="bold" color={color}>
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

export const Pagination = ({ previous, next, ...rest }) => {
  return (
    <SimpleGrid as="nav" aria-label="pagination" spacing="40px" my={16} columns={2} {...rest}>
      {previous ? (
        <PaginationLink textAlign="left" label="Previous" href={previous.path} rel="prev">
          <ChevronLeftIcon mr="1" fontSize="1.2em" />
          {previous.title}
        </PaginationLink>
      ) : (
        <div />
      )}
      {next ? (
        <PaginationLink textAlign="right" label="Next" href={next.path} rel="next">
          {next.title}
          <ChevronRightIcon ml="1" fontSize="1.2em" />
        </PaginationLink>
      ) : (
        <div />
      )}
    </SimpleGrid>
  )
}

export default Pagination
