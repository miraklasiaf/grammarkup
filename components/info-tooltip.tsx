import { forwardRef } from 'react'
import { Tooltip, TooltipProps } from '@chakra-ui/core'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const InfoTooltip = forwardRef<TooltipProps, 'div'>(({ label, ...rest }: any, ref) => (
  <Tooltip
    ref={ref}
    hasArrow
    label={label}
    placement="right"
    bg="gray.600"
    color="white"
    {...rest}
  >
    <InfoOutlineIcon />
  </Tooltip>
))

export default InfoTooltip
