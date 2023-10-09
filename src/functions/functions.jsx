import { API_KEY } from "../keys/Keys";


/**
 * The function `formatDate` takes an input date and returns it in the format "dd/mm/yyyy".
 * @returns a formatted date string in the format "dd/mm/yyyy".
 */
export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

/**
 * The function `getYear` takes a string representing a date and returns the year portion of that date.
 * @returns the year from the given StringDate. If StringDate is not provided or is an empty string, it
 * will return an empty string.
 */
export function getYear(StringDate) {
  return StringDate ? StringDate.substring(0, 4) : "";
}


/**
 * The function `getPopularPosters` fetches popular movie posters from an API using a provided API key.
 * @returns the result of the API call, which is a JSON object containing information about popular
 * movies.
 */
export async function getPopularPosters() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-US&page=1`,
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

/**
 * The function `getPopularMovies5` makes an API call to retrieve the top 5 popular movies using the
 * TMDB API.
 * @returns an array of the first 5 popular movies.
 */
export async function getPopularMovies5() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-US&page=1`,
    options
  );
  const result = await response.json();

  return result.results.slice(0, 5);
}

/**
 * The function `getPopularMoviesCine` makes an API call to retrieve popular movies and returns the
 * results.
 * @returns the results of the popular movies fetched from the API.
 */
export async function getPopularMoviesCine() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-US&page=1`,
    options
  );
  const result = await response.json();
  return result.results;
}

/**
 * The function `getRandomPopularMoviePosterUrl` retrieves a random popular movie poster URL using the
 * TMDB API.
 * @returns the URL of a random popular movie poster.
 */
export async function getRandomPopularMoviePosterUrl() {
  try {
    const popularMovies = await getPopularPosters();
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

/**
 * The function `getRandomPopularMovieBackdropUrl` retrieves a random popular movie backdrop URL using
 * the TMDB API.
 * @returns the URL of a random popular movie backdrop image.
 */
export async function getRandomPopularMovieBackdropUrl() {
  try {
    const popularMovies = await getPopularPosters();
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

/**
 * The function `getTrendingMoviesWeek` fetches the trending movies of the week from an API and returns
 * the results.
 * @returns an array of movie results.
 */
export async function getTrendingMoviesWeek() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=es-US`,
      options
    );

    const result = await response.json();
    return result.results;
  } catch (error) {
    console.error("Error obteniendo las películas populares:", error.message);
    return [];
  }
}

/**
 * The function `getTrendingMoviesToday` fetches the trending movies of the day from an API and returns
 * the results.
 * @returns an array of movie results.
 */
export async function getTrendingMoviesToday() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=es-US`,
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

/**
 * The function colorBasedOnValue takes a numerical value as input and returns a color based on a set
 * of conditions.
 * @returns a color code based on the value provided. If the value is not a number (NaN), it returns
 * "#F44336" (red). If the value falls within a specific range, it returns the corresponding color
 * code. The color codes are defined in the conditions array.
 */
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


/**
 * The function `getTrendingSeries` fetches the trending TV series for the week from an API and returns
 * the results.
 * @returns an array of trending TV series.
 */
export async function getTrendingSeries() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=es-US`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error("Error obteniendo series populares:", error);
  }
}

/**
 * The function `getPopularTV` makes an asynchronous request to the TMDB API to fetch popular TV shows
 * and returns the results.
 * @returns an array of popular TV shows.
 */
export async function getPopularTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=es-US`
    );
    const result = await response.json();
    return result.results;
  } catch (error) {
    throw new Error("Error obteniendo series populares en general:", error);
  }
}

/**
 * The `searchFunction` is an asynchronous function that makes a request to the TMDB API to search for
 * movies or TV shows based on a keyword and page number, and returns the results, current page, and
 * total number of pages.
 * @returns an object with the following properties:
 * - results: an array of search results
 * - currentPage: the current page number of the search results
 * - totalPages: the total number of pages of search results
 */
export async function searchFunction(keyword, page) {
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
      `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=es-US&page=${
        page === 0 ? 1 : page
      }`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;

    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getBillboardMovie` retrieves a list of currently playing movies from an API and
 * returns the results, current page number, total number of pages, maximum date, and minimum date.
 * @returns an object with the following properties:
 * - results: an array of movie results
 * - currentPage: the current page number
 * - totalPages: the total number of pages
 * - dateMax: the maximum date of the movie results
 * - dateMin: the minimum date of the movie results
 */
