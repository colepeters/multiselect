import { useState } from 'react'

import MultiSelect from '../components/MultiSelect'
import Box from '../components/primitives/Box'
import Text from '../components/primitives/Text'
import ScrollArea from '../components/ScrollArea'
import { getPets, groupPetsBySpecies } from '../lib/api'

export default function Home({ pets }) {
  const [selectedPets, setSelectedPets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPets = searchTerm
    ? pets.filter((pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pets

  const filteredPetsBySpecies = groupPetsBySpecies(filteredPets)

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
        <MultiSelect.SearchItem
          value={searchTerm}
          setValue={setSearchTerm}
          placeholder='Search'
        />

        {searchTerm && filteredPets.length === 0 && (
          <Box px={4} py={3}>
            <Text>Sorry, there are no pets matching ‘{searchTerm}’.</Text>
          </Box>
        )}

        <ScrollArea maxHeight={290}>
          {Object.keys(filteredPetsBySpecies).map((species) => (
            <MultiSelect.Group key={species} label={species}>
              {filteredPetsBySpecies[species].map((pet) => (
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
        </ScrollArea>
      </MultiSelect.Root>
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
