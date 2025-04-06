import DarkRick from "./svgs/darkRick";
import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import { MoonIcon, SunIcon } from "./svgs/icons/MoonAndSun";
import Heart from "./svgs/icons/heart";
import SearchBar from "../components/searchBar";
import Filter from "../components/filter";
import Moreinfo from "../components/more";
import CharacterCard from "../components/CharCards";
import { getCharacters } from "../api/charApi";
import { useState, useEffect } from "react";
import EpisodeCard from "../components/EpisodeCard";
import getEpisode from "../api/episodeApi";
import LocationCard from "../components/LocationCard";
import { getLocation } from "../api/locationApi";

export default function Root() {
  const [character, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    getCharacters().then((char) => setCharacter(char));
    getEpisode().then((ep) => setEpisode(ep));
    getLocation().then((loc) => setLocation(loc));
  }, []);

  return (
    <>
      <div className="bg-black dark">
        <div className="flex justify-between py-5 px-28">
          <RickLogo />
          <Button color="cyan" pill size="xs" className="gap-2">
            <i>
              <Heart color={"white"} w={"24px"} h={"24px"} />
            </i>
            Lista de favoritos
          </Button>
        </div>
        <div className="flex p-8 justify-between">
          <div className="w-96 h-32 flex flex-col gap-10">
            <h1 className="font-Inter text-5xl font-bold">
              Saiba tudo em um só
              <strong className="text-0-primary-0"> lugar.</strong>
            </h1>
            <h4 className="text-base font-normal font-Inter">
              Personagens. localizações, episódios e muito mais
            </h4>
            <div className="flex gap-4">
              <Button size="xs" pill color="cyan" className="gap-2">
                <i>
                  <MoonIcon />
                </i>
                Escuro
              </Button>
              <Button size="xs" pill color="gray" className="gap-2">
                <i>
                  <SunIcon />
                </i>
                Claro
              </Button>
            </div>
            <h4 className="text-0-Primary2-0">Ai sim, Porr#@%&*</h4>
          </div>
          <DarkRick />
        </div>
      </div>
      <div className="bg-0-darkest-0">
        <div className="flex justify-between py-16 px-28">
          <SearchBar />
          <Filter />
        </div>
        <span className="flex  items-center px-28  mt-16 pb-8">
          <h3 className="font-bold text-2xl font-inter text-white">
            Personagens
          </h3>

          <Moreinfo />
        </span>
        <ul className="flex gap-4 justify-around flex-wrap px-28 py-8 ">
          {character.slice(0, 8).map((char) => {
            return (
              <li
                className="max-w-80 cursor-pointer *:border-none"
                key={char.id}
              >
                {<CharacterCard data={char} />}
              </li>
            );
          })}
        </ul>
        <span className="flex items-center px-28  mt-16 pb-8">
          <h3 className="font-bold text-2xl font-inter text-white">
            Episódios
          </h3>

          <Moreinfo />
        </span>

        <ul className=" flex justify-center gap-4 pb-8">
          {episode.slice(0, 5).map((ep) => {
            return (
              <li className="max-w-80 cursor-pointer *:border-none" key={ep.id}>
                <EpisodeCard data={ep} />
              </li>
            );
          })}
        </ul>

        <span className="flex items-center px-28  mt-16 pb-8">
          <h3 className="font-bold text-2xl font-inter text-white">
            Localizações
          </h3>

          <Moreinfo />
        </span>
        <ul className="flex justify-center gap-4 pb-8">
          {location.slice(0, 7).map((loc) => {
            return (
              <li
                className="max-w-50 gap-3 text-white *:border-none"
                key={loc.id}
              >
                <LocationCard data={loc}></LocationCard>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between px-8">
          <RickLogo />
          <span className="flex items-center text-white">
            <p>Voltar ao topo</p>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
                stroke="#E4F4F4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.7031 19.0469L20 13.75L25.2969 19.0469"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 26.25V13.75"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <hr className="w-full h-3 my-8 text-white" />
        <div className="flex justify-between p-8 text-white">
          <p>©2023</p>
          <span className="flex gap-2">
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 18L22 12L16 6"
                  stroke="#11B0C8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6L2 12L8 18"
                  stroke="#11B0C8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <p>
              Desenvolvido por{" "}
              <strong className="text-0-primary-0">Henrique Sousa</strong>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
