/**
 * The function `getByCharacter` returns a GraphQL query string to fetch information about a character
 * by their ID.
 * @param {string | number} id - The `id` parameter is a string or number that represents the unique
 * identifier of a character.
 * @returns The function `getByCharacter` returns a GraphQL query string.
 */

export default function getByCharacter(id: string | number) {
  return `query {
  character(id:${id})
  {
    type
     status
     image
     gender
     episode {
       episode
       name
       id
     }
     name
     id
  }
}
`;
}
