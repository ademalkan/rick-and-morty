import { CharacterCardSkeleton } from "@/components";
import { Helper } from "@/utils";
import React from "react";

export default function Loading() {
  const helper = new Helper();
  const dummyArray = helper.createDummyArray(16);
  return (
    <>
      {dummyArray.map((_, index) => (
        <CharacterCardSkeleton key={index} />
      ))}
    </>
  );
}
