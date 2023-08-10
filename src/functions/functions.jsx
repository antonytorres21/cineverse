import { API_KEY } from "../keys/Keys";

export async function getPopularMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    return null;
  }
}

export async function getPopularMovies5() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    options
  );
  const result = await response.json();

  return result.results.slice(0, 5);
;
}


export async function getRandomPopularMoviePosterUrl() {
  try {
    const popularMovies = await getPopularMovies();
    if (!popularMovies || popularMovies.results.length === 0) {
      throw new Error("No se encontraron películas populares");
    }    
    const randomIndex = Math.floor(Math.random() * popularMovies.results.length);
    const randomMovie = popularMovies.results[randomIndex];
    const posterUrl = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
    return posterUrl;
  } catch (error) {
    console.error("Error obteniendo el URL del póster de una película popular al azar:", error.message);
    return null;
  }
}

export async function getRandomPopularMovieBackdropUrl() {
  try {
    const popularMovies = await getPopularMovies();
    if (!popularMovies || popularMovies.results.length === 0) {
      throw new Error("No se encontraron películas populares");
    }
    const randomIndex = Math.floor(Math.random() * popularMovies.results.length);
    const randomMovie = popularMovies.results[randomIndex];
    const backdropUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
    return backdropUrl;
  } catch (error) {
    console.error("Error obteniendo el URL del backdrop de una película popular al azar:", error.message);
    return null;
  }
}
export async function getTrendingMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US`,
      options
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error("Error obteniendo las películas populares:", error.message);
    return [];
  }
}
