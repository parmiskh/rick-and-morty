import { Button } from "flowbite-react";
import Info from "../roots/svgs/icons/info";
export default function InfoBtn() {
  return (
    <Button pill color="gray" className="gap-2">
      <i>
        <Info />
      </i>
      Saiba mais
    </Button>
  );
}
