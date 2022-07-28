import styled from 'styled-components'

const MultiselectTrigger = styled.button`
  all: unset;
  background: ${(props) => props.theme.colors.blue900};
  border-radius: ${(props) => props.theme.radii.small}px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes[0]};
  padding: ${(props) => props.theme.space[3]}px
    ${(props) => props.theme.space[4]}px;
  text-transform: uppercase;
  transition: background 0.125s linear;

  &:hover {
    background: ${(props) => props.theme.colors.blue500};
  }
`

MultiselectTrigger.displayName = 'MultiselectTrigger'

export default MultiselectTrigger