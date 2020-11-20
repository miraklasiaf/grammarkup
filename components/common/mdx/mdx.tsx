import { Box, Kbd, Code } from '@chakra-ui/react'
import { P, UL, OL, LI, Blockquote, Pre, Strong, Hr } from './body'
import { H1, H2, H3, H4 } from './heading'
import { Table, TH, TD } from './table'
import { InfoTooltip, Asterisk, Sidenote, Story } from './misc'
import { Link } from './link'

const miscComponent = {
  InfoTooltip,
  Asterisk,
  Sidenote,
  Story
}

const MDX = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  a: Link,
  pre: Pre,
  blockquote: Blockquote,
  strong: Strong,
  hr: Hr,
  table: Table,
  th: TH,
  td: TD,
  kbd: Kbd,
  inlineCode: (props) => <Code py="1px" px="6px" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  Br: (props) => <Box height="4px" {...props} />,
  ...miscComponent
}

export default MDX
