import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const EpisodeCardSkeleton = () => {
  return (
    <Card isHoverable={true}>
      <Skeleton>
        <div className="h-24 w-80  rounded-lg bg-default-300"></div>
      </Skeleton>
    </Card>
  );
};

export default EpisodeCardSkeleton;
