import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  display,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  space,
  typography,
} from 'styled-system'

const Box = styled.div(
  compose(
    background,
    border,
    boxShadow,
    color,
    display,
    flexbox,
    grid,
    layout,
    opacity,
    overflow,
    position,
    space,
    typography
  )
)

Box.defaultProps = {
  as: 'div',
}

Box.displayName = 'Box'

Box.propTypes = {
  as: PropTypes.oneOf([
    'aside',
    'address',
    'article',
    'div',
    'dd',
    'dl',
    'dt',
    'figure',
    'footer',
    'header',
    'hgroup',
    'label',
    'li',
    'main',
    'span',
    'nav',
    'section',
  ]),
}

export default Box
