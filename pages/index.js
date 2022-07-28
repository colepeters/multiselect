import MultiSelect from '../components/MultiSelect'
import Box from '../components/primitives/Box'
import { getPets } from '../lib/api'

export default function Home({ pets }) {
  return (
    <Box px={[4, 6, 7]} py={[4, 6]}>
      <h1>MultiSelect</h1>
      <MultiSelect.Root label='Select Pets'>
        {pets.map((group) => (
          <MultiSelect.Group key={group.species} label={group.species}>
            {group.members.map((member) => (
              <MultiSelect.CheckboxItem key={member.name} label={member.name} />
            ))}
          </MultiSelect.Group>
        ))}
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
