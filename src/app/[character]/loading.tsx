import { EpisodeCardSkeleton } from "@/components";
import { Helper } from "@/utils";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  const helper = new Helper();

  const dummyArray = helper.createDummyArray(32);

  return (
    <main className="min-h-screen flex justify-between gap-6 relative">
      <div className="max-w-xs h-80 w-full sticky top-4">
        <Skeleton className="rounded-lg h-full w-full"></Skeleton>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-2">
          {dummyArray.map((_, index) => (
            <EpisodeCardSkeleton key={index} />
          ))}{" "}
        </div>
      </div>
    </main>
  );
};

export default Loading;
