import { CharacterCardSkeleton } from "@/components";
import { Helper } from "@/utils";
import React from "react";

export default function Loading() {
  const helper = new Helper();
  const dummyArray = helper.createDummyArray(16);
  return (
    <>
      <main className="md:w-10/12 m-auto py-5 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
          {dummyArray.map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
