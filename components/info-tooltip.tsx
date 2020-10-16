import { forwardRef, Ref } from 'react'
import { Tooltip, TooltipProps } from '@chakra-ui/core'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const InfoTooltip = forwardRef<TooltipProps, 'div'>((props: any, ref: Ref<any>) => {
  return (
    <Tooltip
      ref={ref}
      hasArrow
      label={props.children}
      placement="right"
      bg="gray.600"
      color="white"
      {...props}
    >
      <InfoOutlineIcon />
    </Tooltip>
  )
})

export default InfoTooltip
