import axios from "axios";

function formatCharacter(data) {
  const { id, name, image, status, species, origin } = data;
  return {
    id,
    name,
    image,
    status,
    species,
    origin: origin.name,
  };
}

export async function getCharacters(page) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return res.data.results.map(formatCharacter);
}
export async function getCharactersById(id) {
  if (!id) return;

  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return res.data;
}
export async function getTotalChar(page) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return res.data.info.count;
}
