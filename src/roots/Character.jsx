import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import Heart from "./svgs/icons/heart";
import Play from "./svgs/icons/play";
import Alive from "./svgs/icons/alive";
export default function Character() {
  return (
    <div className="bg-0-dark1-0 px-44">
      <div className="flex justify-between py-5 px-28">
        <RickLogo />
        <Button color="cyan" pill size="xs" className="gap-2">
          <i>
            <Heart color={"white"} w={"24px"} h={"24px"} />
          </i>
          Lista de favoritos
        </Button>
      </div>
      <div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/d6b2/4a12/4df2e3beb8b81b6ca3b99a71b1870c77?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cIBGrRRG~2ODtaGiZQ2FR2-B~eDZ7QP2UH5GhBQITTgQmMEYjK9SkwvBTUkMiTKGFISglqUrR7jfZlgTfT5igS-qS0bNXYMWv0wA7HWOpartQ5exKvrjBe9tstMVAXVlrYnYggS1wvsJRVHzzHqX5kTxHDhCKYIxexJ9B4RNOYtQSk5PI1VNN2QBTb4M9AmYJ-ZZs~CTfItBm3qVo~YNIfq0WYiYAKeDZMhkWe3j3mSMWWhzQLKParFAmBN4BhIklRmOLA1hYbwlz3qoxBCHXnMK99jy~b1NgVUcVacTjZCmUW7U~vL2kWIJjIUxfMkbl97h-D3BiY6Sff3oqEUhQw__"
            alt="character"
          />
        </div>
        <div className="flex gap-3">
          <h1 className="text-white font-Inter font-bold text-5xl">
            Rick Sanchez
          </h1>
          <Heart color={"#11B0C8"} w={"56px"} h={"56px"} />
          <Play />
          <h1 className="text-white">Participou de 51 episódios</h1>
          <Alive />
        </div>
      </div>
    </div>
  );
}
