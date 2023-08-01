import { API_KEY } from "../keys/Keys";

export async function getPopularMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
