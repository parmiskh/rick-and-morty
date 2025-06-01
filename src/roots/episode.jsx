import RickLogo from "./svgs/icons/rickandmorty";
import { Button } from "flowbite-react";
import Heart from "./svgs/icons/heart";
import Play from "./svgs/icons/play";
import Alive from "./svgs/icons/alive";
import { useLoaderData } from "react-router-dom";
import Alien from "./svgs/icons/alien";
import Gender from "./svgs/icons/gender";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import EpisodeCard from "../components/episodeCard";
import getEpisode, { getTotalEp, getEpisodeById } from "../api/episodeApi";

export async function EpLoader({ params }) {
  const ep = await getEpisodeById(params.id);
  return { ep };
}
const apiPageSize = 20;
const perPage = 12;
export default function Episode() {
  const currid = useParams();
  const { ep } = useLoaderData();
  const [episode, setEpisode] = useState([]);
  const [apiPage, setApiPage] = useState(1);
  const [localPage, setlocalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const start = (localPage - 1) * perPage;
  const end = start + perPage;
  const nextPage = () => {
    if (localPage + 1 <= Math.ceil(episode.length / perPage)) {
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
    getEpisode(apiPage).then((ep) => {
      setEpisode(ep);
      setlocalPage(1);
    });
    getTotalEp().then((all) => setTotal(all));
  }, [apiPage]);
  return (
    <div className="bg-0-dark1-0 px-6 sm:px-10 md:px-20 lg:px-44 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-5">
        <RickLogo />
        <Button color="cyan" pill size="xs" className="gap-2">
          <i>
            <Heart color={"white"} w={"24px"} h={"24px"} />
          </i>
          Lista de favoritos
        </Button>
      </div>

      {/* اپیزود اصلی */}
      <div className="flex flex-col md:flex-row gap-10 mt-16">
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 mb-4">
            <Play />
            <h1 className="text-white font-bold text-3xl md:text-5xl">
              {ep.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-white">
            {/* تاریخ پخش */}
            <div className="flex items-center gap-2">
              {/* آیکن */}
              <svg width="32" height="32" viewBox="0 0 32 32">
                ...
              </svg>
              <h2>{ep.air_date}</h2>
            </div>

            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32">
                ...
              </svg>
              <h2>{ep.episode}</h2>
            </div>
          </div>

          {/* تعداد کاراکتر */}
          <div className="inline-flex items-center mt-6 text-white gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32">
              ...
            </svg>
            <h2>
              {ep.characters.length} Personagens participaram deste episódio
            </h2>
          </div>
        </div>
      </div>

      <hr className="text-0-primary-0 h-2 my-16" />

      <div className="flex items-center mb-6">
        <Play />
        <h4 className="text-white text-2xl px-3">Mais episódios</h4>
      </div>

      {/* لیست  */}
      <ul className="flex flex-wrap gap-6 justify-center py-8">
        {episode
          .slice(start, end)
          .filter((value) => value.id !== currid.id)
          .map((value) => (
            <Link to={`/Episode/${value.id}`} key={value.id}>
              <li className="max-w-50 gap-3 text-white *:border-none">
                <EpisodeCard data={value} />
              </li>
            </Link>
          ))}
      </ul>

      {/* pagination*/}
      <div className="flex gap-4 justify-center mt-4">
        <Button
          disabled={localPage - 1 < 0}
          onClick={prevPage}
          className="p-4 sm:p-6 min-w-24 sm:min-w-28"
        >
          previous
        </Button>
        <Button onClick={nextPage} className="p-4 sm:p-6 min-w-24 sm:min-w-28">
          next
        </Button>
      </div>

      <Footer />
    </div>
  );
}
