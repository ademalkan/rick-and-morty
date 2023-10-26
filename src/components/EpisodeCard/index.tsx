import { Card, CardBody } from "@nextui-org/react";
import React from "react";

type TypeEpisodeCard = {
  episode: string;
  name: string;
};

const EpisodeCard = ({ episode, name }: TypeEpisodeCard) => {
  return (
    <Card isHoverable={true}>
      <CardBody>
        <h3 className="font-semibold text-[#44281d]">{episode}</h3>
        <p className="text-tiny">{name}</p>
      </CardBody>
    </Card>
  );
};

export default EpisodeCard;
