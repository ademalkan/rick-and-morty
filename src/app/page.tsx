import { CharacterCard, CharacterPagination } from "@/components";
import FetchService from "@/services/fetchService";
import { TypeCharactersResult } from "@/utils";
import CharacterLoading from "./loading";
import { Suspense } from "react";

type TypeHome = {
  page: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: TypeHome;
}) {
  const fetchService = new FetchService();
  const result = await fetchService.fetchCharacters(searchParams?.page || "1");

  return (
    <main className="md:w-10/12 m-auto py-5 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
        <Suspense fallback={<CharacterLoading />}>
          {result.characters.results?.map((character: TypeCharactersResult) => (
            <CharacterCard character={character} />
          ))}
        </Suspense>
      </div>
      <CharacterPagination
        initialPage={Number(searchParams.page) || 1}
        total={result.characters.info.pages}
      />
    </main>
  );
}
