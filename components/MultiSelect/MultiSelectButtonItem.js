import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item } from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../primitives/Box'

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.blue900};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: ${(props) => props.theme.space[2]}px
    ${(props) => props.theme.space[4]}px;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.gray300};
  }
`

export default function ButtonItem({ label, onClick }) {
  return (
    <Item asChild>
      <Button onClick={onClick}>
        <Box as='span' flex={1}>
          {label}
        </Box>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </Item>
  )
}

ButtonItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
