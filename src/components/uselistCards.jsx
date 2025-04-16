import { Link, useParams } from "react-router-dom";
export default function useListCards(state, cut, Card) {
  const currId = useParams();
  console.log(currId.id);
  return state
    .slice(0, cut)
    .filter((value) => value.id != currId.id)
    .map((value) => {
      console.log(value.id);
      return (
        <li className="max-w-50 gap-3 text-white *:border-none" key={value.id}>
          <Link to={`/Character/${value.id}`}>{<Card data={value} />}</Link>
        </li>
      );
    });
}
