import { EpisodeCard } from "@/components";
import FetchService from "@/services/fetchService";
import { TypeCharactersResult, eCharacterStatus } from "@/utils";
import { Card, CardBody, Image } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";

type TypeCharacterPage = {
  searchParams: {
    id: string;
  };
};

export default async function CharacterPage({
  searchParams,
}: TypeCharacterPage) {
  const fetchService = new FetchService();
  const { character } = await fetchService.fetchByCharacter(searchParams.id);

  const episodeCardList = (character: TypeCharactersResult) =>
    character?.episode.map((episode) => (
      <EpisodeCard
        key={episode.id}
        episode={episode.episode}
        name={episode.name}
      />
    ));

  return (
    <div className="min-h-screen flex justify-between gap-6 relative">
      <div className="max-w-xs h-fit sticky top-4">
        <Image
          isZoomed
          loading="lazy"
          width={"100%"}
          alt={character?.name}
          src={character?.image}
        />
        <div className="flex justify-between items-center px-2 py-3 shadow-lg rounded-b-lg bg-blur">
          <h1 className="text-lg font-semibold text-white ">
            {character?.name}
          </h1>
          <h3
            className={classNames(
              { "text-tiny  text-white px-2 py-1 rounded-lg": true },
              { "bg-green-500": eCharacterStatus.ALIVE === character.status },
              { "bg-red-500": eCharacterStatus.DEAD === character.status },
              { "bg-gray-500": eCharacterStatus.UNKNOWN === character.status }
            )}
          >
            {character.status}
          </h3>
        </div>
      </div>
      <div
        className={classNames({
          "grid grid-cols-4 gap-2": character?.episode.length >= 4,
          "flex gap-2 w-full": character?.episode.length < 4,
        })}
      >
        {episodeCardList(character)}
      </div>
    </div>
  );
}
