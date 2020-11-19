import { Box, Alert, chakra, Kbd, useColorModeValue, Code } from '@chakra-ui/react'
import { P, UL, OL, LI } from './body'
import { H1, H2, H3, H4 } from './heading'
import { InfoTooltip } from '@/components/ui'

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
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
)

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
)

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

// const InlineCode = (props) => (
//   <chakra.code
//     apply="mdx.code"
//     color={useColorModeValue('purple.500', 'purple.100')}
//     {...props}
//   />
// )

const MDX = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: (props) => <Code py="1px" px="6px" {...props} />,
  pre: Pre,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  Br: (props) => <Box height="4px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: (props) => <chakra.a apply="mdx.a" {...props} />,
  blockquote: Quote,
  InfoTooltip
}

export default MDX
