import { Tooltip } from '@chakra-ui/core'
import { InfoOutlineIcon } from '@chakra-ui/icons'

export default function InfoTooltip({ label }) {
  return (
    <Tooltip hasArrow label={label} placement="right" bg="gray.600" color="white">
      <InfoOutlineIcon />
    </Tooltip>
  )
}
