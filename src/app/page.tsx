import FetchService from "@/services/fetchService";

export default async function Home() {
  const fetchService = new FetchService();
  const result = await fetchService.fetchCharacters();

  console.log(result.characters.results);

  return (
    <main>
      {result.characters.results?.map((rocket: any) => (
        <div key={rocket.id}>{rocket.type}</div>
      ))}
    </main>
  );
}
