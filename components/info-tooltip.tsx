import * as React from "react"
import { Tooltip, TooltipProps } from "@chakra-ui/core"
import { InfoOutlineIcon } from "@chakra-ui/icons"

const InfoTooltip = React.forwardRef<TooltipProps, "div">(
  ({ children, ...props }, ref) => (
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
  ),
)

export default InfoTooltip
