import PropTypes from 'prop-types'
import { useState } from 'react'

import { groupPetsBySpecies } from '../lib/api'
import { petShape } from '../lib/propShapes'
import MultiSelect from './MultiSelect'
import Box from './primitives/Box'
import Text from './primitives/Text'
import ScrollArea from './ScrollArea'

export default function PetSelect({ pets }) {
  const [selectedPets, setSelectedPets] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getSelectAllChecked = () => {
    // All pets selected
    if (selectedPets.length === pets.length) return true

    // Some pets selected
    if (selectedPets.length) return 'indeterminate'

    // No pets selected
    return false
  }

  const handleSelectAll = () => {
    // All pets selected — deselect all
    if (selectedPets.length === pets.length) {
      setSelectedPets([])
      return
    }

    // Some pets selected — select all
    if (selectedPets.length) {
      setSelectedPets(pets.map((pet) => pet.id))
      return
    }

    // No pets selected — select all
    setSelectedPets(pets.map((pet) => pet.id))
  }

  const filteredPets = searchTerm
    ? pets.filter((pet) =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pets

  const filteredPetsBySpecies = groupPetsBySpecies(filteredPets)

  return (
    <MultiSelect.Root
      label={
        selectedPets.length
          ? `Select Pets (${selectedPets.length})`
          : 'Select Pets'
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

      {!searchTerm && (
        <MultiSelect.SelectAll
          checked={getSelectAllChecked()}
          onCheckedChange={handleSelectAll}
        />
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
      <MultiSelect.Separator />
      <MultiSelect.ButtonItem
        label='Manage Animals'
        onClick={() =>
          alert(
            'The animal manager is currently on holidays. Please come back another day.'
          )
        }
      />
    </MultiSelect.Root>
  )
}

PetSelect.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.shape(petShape)).isRequired,
}
