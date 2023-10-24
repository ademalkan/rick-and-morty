import { CharacterCard } from "@/components";
import FetchService from "@/services/fetchService";
import { TypeCharactersResult } from "@/utils";
import CharacterLoading from "./loading";
import { Suspense } from "react";

export default async function Home() {
  const fetchService = new FetchService();
  const result = await fetchService.fetchCharacters();
  return (
    <main className="md:w-10/12 m-auto py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
        <Suspense fallback={<CharacterLoading />}>
          {result.characters.results?.map((character: TypeCharactersResult) => (
            <CharacterCard character={character} />
          ))}
        </Suspense>
      </div>
    </main>
  );
}
