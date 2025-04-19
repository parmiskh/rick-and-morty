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
    <div className="bg-0-dark1-0 px-44 py-8">
      <div className="flex justify-between py-5 px-26">
        <RickLogo />
        <Button color="cyan" pill size="xs" className="gap-2">
          <i>
            <Heart color={"white"} w={"24px"} h={"24px"} />
          </i>
          Lista de favoritos
        </Button>
      </div>
      {/*چپ*/}
      <div className="flex gap-10 px-26 items-start">
        <div>
          <img src={char.image} alt={char.name} />
        </div>

        <div className="flex flex-col">
          <div className=" gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-white font-Inter font-bold text-5xl">
                {char.name}
              </h1>
              <Heart color={"#11B0C8"} w={"56px"} h={"56px"} />
            </div>
          </div>
          <div className="flex items-center">
            <Play />

            <h1 className="text-white">
              Participou de {char.episode.length} episódios
            </h1>
          </div>
          <div className="flex gap-8 mt-2 text-white">
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
        {/*راست*/}
        <div className="inline-flex gap-x-8">
          <div className="flex text-white justify-end items-end">
            <div className=" relative items-center justify-center text-center gap-4 p-4 bg-0-darkGray-0 rounded-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                <Planet />
              </div>
              <div className="max-w-36 w-full py-1">
                <h4>planet</h4>
                <h4 className="text-0-primary-0">{char.origin.name}</h4>
              </div>
              <InfoBtn />
              <div className="flex items-center justify-center gap-2 mt-2">
                <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
              </div>
            </div>
          </div>
          <div className="flex text-white justify-end items-end">
            <div className=" relative items-center justify-center text-center gap-4 p-4 bg-0-darkGray-0 rounded-md">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
                <Location />
              </div>
              <div className="max-w-36 w-full text-base py-4">
                <h4>{char.location.name}</h4>
              </div>
              <InfoBtn />
              <div className="flex items-center justify-center gap-2 mt-2">
                <Heart color={"#11B0C8"} w={"42px"} h={"36px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-0-primary-0 h-2 my-16" />
      <div className="flex ">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_93_9324)">
            <path
              d="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95962 9.92903 7.46026 12.9745 5.98435 16.5377C4.50844 20.1008 4.12228 24.0216 4.87469 27.8043C5.6271 31.5869 7.48429 35.0615 10.2114 37.7886C12.9385 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3563 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.17 4.50546 24 4.5ZM24 40.5C20.7366 40.5 17.5465 39.5323 14.8331 37.7192C12.1197 35.9062 10.0048 33.3293 8.75599 30.3143C7.50714 27.2993 7.18039 23.9817 7.81704 20.781C8.4537 17.5803 10.0252 14.6403 12.3327 12.3327C14.6403 10.0252 17.5803 8.4537 20.781 7.81704C23.9817 7.18039 27.2993 7.50714 30.3143 8.75599C33.3293 10.0048 35.9062 12.1197 37.7192 14.8331C39.5323 17.5465 40.5 20.7366 40.5 24C40.495 28.3745 38.7551 32.5685 35.6618 35.6618C32.5685 38.7551 28.3745 40.495 24 40.5ZM19.5 20.25C19.5 20.695 19.368 21.13 19.1208 21.5C18.8736 21.87 18.5222 22.1584 18.111 22.3287C17.6999 22.499 17.2475 22.5436 16.811 22.4568C16.3746 22.37 15.9737 22.1557 15.659 21.841C15.3443 21.5263 15.1301 21.1254 15.0432 20.689C14.9564 20.2525 15.001 19.8001 15.1713 19.389C15.3416 18.9778 15.63 18.6264 16 18.3792C16.37 18.132 16.805 18 17.25 18C17.8467 18 18.419 18.2371 18.841 18.659C19.2629 19.081 19.5 19.6533 19.5 20.25ZM33 20.25C33 20.695 32.868 21.13 32.6208 21.5C32.3736 21.87 32.0222 22.1584 31.611 22.3287C31.1999 22.499 30.7475 22.5436 30.311 22.4568C29.8746 22.37 29.4737 22.1557 29.159 21.841C28.8443 21.5263 28.6301 21.1254 28.5432 20.689C28.4564 20.2525 28.501 19.8001 28.6713 19.389C28.8416 18.9778 29.13 18.6264 29.5 18.3792C29.87 18.132 30.305 18 30.75 18C31.3467 18 31.919 18.2371 32.341 18.659C32.7629 19.081 33 19.6533 33 20.25Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_93_9324">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h4 className="text-white text-2xl leading-5 w-3 px-3">
          Mais personagens
        </h4>
      </div>
      <ul className="flex gap-4 justify-around flex-wrap  py-8 ">
        {character
          .slice(start, end)
          .filter((value) => value.id != currid.id)
          .map((value) => {
            return (
              <Link to={`/Character/${value.id}`}>
                <li
                  className="max-w-50 gap-3 text-white *:border-none"
                  key={value.id}
                >
                  {<CharacterCard data={value} />}
                </li>
              </Link>
            );
          })}
      </ul>
      <div className="flex gap-4 justify-center">
        <Button onClick={prevPage} className="p-6 min-w-28">
          perveuse
        </Button>
        <Button onClick={nextPage} className="p-6 min-w-28">
          next
        </Button>
      </div>
      <Footer />
    </div>
  );
}
