import { forwardRef } from 'react'
import { Box, chakra, Tooltip, TooltipProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { LightBulb, ChatAlt2 } from '@/components/icons'
import ReactMarkdown from 'react-markdown'

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

const Content = (props) => (
  <Box
    as="aside"
    py={6}
    px={8}
    bg={useColorModeValue('muted.light', 'muted.dark')}
    borderLeftRadius="3px"
    borderLeftColor="#3b82f6"
    borderLeftWidth="4px"
    borderRightRadius="md"
    {...props}
  />
)

export const Sidenote = ({ children, ...delegated }) => {
  return (
    <Box position="relative" mt={4} {...delegated}>
      <Status>
        <LightBulb w={8} color={useColorModeValue('#3b82f6', '#3b82f6')} />
      </Status>
      <Content>
        <ReactMarkdown children={children} />
      </Content>
    </Box>
  )
}

export const Story = ({ children }) => {
  return (
    <Box position="relative" mt={8}>
      <Status>
        <ChatAlt2 w={8} color={useColorModeValue('#3b82f6', '#3b82f6')} />
      </Status>
      <Content>
        <ReactMarkdown children={children} />
      </Content>
    </Box>
  )
}

export const Blank = () => {
  return <chakra.span>....................</chakra.span>
}
