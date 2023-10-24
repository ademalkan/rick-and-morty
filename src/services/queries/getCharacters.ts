/**
 * The function returns a GraphQL query string to fetch characters with pagination.
 * @param {string} page - The `page` parameter is a string that represents the page number of the
 * characters you want to retrieve.
 * @returns a GraphQL query string.
 */

export default function getCharacters(page: string) {
  return `query getCharacters {
  characters(page:${Number(page)}) {
   info {
     prev
     pages
     next
     count
   }
   results {
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
   }`;
}
