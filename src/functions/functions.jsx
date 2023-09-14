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
}

export async function getPopularMoviesCine() {
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

  return result.results;
}

export async function getRandomPopularMoviePosterUrl() {
  try {
    const popularMovies = await getPopularMovies();
    if (!popularMovies || popularMovies.results.length === 0) {
      throw new Error("No se encontraron películas populares");
    }
    const randomIndex = Math.floor(
      Math.random() * popularMovies.results.length
    );
    const randomMovie = popularMovies.results[randomIndex];
    const posterUrl = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
    return posterUrl;
  } catch (error) {
    console.error(
      "Error obteniendo el URL del póster de una película popular al azar:",
      error.message
    );
    return null;
  }
}

export async function getRandomPopularMovieBackdropUrl() {
  try {
    const popularMovies = await getPopularMovies();
    if (!popularMovies || popularMovies.results.length === 0) {
      throw new Error("No se encontraron películas populares");
    }
    const randomIndex = Math.floor(
      Math.random() * popularMovies.results.length
    );
    const randomMovie = popularMovies.results[randomIndex];
    const backdropUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
    return backdropUrl;
  } catch (error) {
    console.error(
      "Error obteniendo el URL del backdrop de una película popular al azar:",
      error.message
    );
    return null;
  }
}
export async function getTrendingMoviesWeek() {
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
export async function getTrendingMoviesToday() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
      options
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error(
      "Error obteniendo las películas populares del día:",
      error.message
    );
    return [];
  }
}

export function colorBasedOnValue(value) {
  if (isNaN(value)) {
    return "#F44336"; // Rojo
  }
  const conditions = [
    { condition: value >= 0 && value < 10, color: "#F44336" }, // Rojo
    { condition: value >= 10 && value < 20, color: "#FF5722" },
    { condition: value >= 20 && value < 30, color: "#FF9800" },
    { condition: value >= 30 && value < 40, color: "#FFC107" }, // Amarillo
    { condition: value >= 40 && value < 50, color: "#FFEB3B" },
    { condition: value >= 50 && value < 60, color: "#CDDC39" },
    { condition: value >= 60 && value < 70, color: "#8BC34A" },
    { condition: value >= 70 && value < 80, color: "#4CAF50" }, // Verde
    { condition: value >= 80 && value < 90, color: "#009688" },
    { condition: value >= 90 && value <= 100, color: "#00796B" },
  ];

  const matchingCondition = conditions.find(({ condition }) => condition);
  
  return matchingCondition.color;
}

export async function getPopularStreamingSeries() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_watch_providers=8`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error(
      "Error obteniendo las series populares de streaming:",
      error
    );
  }
}
// Función para obtener las series populares
export async function getTrendingSeries() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error("Error obteniendo series populares:", error);
  }
}

// Función para obtener las series más populares en general
export async function getPopularTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error("Error obteniendo series populares en general:", error);
  }
}

export async function searchFunction(keyword) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2UxMzc4ODUzMGM5YmU4ZjA3ZDVlNjQ5ZGI2YmUzOSIsInN1YiI6IjY0YzJlZjE3NjZhMGQzMDBlN2Q1M2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-B_kq7RMTBc74aTw_8yk7SWon1R5nMKVxwkpWLT4WW8",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`,
      options
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error("Error");
  }
}
