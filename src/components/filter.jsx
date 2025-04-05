import { Button } from "flowbite-react";
import SmilyFace from "../roots/svgs/icons/smilyFace";
import Planet from "../roots/svgs/icons/planet";
import Play from "../roots/svgs/icons/play";
export default function Filter() {
  return (
    <div className="flex gap-2 items-center">
      <h4 className="font-normal font-inter text-md">Filtrar por: </h4>
      <Button size="xs" pill color="cyan" className="gap-2">
        <i>
          <SmilyFace />
        </i>
        Personagens
      </Button>
      <Button size="xs" pill color="gray" className="gap-2">
        <i>
          <Planet w={"24px"} h={"24px"}/>
        </i>
        Localizaçãoes
      </Button>
      <Button size="xs" pill color="gray" className="gap-2">
        <i>
          <Play />
        </i>
        Episódio
      </Button>
    </div>
  );
}
