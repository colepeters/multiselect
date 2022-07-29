import styled from 'styled-components'

import Box from './primitives/Box'

const ScrollBox = styled(Box)`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray100};
    border-radius: 8px;
  }
`

export default function ScrollArea({ maxHeight, children }) {
  return (
    <ScrollBox maxHeight={maxHeight} overflow='hidden scroll'>
      {children}
    </ScrollBox>
  )
}
