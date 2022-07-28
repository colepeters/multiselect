import { getPets } from '../lib/api'

export default function Home({ pets }) {
  console.log({ pets })

  return (
    <div>
      <h1>WIP</h1>
    </div>
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
