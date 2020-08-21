import {
  Box,
  Alert,
  Heading,
  Divider,
  Text,
  chakra,
  Kbd,
  useColorModeValue
} from '@chakra-ui/core'

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const Quote = (props) => {
  const bgColor = useColorModeValue('blue.50', 'blue.900')
  const color = useColorModeValue('black', 'white')

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor}
      color={color}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
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
    {...props}
    mb="1em"
    mt="2em"
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
    bg={useColorModeValue('gray.50', 'gray.800')}
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
    borderBottom="1px"
    borderBottomColor="gray.200"
    whiteSpace="nowrap"
    {...props}
  />
)

const Hr = () => {
  const borderColor = useColorMode('gray.200', 'gray.600')

  return <Divider borderColor={borderColor} my={4} w="100%" />
}

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  hr: Hr,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: (props) => <chakra.code apply="mdx.code" {...props} />,
  pre: Pre,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote
}

export default MDXComponents
