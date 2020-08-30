import {
  Box,
  Alert,
  Heading,
  Divider,
  chakra,
  Kbd,
  useColorModeValue,
  Link
} from '@chakra-ui/core'

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const Quote = (props) => {
  return (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  )
}

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    mb="1em"
    mt="2em"
    color={useColorModeValue('gray.800', 'white')}
    {...props}
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

const Table = (props) => (
  <chakra.div mt={8} mx={{ sm: `-${6}`, lg: `-${8}` }} overflowX="auto">
    <chakra.div
      minWidth="full"
      px={{ sm: 6, lg: 8 }}
      py={2}
      display="inline-block"
      minWidth="full"
      verticalAlign="middle"
    >
      <chakra.div boxShadow="default" overflow="hidden" borderRadius={{ sm: 'lg' }}>
        <chakra.table w="full" {...props} />
      </chakra.div>
    </chakra.div>
  </chakra.div>
)

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'gray.600')}
    color={useColorModeValue('gray.500', 'white')}
    fontSize="xs"
    fontWeight="medium"
    letterSpacing="wider"
    lineHeight={4}
    px={6}
    py={3}
    textTransform="uppercase"
    borderBottomWidth="1px"
    {...props}
  />
)

const TData = (props) => (
  <chakra.td
    px={6}
    py={4}
    bg={useColorModeValue('white', 'gray.700')}
    borderBottomWidth="1px"
    whiteSpace="nowrap"
    {...props}
  />
)

const Hr = () => {
  const borderColor = useColorMode('gray.200', 'gray.600')

  return <Divider borderColor={borderColor} my={4} w="100%" />
}

const CustomLink = (props) => {
  const color = useColorModeValue('hsl(208, 99%, 44%)', 'hsl(208, 95%, 68%)')

  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color} {...props} />
      </NextLink>
    )
  }

  return <Link color={color} isExternal {...props} />
}

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
