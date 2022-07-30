import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { Item } from '@radix-ui/react-dropdown-menu'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '../primitives/Box'

const baseSize = 42

const StyledInput = styled.input.attrs({
  type: 'search',
})`
  all: unset;
  position: absolute;
  inset: 0;
  border-radius: ${(props) => props.theme.radii.small}px;
  padding: 0 ${baseSize}px;
  /* Remove Webkit's default search input UI */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue500};
  }
`

const ClearButton = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${baseSize}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function SearchItem({ value, setValue, placeholder }) {
  return (
    <Box py={2} px={4}>
      <Box
        border='1px solid'
        borderColor='gray500'
        borderRadius='small'
        position='relative'
        height={baseSize}
        width={1}
      >
        <Box
          position='absolute'
          top={0}
          bottom={0}
          left={0}
          width={baseSize}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Box>
        <Item asChild onSelect={(e) => e.preventDefault()}>
          <StyledInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
          />
        </Item>
        {value !== '' && (
          <ClearButton onClick={() => setValue('')}>
            <AccessibleIcon.Root label='Clear search term'>
              <FontAwesomeIcon icon={faXmark} />
            </AccessibleIcon.Root>
          </ClearButton>
        )}
      </Box>
    </Box>
  )
}

SearchItem.defaultProps = {
  value: '',
  placeholder: 'Search',
}

SearchItem.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
