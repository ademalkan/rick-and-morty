/* The FetchService class is responsible for making API requests to fetch characters. */
import { TypeFetchCharacters, METHOD, fetchRequest } from "@/utils";
import { getByCharacter, getCharacters } from "./queries";

export default class FetchService {
  private baseUrl: string = process.env.BASE_URL as string;
  constructor() {}

  /* The `genericFetchRequest` method is a private method in the `FetchService` class. It is responsible
 for making a generic API request using the `fetchRequest` utility function. */
  private genericFetchRequest = async (
    method: METHOD,
    query: unknown
  ): Promise<unknown> => {
    const request = await fetchRequest({
      baseUrl: this.baseUrl,
      method,
      query,
    });

    return request;
  };

  /* The `fetchCharacters` method is a public method in the `FetchService` class. It is responsible for
 making an API request to fetch characters. */
  public fetchCharacters = async (): Promise<TypeFetchCharacters> => {
    const fetchCharacters = (await this.genericFetchRequest(
      "POST",
      getCharacters
    )) as any;
    return fetchCharacters;
  };
  /* The `fetchByCharacter` method is a public method in the `FetchService` class. It is responsible for
 making an API request to fetch a character by its ID. */
  public fetchByCharacter = async (
    id: string | number
  ): Promise<TypeFetchCharacters> => {
    const fetchByCharacter = (await this.genericFetchRequest(
      "POST",
      getByCharacter(id)
    )) as any;
    return fetchByCharacter;
  };
}
