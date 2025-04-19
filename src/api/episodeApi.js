import axios from "axios";

function formatEpisode(data) {
  const { id, name, episode } = data;
  return {
    id,
    name,
    episode,
  };
}
export default async function getEpisode(page) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );
  return res.data.results.map(formatEpisode);
}
export async function getEpisodeById(id) {
  if (!id) return;
  const res = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
  return res.data;
}
export async function getTotalEp() {
  const res = await axios.get(`https://rickandmortyapi.com/api/episode`);
  return res.data.info.count;
}
