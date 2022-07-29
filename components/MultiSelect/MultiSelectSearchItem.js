import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'

import Box from '../primitives/Box'

const baseSize = 42

const StyledInput = styled.input.attrs({
  type: 'search',
})`
  all: unset;
  position: absolute;
  inset: 0;
  padding: 0 ${baseSize}px;
  /* Remove Webkit's default search input UI */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    appearance: none;
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
    <Box py={3} px={4}>
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
          <MagnifyingGlassIcon />
        </Box>
        <StyledInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        {value !== '' && (
          <ClearButton onClick={() => setValue('')}>
            <Cross2Icon />
          </ClearButton>
        )}
      </Box>
    </Box>
  )
}
