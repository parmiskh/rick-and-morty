import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import Heart from "./svgs/icons/heart";
import Play from "./svgs/icons/play";
import Alive from "./svgs/icons/alive";
import InfoBtn from "../components/Moreinfo";
import Planet from "./svgs/icons/planet";
import { getCharacters, getCharactersById } from "../api/charApi";
import { useLoaderData } from "react-router-dom";
import Location from "../components/location";
import Alien from "./svgs/icons/alien";
import Gender from "./svgs/icons/gender";

export async function Loader({ params }) {
  const char = await getCharactersById(params.id);
  return { char };
}

export default function Character() {
  const { char } = useLoaderData();
  return (
    <div className="bg-0-dark1-0 px-44 py-8">
      <div className="flex justify-between py-5 px-26">
        <RickLogo />
        <Button color="cyan" pill size="xs" className="gap-2">
          <i>
            <Heart color={"white"} w={"24px"} h={"24px"} />
          </i>
          Lista de favoritos
        </Button>
      </div>
      {/*چپ*/}
      <div className="flex gap-10 px-26 items-start">
        <div>
          <img src={char.image} alt={char.name} />
        </div>

        <div className="flex flex-col">
          <div className=" gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-white font-Inter font-bold text-5xl">
                {char.name}
              </h1>
              <Heart color={"#11B0C8"} w={"56px"} h={"56px"} />
            </div>
          </div>
          <div className="flex items-center">
            <Play />

            <h1 className="text-white">
              Participou de {char.episode.length} episódios
            </h1>
          </div>
          <div className="flex gap-8 mt-2 text-white">
            <div className="flex items-center gap-2">
              <Alive />
              <p>{char.status}</p>
            </div>
            <div className="flex items-center gap-2">
              <Alien />
              <p>{char.species}</p>
            </div>
            <div className="flex items-center gap-2">
              <Gender />
              <p>{char.gender}</p>
            </div>
          </div>
        </div>
        {/*راست*/}
        <div className="inline-flex gap-x-8">
          <div className="flex text-white justify-end items-end">
            <div className=" relative items-center justify-center text-center gap-4 p-4 bg-0-darkGray-0 rounded-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                <Planet />
              </div>
              <div className="max-w-36 w-full py-1">
                <h4>planet</h4>
                <h4 className="text-0-primary-0">{char.origin.name}</h4>
              </div>
              <InfoBtn />
              <div className="flex items-center justify-center gap-2 mt-2">
                <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
              </div>
            </div>
          </div>
          <div className="flex text-white justify-end items-end">
            <div className=" relative items-center justify-center text-center gap-4 p-4 bg-0-darkGray-0 rounded-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                <Location />
              </div>
              <div className="max-w-36 w-full text-base py-4">
                <h4>{char.location.name}</h4>
              </div>
              <InfoBtn />
              <div className="flex items-center justify-center gap-2 mt-2">
                <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
