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
      <div className="flex my-20 px-26 items-start ">
        <div className="flex flex-col">
          <div className=" gap-3">
            <div className="my-2">
              <Play />
              <h1 className="text-white font-Inter font-bold text-5xl">
                {ep.name}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM9 6V7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7V6H21V7C21 7.26522 21.1054 7.51957 21.2929 7.70711C21.4804 7.89464 21.7348 8 22 8C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7V6H26V10H6V6H9ZM26 26H6V12H26V26Z"
                fill="white"
              />
            </svg>

            <h2 className="text-white">{ep.air_date}</h2>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8C28 8.26522 27.8946 8.51957 27.7071 8.70711C27.5196 8.89464 27.2652 9 27 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8ZM17 15H5C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8946 4.73478 17 5 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15ZM17 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H17C17.2652 25 17.5196 24.8946 17.7071 24.7071C17.8946 24.5196 18 24.2652 18 24C18 23.7348 17.8946 23.4804 17.7071 23.2929C17.5196 23.1054 17.2652 23 17 23ZM31 20C30.9999 20.1695 30.9567 20.3362 30.8745 20.4845C30.7923 20.6327 30.6738 20.7577 30.53 20.8475L22.53 25.8475C22.3787 25.9421 22.2048 25.9944 22.0264 25.9992C21.848 26.0039 21.6716 25.9607 21.5154 25.8743C21.3593 25.7878 21.2292 25.6611 21.1386 25.5074C21.0479 25.3537 21.0001 25.1785 21 25V15C21.0001 14.8215 21.0479 14.6464 21.1386 14.4926C21.2292 14.3389 21.3593 14.2122 21.5154 14.1257C21.6716 14.0393 21.848 13.9961 22.0264 14.0008C22.2048 14.0056 22.3787 14.0579 22.53 14.1525L30.53 19.1525C30.6738 19.2423 30.7923 19.3673 30.8745 19.5155C30.9567 19.6638 30.9999 19.8305 31 20ZM28.1138 20L23 16.8037V23.1963L28.1138 20Z"
                fill="white"
              />
            </svg>
            <h2 className="text-white">{ep.episode}</h2>
          </div>
          <div className="inline-flex items-center mt-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_71_5298)">
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM16 27C13.8244 27 11.6977 26.3549 9.88873 25.1462C8.07979 23.9375 6.66989 22.2195 5.83733 20.2095C5.00477 18.1995 4.78693 15.9878 5.21137 13.854C5.63581 11.7202 6.68345 9.7602 8.22183 8.22183C9.76021 6.68345 11.7202 5.6358 13.854 5.21136C15.9878 4.78692 18.1995 5.00476 20.2095 5.83733C22.2195 6.66989 23.9375 8.07979 25.1462 9.88873C26.3549 11.6977 27 13.8244 27 16C26.9967 18.9164 25.8367 21.7123 23.7745 23.7745C21.7123 25.8367 18.9164 26.9967 16 27ZM13 13.5C13 13.7967 12.912 14.0867 12.7472 14.3334C12.5824 14.58 12.3481 14.7723 12.074 14.8858C11.7999 14.9994 11.4983 15.0291 11.2074 14.9712C10.9164 14.9133 10.6491 14.7704 10.4393 14.5607C10.2296 14.3509 10.0867 14.0836 10.0288 13.7926C9.97095 13.5017 10.0007 13.2001 10.1142 12.926C10.2277 12.6519 10.42 12.4176 10.6667 12.2528C10.9133 12.088 11.2033 12 11.5 12C11.8978 12 12.2794 12.158 12.5607 12.4393C12.842 12.7206 13 13.1022 13 13.5ZM22 13.5C22 13.7967 21.912 14.0867 21.7472 14.3334C21.5824 14.58 21.3481 14.7723 21.074 14.8858C20.7999 14.9994 20.4983 15.0291 20.2074 14.9712C19.9164 14.9133 19.6491 14.7704 19.4393 14.5607C19.2296 14.3509 19.0867 14.0836 19.0288 13.7926C18.971 13.5017 19.0007 13.2001 19.1142 12.926C19.2277 12.6519 19.42 12.4176 19.6667 12.2528C19.9133 12.088 20.2033 12 20.5 12C20.8978 12 21.2794 12.158 21.5607 12.4393C21.842 12.7206 22 13.1022 22 13.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_71_5298">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-white">
              {ep.characters.length} Personagens participaram deste episódio
            </h2>
          </div>
        </div>
      </div>
      <hr className="text-0-primary-0 h-2 my-16" />
      <div className="flex ">
        <Play />
        <h4 className="text-white text-2xl leading-5 w-3 px-3">
          Mais episódios
        </h4>
      </div>
      <ul className="flex gap-4 justify-around flex-wrap  py-8 ">
        {episode
          .slice(start, end)
          .filter((value) => value.id != currid.id)
          .map((value) => {
            return (
              <Link to={`/Episode/${value.id}`}>
                <li
                  className="max-w-50 gap-3 text-white *:border-none"
                  key={value.id}
                >
                  {<EpisodeCard data={value} />}
                </li>
              </Link>
            );
          })}
      </ul>
      <div className="flex gap-4 justify-center">
        <Button
          disabled={localPage - 1 < 0}
          onClick={prevPage}
          className="p-6 min-w-28"
        >
          perveuse
        </Button>
        <Button
          //   disabled={localPage + 1 >= Math.ceil(episode.length / perPage)}
          onClick={nextPage}
          className="p-6 min-w-28"
        >
          next
        </Button>
      </div>
      <Footer />
    </div>
  );
}
