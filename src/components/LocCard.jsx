import { Card } from "flowbite-react";
import InfoBtn from "./Moreinfo";
import Heart from "../roots/svgs/icons/heart";
export default function LoacationCard({ data }) {
  const { name, type } = data;
  return (
    <Card className="bg-0-darkGray-0">
      <div>
        <h4>{type}</h4>
        <h4>{name}</h4>
      </div>
      <InfoBtn />
      <Heart color={"cyan"} w={"32px"} h={"32px"} />
    </Card>
  );
}
