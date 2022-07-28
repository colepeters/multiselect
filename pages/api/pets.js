// NextJS API route
// https://nextjs.org/docs/api-routes/introduction

const mockedPets = [
  {
    species: 'Birds',
    members: [{ name: 'Hermes' }, { name: 'Charlie' }],
  },
  {
    species: 'Cats',
    members: [{ name: 'Roody' }, { name: 'Sgt. Tibbs' }, { name: 'Marmalade' }],
  },
  {
    species: 'Dogs',
    members: [
      { name: 'Stains' },
      { name: 'Rt. Hon. Sir H. E. Barkington The Third, Esq.' },
      { name: 'Stella' },
    ],
  },
]

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
