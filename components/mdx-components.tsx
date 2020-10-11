import { Box, Alert, chakra, Kbd, useColorModeValue } from '@chakra-ui/core'

const Quote = (props) => {
  return (
    <Alert
      as="blockquote"
      mt="4"
      w="98%"
      role="none"
      status="info"
      variant="left-accent"
      borderRadius="md"
      {...props}
    />
  )
}

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const Table = (props) => (
  <chakra.div
    mt={8}
    w={{ base: '19.5rem', sm: '37rem', md: '25rem', lg: '41rem', xl: 'full' }}
    overflowX="auto"
  >
    <chakra.div minW="full" py={2} display="inline-block" verticalAlign="middle">
      <chakra.div boxShadow="default" overflow="hidden" borderRadius={{ sm: 'lg' }}>
        <chakra.table textAlign="left" minW="full" {...props} />
      </chakra.div>
    </chakra.div>
  </chakra.div>
)

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
    fontWeight="semibold"
    px={6}
    py={2}
    fontSize="sm"
    {...props}
  />
)

const TData = (props) => (
  <chakra.td
    px={6}
    py={4}
    bg={useColorModeValue('white', 'gray.800')}
    borderBottomWidth="1px"
    whiteSpace="nowrap"
    {...props}
  />
)

const LinkedHeading = (props) => (
  <chakra.h2
    css={{
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]::before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
  >
    <chakra.div pointerEvents="auto">
      {props.children}
      {props.id && (
        <chakra.a
          aria-label="anchor"
          color="teal.500"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: 'outline' }}
          opacity={0}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </chakra.a>
      )}
    </chakra.div>
  </chakra.h2>
)

const InlineCode = (props) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue('purple.500', 'purple.200')}
    {...props}
  />
)

const MDXComponents = {
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  pre: Pre,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => <chakra.ul apply="mdx.ul" {...props} />,
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: Quote
}

export default MDXComponents
