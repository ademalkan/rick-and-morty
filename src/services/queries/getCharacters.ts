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
