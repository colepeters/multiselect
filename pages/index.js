import MultiSelect from '../components/MultiSelect'
import Box from '../components/primitives/Box'
import { getPets, groupPetsBySpecies } from '../lib/api'

export default function Home({ petsBySpecies }) {
  return (
    <Box px={[4, 6, 7]} py={[4, 6]}>
      <h1>MultiSelect</h1>
      <MultiSelect.Root label='Select Pets'>
        {Object.keys(petsBySpecies).map((species) => (
          <MultiSelect.Group key={species} label={species}>
            {petsBySpecies[species].map((pet) => (
              <MultiSelect.CheckboxItem key={pet.id} label={pet.name} />
            ))}
          </MultiSelect.Group>
        ))}
      </MultiSelect.Root>
    </Box>
  )
}

export async function getServerSideProps() {
  const pets = await getPets()
  const petsBySpecies = groupPetsBySpecies(pets)

  return {
    props: {
      petsBySpecies,
    },
  }
}
