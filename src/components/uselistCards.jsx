import { Link } from "react-router-dom";
export default function useListCards(state, cut, Card) {
  return state.slice(0, cut).map((value) => {
    return (
      <Link to={`/Character/${value.id}`}>
        <li className="max-w-50 gap-3 text-white *:border-none" key={value.id}>
          {<Card data={value} />}
        </li>
      </Link>
    );
  });
}
