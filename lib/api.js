export async function getPets() {
  const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/api/pets`)
  const pets = await response.json()
  return pets
}
