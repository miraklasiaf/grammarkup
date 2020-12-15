import { forwardRef } from 'react'
import {
  Box,
  chakra,
  List,
  ListItem,
  Tooltip,
  TooltipProps,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { LightBulb } from '@/components/icons'
import ReactMarkdown from 'react-markdown'
import { Link } from './link'
import { P, Blockquote } from './body'

const renderers = {
  link: Link,
  paragraph: (props) => <P mt={0} {...props} />,
  List: (props) => <List styleType="disc" {...props} />,
  ListItem,
  blockquote: Blockquote
}

export const InfoTooltip = forwardRef<TooltipProps, 'div'>(({ label, ...rest }: any, ref) => {
  return (
    <Tooltip
      ref={ref}
      closeOnClick={false}
      label={label}
      placement="right"
      bg="gray.600"
      color="white"
      {...rest}
    >
      <InfoOutlineIcon />
    </Tooltip>
  )
})

export const Asterisk = forwardRef<TooltipProps, 'div'>(({ label, ...rest }: any, ref) => {
  return (
    <Tooltip
      ref={ref}
      closeOnClick={false}
      label={label}
      placement="top"
      bg="gray.600"
      color="white"
      {...rest}
    >
      *
    </Tooltip>
  )
})

const Status = (props) => (
  <Flex
    bg={useColorModeValue('white', 'bg.dark')}
    borderRadius="full"
    position="absolute"
    left={0}
    top={0}
    p={2}
    transform="translate(-50%, -50%)"
    justify="center"
    items="center"
    {...props}
  />
)

export const Sidenote = ({ children, ...delegated }) => {
  return (
    <Box
      as="aside"
      position="relative"
      mt={8}
      py={6}
      px={8}
      bg={useColorModeValue('muted.light', 'muted.dark')}
      borderLeftRadius="3px"
      borderLeftColor="#3b82f6"
      borderLeftWidth="4px"
      borderRightRadius="md"
      {...delegated}
    >
      <Status>
        <LightBulb w={8} color={useColorModeValue('#3b82f6', '#3b82f6')} />
      </Status>
      <ReactMarkdown renderers={renderers} children={children} />
    </Box>
  )
}

export const Blank = () => {
  return <chakra.span>....................</chakra.span>
}
