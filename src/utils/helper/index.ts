import { eCharacterStatus } from "../enum";

export default class Helper {
  /* The `convertToSlug` function is used to convert a string into a slug format. A slug is a
 URL-friendly version of a string, typically used in URLs or for creating unique identifiers. */
  convertToSlug = (str: string): string =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  /* The `createDummyArray` function is used to create an array filled with `null` values. It takes in a
 parameter `arrayLength` of type `number`, which specifies the length of the array to be created. */
  createDummyArray = (arrayLength: number): null[] => {
    return Array(arrayLength).fill(null);
  };
}
