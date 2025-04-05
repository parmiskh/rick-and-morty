import { Card } from "flowbite-react";
import Heart from "../roots/svgs/icons/heart";
import Play from "../roots/svgs/icons/play";
import InfoBtn from "./Moreinfo";

export default function EpisodeCard({ data }) {
  const { name, episode } = data;
  return (
    <Card className="max-w-60 bg-0-darkGray-0">
      <div className="inline-flex ">
        <Play />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} | {episode}
        </h5>
      </div>
      <InfoBtn />
      <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />

    </Card>
  );
}
