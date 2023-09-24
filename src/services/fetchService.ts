import { METHOD_TYPES } from "@/constants";
import { fetchRequest } from "@/utils";
import { getCharacters } from "./queries";

export default class FetchService {
  private baseUrl: string = process.env.BASE_URL as string;
  constructor() {}

  private genericFetchRequest = async (
    method: METHOD_TYPES,
    query: unknown
  ): Promise<unknown> => {
    const request = await fetchRequest({
      baseUrl: this.baseUrl,
      method,
      query,
    });

    return request;
  };

  public fetchCharacters = async (): Promise<any> => {
    const fetchCharacters = (await this.genericFetchRequest(
      "POST",
      getCharacters
    )) as any;
    return fetchCharacters;
  };
}
