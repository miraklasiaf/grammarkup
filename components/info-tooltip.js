import { forwardRef } from 'react'
import { Tooltip } from '@chakra-ui/core'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const InfoTooltip = forwardRef((props, ref) => {
  return (
    <Tooltip
      ref={ref}
      hasArrow
      label={props.label}
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
