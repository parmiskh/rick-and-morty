import { Card } from "flowbite-react";
import InfoBtn from "./moreinfo";
import Heart from "../roots/svgs/icons/heart";

export default function LocationCard({ data }) {
  const { name, type } = data;
  return (
    <Card className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-0-darkGray-0">
      <h4>{name}</h4>
      <h4>{type}</h4>
      <InfoBtn />
      <div className="flex items-center justify-center gap-2 mt-2">
        <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
      </div>
    </Card>
  );
}
