import DarkRick from "./svgs/darkRick";
import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import { MoonIcon, SunIcon } from "./svgs/icons/MoonAndSun";
import Heart from "./svgs/icons/heart";
import SearchBar from "../components/searchBar";
import Filter from "../components/filter";
import Moreinfo from "../components/more";
import CharacterCard from "../components/charCards";
import { getCharacters } from "../api/charApi";
import { useState, useEffect } from "react";
import EpisodeCard from "../components/episodeCard";
import getEpisode from "../api/episodeApi";
import LocationCard from "../components/locationCard";
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
        <div className="flex flex-col md:flex-row justify-between py-5 px-6 md:px-20 lg:px-28 gap-4 md:gap-0">
          <RickLogo />
          <Button
            color="cyan"
            pill
            size="xs"
            className="gap-2 w-fit self-end md:self-center"
          >
            <i>
              <Heart color={"white"} w={"24px"} h={"24px"} />
            </i>
            Lista de favoritos
          </Button>
        </div>
        <div className="flex flex-col-reverse lg:flex-row p-6 md:p-12 lg:p-20 justify-between items-center gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="font-Inter text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
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
          <div className="w-full lg:w-1/2 flex justify-center">
            <DarkRick />
          </div>
        </div>
      </div>
      
  <div className="bg-0-darkest-0">
    <div className="flex flex-col md:flex-row justify-between py-8 md:py-16 px-6 md:px-20 lg:px-28 gap-6">
      <SearchBar handelSubmit={handelSubmit} />
      <Filter />
    </div>

    {/* Characters */}
    <section className="px-6 md:px-20 lg:px-28 mt-10">
      <div className="flex items-center justify-between pb-4">
        <h3 className="font-bold text-2xl font-inter text-white">Personagens</h3>
        <Moreinfo />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {character.slice(0, 8).map((value) => (
          <Link to={`/Character/${value.id}`} key={value.id}>
            <li className="text-white">
              <CharacterCard data={value} />
            </li>
          </Link>
        ))}
      </ul>
    </section>

    {/* Episodes */}
    <section className="px-6 md:px-20 lg:px-28 mt-16">
      <div className="flex items-center justify-between pb-4">
        <h3 className="font-bold text-2xl font-inter text-white">Episódios</h3>
        <Moreinfo />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {episode.slice(0, 5).map((value) => (
          <Link to={`/Episode/${value.id}`} key={value.id}>
            <li className="text-white">
              <EpisodeCard data={value} />
            </li>
          </Link>
        ))}
      </ul>
    </section>

    {/* Locations */}
    <section className="px-6 md:px-20 lg:px-28 mt-16">
      <div className="flex items-center justify-between pb-4">
        <h3 className="font-bold text-2xl font-inter text-white">Localizações</h3>
        <Moreinfo />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {location.slice(0, 7).map((value) => (
          <Link to={`/Location/${value.id}`} key={value.id}>
            <li className="text-white">
              <LocationCard data={value} />
            </li>
          </Link>
        ))}
      </ul>
    </section>

    <Footer />
  </div>
    </>
  );
}
