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
import UseHandleSubmit from "../components/useHandelSubmit";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Root() {
  const [character, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState([]);
  const [filteredChar, setFilterItemChar] = useState([]);
  const [filteredEp, setFilterItemEp] = useState([]);
  const [filteredLoc, setFilterItemLoc] = useState([]);

  useEffect(() => {
    getCharacters().then((char) => {
      setCharacter(char);
      setFilterItemChar(char);
    });
    getEpisode().then((ep) => {
      setEpisode(ep);
      setFilterItemEp(ep);
    });
    getLocation().then((loc) => {
      setLocation(loc);
      setFilterItemLoc(loc);
    });
  }, []);

  function handelSubmit(e, search) {
    e.preventDefault();
    UseHandleSubmit(search, filteredChar, setCharacter);
    UseHandleSubmit(search, filteredEp, setEpisode);
    UseHandleSubmit(search, filteredLoc, setLocation);
  }
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
          <SearchBar handelSubmit={handelSubmit} />
          <Filter />
        </div>
        <span className="flex  items-center px-28  mt-16 pb-8">
          <h3 className="font-bold text-2xl font-inter text-white">
            Personagens
          </h3>

          <Moreinfo />
        </span>
        <ul className="flex gap-4 justify-around flex-wrap px-28 py-8 ">
          {character.slice(0, 8).map((value) => {
            return (
              <li
                className="max-w-50 gap-3 text-white *:border-none"
                key={value.id}
              >
                <Link to={`/Character/${value.id}`}>
                  {<CharacterCard data={value} />}
                </Link>
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
          {episode.slice(0, 5).map((value) => {
            return (
              <li
                className="max-w-50 gap-3 text-white *:border-none"
                key={value.id}
              >
                <Link to={`//${value.id}`}>{<EpisodeCard data={value} />}</Link>
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
        {location.slice(0, 7).map((value) => {
          return (
            <li
              className="max-w-50 gap-3 text-white *:border-none"
              key={value.id}
            >
              <Link to={`//${value.id}`}>{<LocationCard data={value} />}</Link>
            </li>
          );
        })}
        <Footer />
      </div>
    </>
  );
}
