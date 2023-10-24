import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const CharacterCardSkeleton = () => {
  return (
    <Card className="w-[full]" radius="lg">
      <Skeleton className="rounded-lg ">
        <div className="h-56 rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
};

export default CharacterCardSkeleton;
