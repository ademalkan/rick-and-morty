import FetchService from "@/services/fetchService";
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
  console.log(searchParams.id);
  const character = await fetchService.fetchByCharacter(searchParams.id);
  return <p>Post: {JSON.stringify(character)}</p>;
}
