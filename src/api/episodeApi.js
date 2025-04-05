import axios from "axios";

function formatEpisode(data) {
  const { id, name, episode } = data;
  return {
    id,
    name,
    episode,
  };
}
export default async function getEpisode() {
  const res = await axios.get(`https://rickandmortyapi.com/api/episode`);
  return res.data.results.map(formatEpisode);
}
