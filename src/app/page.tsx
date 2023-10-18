import FetchService from "@/services/fetchService";
import {
  CharactersResult,
  characterStatusBackgroundColorPicker,
  eCharacterStatus,
} from "@/utils";
import { Card, CardFooter, Button, Image } from "@nextui-org/react";

export default async function Home() {
  const fetchService = new FetchService();
  const result = await fetchService.fetchCharacters();

  return (
    <main className="w-10/12 m-auto py-5 ">
      <div className="grid grid-cols-4 gap-3">
        {result.characters.results?.map((character: CharactersResult) => (
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt={character.name}
              className="object-cover"
              height={120}
              src={character.image}
              width={"100%"}
            />
            <CardFooter className="justify-between before:bg-white/40 border-white/40 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-md ml-1 z-10">
              <p className="text-tiny text-white/90">{character.name}</p>
              <Button
                className={`text-tiny text-white ${characterStatusBackgroundColorPicker(
                  character.status as eCharacterStatus
                )}`}
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                {character.status}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
