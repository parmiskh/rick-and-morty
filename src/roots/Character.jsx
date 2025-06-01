import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import Heart from "./svgs/icons/heart";
import Play from "./svgs/icons/play";
import Alive from "./svgs/icons/alive";
import InfoBtn from "../components/moreinfo";
import Planet from "./svgs/icons/planet";
import { getCharacters, getCharactersById, getTotalChar } from "../api/charApi";
import { useLoaderData } from "react-router-dom";
import Location from "../components/location";
import Alien from "./svgs/icons/alien";
import Gender from "./svgs/icons/gender";
import { useEffect, useState } from "react";
import CharacterCard from "../components/charCards";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";

export async function Loader({ params }) {
  const char = await getCharactersById(params.id);
  return { char };
}
const apiPageSize = 20;
const perPage = 12;
export default function Character() {
  const currid = useParams();
  const { char } = useLoaderData();
  const [character, setCharacter] = useState([]);
  const [apiPage, setApiPage] = useState(1);
  const [localPage, setlocalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const start = (localPage - 1) * perPage;
  const end = start + perPage;
  const nextPage = () => {
    if (localPage + 1 <= Math.ceil(character.length / perPage)) {
      setlocalPage((perv) => perv + 1);
    } else if (apiPage < Math.ceil(total / apiPageSize)) {
      setApiPage((perv) => perv + 1);
    }
  };
  const prevPage = () => {
    if (localPage - 1 > 0) {
      setlocalPage((perv) => perv - 1);
    } else if (apiPage > 1) {
      setApiPage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    getCharacters(apiPage).then((ep) => {
      setCharacter(ep);
      setlocalPage(1);
    });
    getTotalChar().then((all) => setTotal(all));
  }, [apiPage]);
  return (
    <div className="bg-0-dark1-0 px-6 md:px-16 lg:px-44 py-8">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between py-5 md:px-10">
      <RickLogo />
      <Button color="cyan" pill size="xs" className="gap-2 mt-4 md:mt-0">
        <i>
          <Heart color={"white"} w={"24px"} h={"24px"} />
        </i>
        Lista de favoritos
      </Button>
    </div>
  
    {/* Character Info */}
    <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-10 items-start">
      {/* Left - Image & Basic Info */}
      <div className="w-full lg:w-1/2">
        <img src={char.image} alt={char.name} className="w-full max-w-md mx-auto" />
  
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <h1 className="text-white font-Inter font-bold text-3xl md:text-5xl">
              {char.name}
            </h1>
            <Heart color={"#11B0C8"} w={"32px"} h={"32px"} />
          </div>
  
          <div className="flex items-center gap-2 text-white">
            <Play />
            <h1>
              Participou de {char.episode.length} episódios
            </h1>
          </div>
  
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center gap-2">
              <Alive />
              <p>{char.status}</p>
            </div>
            <div className="flex items-center gap-2">
              <Alien />
              <p>{char.species}</p>
            </div>
            <div className="flex items-center gap-2">
              <Gender />
              <p>{char.gender}</p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Right - Planet & Location */}
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2 justify-end">
        {[{
          icon: <Planet />,
          title: "planet",
          name: char.origin.name,
        }, {
          icon: <Location />,
          title: "location",
          name: char.location.name,
        }].map(({ icon, title, name }, i) => (
          <div key={i} className="relative p-4 bg-0-darkGray-0 rounded-md text-white flex-1 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
              {icon}
            </div>
            <div className="mt-6">
              <h4>{title}</h4>
              <h4 className="text-0-primary-0 text-sm mt-2">{name}</h4>
            </div>
            <InfoBtn />
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  
    <hr className="text-0-primary-0 h-1 my-12" />
  
    {/* More Characters */}
    <div className="flex items-center px-6 md:px-20">
      <svg width="32" height="32">...</svg>
      <h4 className="text-white text-lg md:text-2xl leading-5 px-3">
        Mais personagens
      </h4>
    </div>
  
    <ul className="flex gap-4 justify-around flex-wrap py-8">
      {character
        .slice(start, end)
        .filter((value) => value.id !== currid.id)
        .map((value) => (
          <Link to={`/Character/${value.id}`} key={value.id}>
            <li className="max-w-64 text-white">
              <CharacterCard data={value} />
            </li>
          </Link>
        ))}
    </ul>
  
    <div className="flex gap-4 justify-center flex-wrap">
      <Button onClick={prevPage} className="p-4 min-w-28">
        Previous
      </Button>
      <Button onClick={nextPage} className="p-4 min-w-28">
        Next
      </Button>
    </div>
  
    <Footer />
  </div>
  );
}
