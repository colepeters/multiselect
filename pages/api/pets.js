// NextJS API route
// https://nextjs.org/docs/api-routes/introduction

const mockedPets = [
  {
    id: 1,
    species: 'Birds',
    name: 'Hermes',
  },
  {
    id: 2,
    species: 'Birds',
    name: 'Charlie',
  },
  {
    id: 3,
    species: 'Cats',
    name: 'Roody',
  },
  {
    id: 4,
    species: 'Cats',
    name: 'Sgt. Tibbs',
  },
  {
    id: 5,
    species: 'Cats',
    name: 'Marmalade',
  },
  {
    id: 6,
    species: 'Dogs',
    name: 'Roofus',
  },
  {
    id: 7,
    species: 'Dogs',
    name: 'Sir H. E. Barkington The Third, Esq.',
  },
  {
    id: 8,
    species: 'Dogs',
    name: 'Olli',
  },
]

// A mock REST API which returns the pets data in the shape defined above in response to a GET request
export default function petsHandler(request, response) {
  const { method } = request

  const responsesByMethod = {
    GET: function () {
      response.status(200).json(mockedPets)
    },
    default: function () {
      response.setHeader('Allow', ['GET'])
      response.status(405).end(`Method '${method}' is not allowed`)
    },
  }

  responsesByMethod[method || 'default']()
}
