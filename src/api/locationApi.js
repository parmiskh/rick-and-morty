import axios from "axios";

function formatLocation(data) {
  const { name, type, id } = data;
  return {
    name,
    type,
    id,
  };
}

export async function getLocation() {
  const loc = await axios.get("https://rickandmortyapi.com/api/location");
  return  loc.data.results.map(formatLocation);
}
