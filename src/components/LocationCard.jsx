import { Card } from "flowbite-react";
import InfoBtn from "./Moreinfo";
import Heart from "../roots/svgs/icons/heart";

export default function LocationCard({ data }) {
  const { name, type } = data;
  return (
    <Card>
      <h4>{name}</h4>
      <h4>{type}</h4>
      <InfoBtn />
      <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />

    </Card>
  );
}
