import { TriangleDownIcon } from '@radix-ui/react-icons'

import Text from '../primitives/Text'
import MultiselectTrigger from './MultiselectTrigger'

export default function Multiselect({ label }) {
  return (
    <MultiselectTrigger>
      <Text as='span' pr={2}>
        {label}
      </Text>
      <TriangleDownIcon />
    </MultiselectTrigger>
  )
}
