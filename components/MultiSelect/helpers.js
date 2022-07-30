import styled, { css } from 'styled-components'

import Box from '../primitives/Box'

const CheckboxOutline = styled(Box).attrs((props) => ({
  size: 16,
  bg: props.checked ? 'black' : 'transparent',
  color: 'white',
  border: '1px solid',
  borderColor: 'black',
  borderRadius: 'xsmall',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  lineHeight: 1,
}))``

CheckboxOutline.displayName = 'CheckboxOutline'

const checkboxItemWrapperStyle = css`
  display: flex;
  align-items: baseline;
  cursor: pointer;
  padding: ${(props) => props.theme.space[2]}px
    ${(props) => props.theme.space[4]}px;

  &:hover,
  &:focus {
    outline: none;
    background: ${(props) => props.theme.colors.gray300};
  }
`

export { CheckboxOutline, checkboxItemWrapperStyle }
