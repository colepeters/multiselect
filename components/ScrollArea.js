import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from './primitives/Box'

// These styles will not work on Safari for iOS as of the time of this implementation,
// as the scrollbar-track and scrollbar-thumb selectors are not yet available there.
const ScrollBox = styled(Box)`
  /* Currently only supported on Firefox */
  scrollbar-color: ${(props) => props.theme.colors.gray100} transparent;
  scrollbar-width: thin;

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

ScrollArea.propTypes = {
  maxHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}
