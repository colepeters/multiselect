import { useState } from 'react'

import MultiSelect from '../components/MultiSelect'
import Box from '../components/primitives/Box'
import { getPets, groupPetsBySpecies } from '../lib/api'

export default function Home({ petsBySpecies }) {
  const [selectedPets, setSelectedPets] = useState([])

  return (
    <Box px={[4, 6, 7]} py={[4, 6]}>
      <h1>MultiSelect</h1>
      <MultiSelect.Root
        label={
          selectedPets.length
            ? `Selected Pets (${selectedPets.length})`
            : 'Selected Pets'
        }
      >
        {Object.keys(petsBySpecies).map((species) => (
          <MultiSelect.Group key={species} label={species}>
            {petsBySpecies[species].map((pet) => (
              <MultiSelect.CheckboxItem
                key={pet.id}
                label={pet.name}
                checked={selectedPets.includes(pet.id)}
                onCheckedChange={() =>
                  setSelectedPets((currentSelectedPets) =>
                    currentSelectedPets.includes(pet.id)
                      ? currentSelectedPets.filter((id) => id !== pet.id)
                      : currentSelectedPets.concat([pet.id])
                  )
                }
              />
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
