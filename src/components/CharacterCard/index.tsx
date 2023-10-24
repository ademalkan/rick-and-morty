import { Helper, TypeCharactersResult, eCharacterStatus } from "@/utils";
import React from "react";
import { Card, CardFooter, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import classnames from "classnames";
export default function CharacterCard({
  character,
}: {
  character: TypeCharactersResult;
}) {
  const helper = new Helper();

  return (
    <Link href={`${helper.convertToSlug(character.name)}?id=${character.id}`}>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt={character.name}
          className="object-cover"
          height={120}
          loading="lazy"
          src={character.image}
          width={"100%"}
        />
        <CardFooter className="justify-between before:bg-white/40 border-white/40 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-md ml-1 z-10">
          <p className="text-tiny text-white/90">{character.name}</p>
          <Button
            className={classnames(
              { "text-tiny  text-white ": true },
              { "bg-green-500": eCharacterStatus.ALIVE === character.status },
              { "bg-red-500": eCharacterStatus.DEAD === character.status },
              { "bg-gray-500": eCharacterStatus.UNKNOWN === character.status }
            )}
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {character.status}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
