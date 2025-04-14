import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import Heart from "./svgs/icons/heart";
import Play from "./svgs/icons/play";
import Alive from "./svgs/icons/alive";
import InfoBtn from "../components/Moreinfo"
import Planet from "./svgs/icons/planet";
export default function Character() {
  return (
    <div className="bg-0-dark1-0 px-44 py-8">
      <div className="flex justify-between py-5 px-28">
        <RickLogo />
        <Button color="cyan" pill size="xs" className="gap-2">
          <i>
            <Heart color={"white"} w={"24px"} h={"24px"} />
          </i>
          Lista de favoritos
        </Button>
      </div>
      {/*چپ*/}
      <div className="flex gap-10 px-28 items-start">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/d6b2/4a12/4df2e3beb8b81b6ca3b99a71b1870c77?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cIBGrRRG~2ODtaGiZQ2FR2-B~eDZ7QP2UH5GhBQITTgQmMEYjK9SkwvBTUkMiTKGFISglqUrR7jfZlgTfT5igS-qS0bNXYMWv0wA7HWOpartQ5exKvrjBe9tstMVAXVlrYnYggS1wvsJRVHzzHqX5kTxHDhCKYIxexJ9B4RNOYtQSk5PI1VNN2QBTb4M9AmYJ-ZZs~CTfItBm3qVo~YNIfq0WYiYAKeDZMhkWe3j3mSMWWhzQLKParFAmBN4BhIklRmOLA1hYbwlz3qoxBCHXnMK99jy~b1NgVUcVacTjZCmUW7U~vL2kWIJjIUxfMkbl97h-D3BiY6Sff3oqEUhQw__"
            alt="character"
            />
        </div>

        <div className="flex flex-col">
          <div className=" gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-white font-Inter font-bold text-5xl">
                Rick Sanchez
              </h1>
              <Heart color={"#11B0C8"} w={"56px"} h={"56px"} />
            </div>
          </div>
          <div className="flex items-center">
            <Play />

            <h1 className="text-white">Participou de 51 episódios</h1>
          </div>
          <div className="flex gap-8 mt-2 text-white">
            <div className="flex items-center gap-2">
              <Alive />
              <p>Vivo</p>
            </div>
            <div className="flex items-center gap-2">
              <Alive />
              <p>Vivo</p>
            </div>
            <div className="flex items-center gap-2">
              <Alive />
              <p>Vivo</p>
            </div>
          </div>
        </div>
            {/*راست*/}
        <div className="flex text-white justify-end items-end">
          <div className=" relative items-center justify-center text-center gap-4 p-4 bg-0-darkGray-0 rounded-md">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Planet className="w-10 h-10 text-cyan-500"/>
          </div>
           <h4>planet</h4>
           <h4>Earth</h4>
            <InfoBtn />
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
