/* The code `export const getCharacters = `query getCharacters {...}` is defining a constant variable
named `getCharacters` that contains a GraphQL query. This query is requesting data about characters
from a GraphQL API. The query includes fields such as `info`, `results`, `type`, `status`, `image`,
`gender`, `episode`, `name`, and `id`. The query is structured to retrieve information about the
characters, including their names, genders, images, and the episodes they appear in. */
export const getCharacters = `query getCharacters {
    characters {
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