export async function getBillboardMovie(page) {
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
      `https://api.themoviedb.org/3/movie/now_playing?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    const dateMax = data.dates.maximum;
    const dateMin = data.dates.minimum;

    return { results, currentPage, totalPages, dateMax, dateMin };
  } catch (error) {
    throw new Error("Error" + error);
  }
}


/**
 * The function `getUpComingMovie` is an asynchronous function that retrieves upcoming movies from an
 * API and returns the results, current page, total pages, maximum date, and minimum date.
 * @returns an object with the following properties:
 * - results: an array of upcoming movies
 * - currentPage: the current page number of the results
 * - totalPages: the total number of pages of results
 * - dateMax: the maximum date of the upcoming movies
 * - dateMin: the minimum date of the upcoming movies
 */
export async function getUpComingMovie(page) {
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
      `https://api.themoviedb.org/3/movie/upcoming?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    const dateMax = data.dates.maximum;
    const dateMin = data.dates.minimum;
    return { results, currentPage, totalPages, dateMax, dateMin };
  } catch (error) {}
}

/**
 * The function `getTopRatedMovie` is an asynchronous function that retrieves the top rated movies from
 * an API and returns the results, current page, and total pages.
 * @returns an object with the following properties:
 * - results: an array of top rated movies
 * - currentPage: the current page number
 * - totalPages: the total number of pages available for top rated movies
 */
export async function getTopRatedMovie(page) {
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
      `https://api.themoviedb.org/3/movie/top_rated?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getPopularMovies` fetches popular movies from an API and returns the results, current
 * page, and total number of pages.
 * @returns an object with the following properties:
 * - results: an array of popular movies
 * - currentPage: the current page number
 * - totalPages: the total number of pages of popular movies
 */
export async function getPopularMovies(page) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-US&page=${page}`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    return null;
  }
}

/**
 * The function `getPopularSeries` is an asynchronous function that makes a GET request to retrieve
 * popular TV series data from an API and returns the results, current page, and total pages.
 * @returns an object with the following properties:
 * - results: an array of popular series
 * - currentPage: the current page number
 * - totalPages: the total number of pages available for the popular series.
 */
export async function getPopularSeries(page) {
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
      `https://api.themoviedb.org//3/tv/popular?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getAirToday` is an asynchronous function that makes a GET request to the TMDB API to
 * retrieve a list of TV shows airing today, and returns the results, current page, and total pages.
 * @returns The function `getAirToday` returns an object with the following properties:
 * - `results`: an array of TV shows that are airing today
 * - `currentPage`: the current page number of the results
 * - `totalPages`: the total number of pages of results
 */
export async function getAirToday(page) {
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
      `https://api.themoviedb.org/3/tv/airing_today?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getOnAirSeries` is an asynchronous function that makes a GET request to the TMDB API
 * to retrieve a list of TV series that are currently on air, and returns the results, current page
 * number, and total number of pages.
 * @returns an object with the following properties:
 * - results: an array of on-air TV series
 * - currentPage: the current page number
 * - totalPages: the total number of pages of on-air TV series
 */
export async function getOnAirSeries(page) {
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
      `https://api.themoviedb.org/3/tv/on_the_air?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getTopRatedSeries` is an asynchronous function that retrieves the top rated TV series
 * from an API and returns the results, current page, and total number of pages.
 * @returns an object with the following properties:
 * - results: an array of top rated series
 * - currentPage: the current page number
 * - totalPages: the total number of pages available for the top rated series.
 */
export async function getTopRatedSeries(page) {
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
      `https://api.themoviedb.org/3/tv/top_rated?language=es-US&page=${page}`,
      options
    );
    const data = await response.json();
    const results = data.results;
    const currentPage = parseInt(data.page);
    const totalPages = data.total_pages;
    return { results, currentPage, totalPages };
  } catch (error) {
    throw new Error("Error" + error);
  }
}

/**
 * The function `getDetails` is an asynchronous function that makes a GET request to retrieve details
 * of a movie or TV show based on the provided ID and type.
 * @returns the results of the API call, which is the details of a movie or TV show.
 */
export async function getDetails(id, type) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2UxMzc4ODUzMGM5YmU4ZjA3ZDVlNjQ5ZGI2YmUzOSIsInN1YiI6IjY0YzJlZjE3NjZhMGQzMDBlN2Q1M2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-B_kq7RMTBc74aTw_8yk7SWon1R5nMKVxwkpWLT4WW8",
      },
    };
    let response;
    if (type === "movie") {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=es-US`,
        options
      );
    } else {
      response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=es-US`,
        options
      );
    }
    const results = await response.json();
    return results;
  } catch (error) {
    throw new Error("Error" + error);
  }
}
