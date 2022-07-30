import PropTypes from 'prop-types'

import PetSelect from '../components/PetSelect'
import Box from '../components/primitives/Box'
import { getPets } from '../lib/api'
import { petShape } from '../lib/propShapes'

export default function Home({ pets }) {
  return (
    <Box px={[4, 6, 7]} py={[4, 6]}>
      <h1>MultiSelect</h1>
      <PetSelect pets={pets} />
    </Box>
  )
}

Home.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape(petShape)).isRequired,
}

// Page is rendered with server side rendering as it depends on `pets`,
// whose data (presumably) will change over time, thus making this page
// not suitable for NextJS' default static rendering.
export async function getServerSideProps() {
  const pets = await getPets()

  return {
    props: {
      pets,
    },
  }
}
