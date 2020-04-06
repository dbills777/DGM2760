const API_KEY = "f757473356258e461984b8a22062f5a4";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=f757473356258e461984b8a22062f5a4";

const searchButton = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSearchable = document.querySelector("#movie-searchable");

function movieSection(movies) {
  return movies.map((movie) => {
    return `
    <h1>${movie.title}</h1>
    <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `;
  });
}

function createMovieCards(movies) {
  const movieElement = document.createElement("div");
  movieElement.setAttribute("class", "movie");
  const movieTemplate = `
    <section class="section">
    ${movieSection(movies)}
    </section>
    <div class="content">
    <p id="content-close">x</p>
    </div>
    `;
  movieElement.innerHTML = movieTemplate;

  return movieElement;
}

searchButton.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log("value:", value);

  const searchURL = url + "&query=" + value;

  fetch(searchURL)
    .then((res) => res.json())
    .then((data) => {
      //data.results[]
      const movies = data.results;
      console.log(movies);
      const movieBlock = createMovieCards(movies);
      movieSearchable.appendChild(movieBlock);
      console.log("Data: ", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
  console.log("Value:", value);
};
