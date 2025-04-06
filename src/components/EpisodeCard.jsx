import { Card } from "flowbite-react";
import Heart from "../roots/svgs/icons/heart";
import Play from "../roots/svgs/icons/play";
import InfoBtn from "./Moreinfo";

export default function EpisodeCard({ data }) {
  const { name, episode } = data;
  return (
    <Card className="p-4">
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Play />
            <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
              {name} | {episode}
            </h5>
          </div>
          <InfoBtn />
        </div>

        <div className="flex items-center gap-2">
          <Heart color="#11B0C8" w="42px" h="36px" />
        </div>
      </div>
    </Card>
  );
}
