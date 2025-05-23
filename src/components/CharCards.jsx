import { Card } from "flowbite-react";
import Heart from "../roots/svgs/icons/heart";
import Alive from "../roots/svgs/icons/alive";
import Alien from "../roots/svgs/icons/alien";
import Planet from "../roots/svgs/icons/planet";
import InfoBtn from "./moreinfo";

export default function CharacterCard({ data }) {
  const { id, name, image, status, species, origin } = data;
  return (
    <Card
      className="max-w-72 bg-0-darkGray-0 rounded-none"
      renderImage={() => (
        <div className="p-4">
          <img
            className="rounded-2xl"
            width={262}
            height={200}
            src={image}
            alt={name}
          />
        </div>
      )}
    >
      <div className="flex justify-between">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {name}
        </h5>
        <Heart color={"cyan"} w={"48px"} h={"48px"} />
      </div>
      <div>
        <div className="text-white">
          <div className="flex gap-1 items-center my-1">
            <i>
              <Alive />
            </i>
            <p>{status}</p>
          </div>
          <div className="flex gap-1 items-center my-1">
            <i>
              <Alien />
            </i>
            <p>{species}</p>
          </div>
          <div className="flex gap-1 items-center my-1">
            <i>
              <Planet w={"16px"} h={"16px"} />
            </i>
            <p>{origin}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <InfoBtn />
        </div>
      </div>
    </Card>
  );
}
