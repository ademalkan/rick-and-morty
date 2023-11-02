import { CharacterCard, CharacterPagination, SearchInput } from "@/components";
import FetchService from "@/services/fetchService";
import { TypeCharactersResult } from "@/utils";
import CharacterLoading from "./loading";
import { Suspense } from "react";

type TypeHome = {
  page: string;
  q: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: TypeHome;
}) {
  const page = searchParams?.page || "1";
  const q = searchParams?.q || "";
  const fetchService = new FetchService();
  const query = {
    page,
    q,
  };
  const result = await fetchService.fetchCharacters(query);

  return (
    <div className="min-h-screen">
      <SearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 mt-8">
        <Suspense fallback={<CharacterLoading />}>
          {result?.characters?.results?.map(
            (character: TypeCharactersResult) => (
              <CharacterCard key={character?.id} character={character} />
            )
          )}
        </Suspense>
      </div>
      <CharacterPagination
        initialPage={Number(page)}
        total={result?.characters?.info?.pages || 0}
      />
    </div>
  );
}
