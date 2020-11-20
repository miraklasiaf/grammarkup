import { forwardRef } from 'react'
import { Box, Tooltip, TooltipProps, Flex, useColorModeValue } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { InformationCircle } from '@/components/icons'

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

export const Sidenote = ({ children, ...delegated }) => {
  return (
    <Box position="relative" mt={4}>
      <Box
        as="aside"
        py={6}
        px={8}
        bg={useColorModeValue('muted.light', 'muted.dark')}
        borderLeftRadius="3px"
        borderLeftColor="#3b82f6"
        borderLeftWidth="4px"
        borderRightRadius="md"
        {...delegated}
      >
        {children}
      </Box>
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
      >
        <InformationCircle w={8} color={useColorModeValue('#3b82f6', '#3b82f6')} />
      </Flex>
    </Box>
  )
}
