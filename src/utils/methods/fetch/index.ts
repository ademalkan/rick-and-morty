import { METHOD_TYPES } from "@/constants";

interface FetchRequestI {
  baseUrl: string;
  method: METHOD_TYPES;
  query: unknown;
}

/**
 * The function `fetchRequest` is an asynchronous function that sends a fetch request to a specified
 * URL with a specified method and query, and returns the response data.
 * @param {FetchRequestI} opts - The `opts` parameter is an object that contains the following
 * properties:
 * @returns The function `fetchRequest` is returning a Promise that resolves to a `Response` object.
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
