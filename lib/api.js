// This file contains functions for working with the API,
// and for serializing data from the API as required by the UI.

import { groupBy } from 'ramda'

/**
 * @typedef {Object}    Pet - a pet
 * @property {number}   id - the pet's ID in the database
 * @property {string}   species - the pet's species
 * @property {string} name - the pet's name
 */

/**
 * Get the available pets from the API
 * @returns {Pet[]}
 */
export async function getPets() {
  const baseUrl = `https://${process.env.VERCEL_URL}` || 'http://localhost:3000'
  const response = await fetch(`${baseUrl}/api/pets`)
  const pets = await response.json()
  return pets
}

/**
 * Reshape the pets data returned by the API into an object keyed by the available species.
 * @param {Pet[]} pets - the pets
 * @returns {Object.<string, Pet[]>} groupedPets - an object keyed by the species type, whose values are the pets of that species
 */
export function groupPetsBySpecies(pets) {
  return groupBy((pet) => pet.species, pets)
}
