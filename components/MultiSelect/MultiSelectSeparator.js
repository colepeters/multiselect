import { Separator } from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

const MultiSelectSeparator = styled(Separator)`
  border-top: 1px solid ${(props) => props.theme.colors.gray500};
  height: 0;
  margin: ${(props) => props.theme.space[3]}px
    ${(props) => props.theme.space[4]}px ${(props) => props.theme.space[2]}px;
`

MultiSelectSeparator.displayName = 'MultiSelectSeparator'

export default MultiSelectSeparator
