import Multiselect from '../components/Multiselect'
import Box from '../components/primitives/Box'
import { getPets } from '../lib/api'

export default function Home({ pets }) {
  console.log({ pets })

  return (
    <Box px={[4, 6, 7]} py={[4, 6]}>
      <h1>Multiselect</h1>
      <Multiselect label='Select Pets' />
    </Box>
  )
}

export async function getServerSideProps() {
  const pets = await getPets()

  return {
    props: {
      pets,
    },
  }
}
