const API_KEY = "f757473356258e461984b8a22062f5a4";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=f757473356258e461984b8a22062f5a4";

// selecting elements from the dom
const searchButton = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSearchable = document.querySelector("#movie-searchable");
// const imgElement = document.querySelector('img')

function movieSection(movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `<div><h1>${movie.title}</h1><img src=${
        IMAGE_URL + movie.poster_path
      } data-movie-id=${movie.id}/></div>`;
    }
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

function renderSearchMovies(data) {
  //data.results[]
  movieSearchable.innerHTML = "";
  const movies = data.results;
  console.log(movies);
  const movieBlock = createMovieCards(movies);
  movieSearchable.appendChild(movieBlock);
  console.log("Data: ", data);
}

searchButton.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  console.log("value:", value);

  const searchURL = url + "&query=" + value;

  fetch(searchURL)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) => {
      console.log("Error", error);
    });
  inputElement.value = "";
  console.log("Value:", value);
};

// Event Delegation
document.onclick = function (event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "img") {
    console.log("hello world");
    const section = event.target.parentElement.parentElement; // section
    const content = section.nextElementSibling; // content
    content.classList.add('content-display');
    console.log(content)
  }
};
