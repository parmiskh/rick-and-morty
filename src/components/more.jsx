import { Button } from "flowbite-react";
import Square from "../roots/svgs/icons/square";
export default function Moreinfo() {
  return (
    <span className="px-2 ">
      <Button size="xs" pill color="gray">
        <i>
          <Square />
        </i>
        Ver todos
      </Button>
    </span>
  );
}
