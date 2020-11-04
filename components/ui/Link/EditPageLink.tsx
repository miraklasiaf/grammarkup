import { chakra, Icon, Stack, Link, Box } from '@chakra-ui/core'
import * as React from 'react'

const EditIcon = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </Box>
)

const EditPageLink: React.FC<{ href?: string }> = ({ href }) => {
  return (
    <Link href={href} isExternal>
      <Stack
        display="inline-flex"
        direction="row"
        spacing={1}
        align="center"
        opacity={0.7}
      >
        <Icon as={EditIcon} mr="1" />
        <chakra.span>Edit this page</chakra.span>
      </Stack>
    </Link>
  )
}

export default EditPageLink
