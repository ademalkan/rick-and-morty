import { METHOD_TYPES } from "@/constants";

interface FetchRequestI {
  baseUrl: string;
  method: METHOD_TYPES;
  query: unknown;
}

/*
 * fetchRequest method
 * @param {baseUrl:string | method:string | query:unknown}
 * @return Promise<Response>
 */
export const fetchRequest = async (opts: FetchRequestI): Promise<Response> => {
  const { baseUrl, method, query } = opts;
  const fetchRequest = await fetch(baseUrl, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
    next: { revalidate: 10 },
  });

  if (!fetchRequest.ok) {
    throw new Error(`Fetch request failed.`);
  }

  const result = await fetchRequest.json();

  return result.data;
};
