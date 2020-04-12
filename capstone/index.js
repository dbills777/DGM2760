// select dom elemnts to customize for user

// const name = prompt("Please Enter your name")
const heading = document.querySelector("#heading")
heading.textContent= `Welome ${name} to the movie database`

const API_KEY = "f757473356258e461984b8a22062f5a4";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=f757473356258e461984b8a22062f5a4";

// selecting elements from the dom
const searchButton = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSearchable = document.querySelector("#movie-searchable");

function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=f757473356258e461984b8a22062f5a4`;
  return url;
}

function movieSection(movies) {
  return movies.map((movie) => {
    if (movie.poster_path) {
      return `<div><h1>${movie.title}</h1><p>Realese date: ${movie.release_date}</p><img src=${
        IMAGE_URL + movie.poster_path
      } data-movie-id=${movie.id}/><p>synopsis: ${movie.overview}</p></div>`;
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
    <p id="content-close"></p>
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
  const path = "/search/movie";
  const searchURL = generateUrl(path) + "&query=" + value;

  fetch(searchURL)
    .then((res) => res.json())
    .then(renderSearchMovies)
    .catch((error) => {
      console.log("Error", error);
    });
  inputElement.value = "";
  console.log("Value:", value);
};

function createIframe(video) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${video.key}`;
  iframe.width = 360;
  iframe.height = 315;
  iframe.allowFullscreen = true;

  return iframe;
}
function createVideoTemplate(data, content) {
  // display movie videos
  content.innerHTML = '<p id="content-close">Click to close X</p>'
  console.log("Videos;", data);
  const videos = data.results;
  const length = videos.length > 2 ? 2 : videos.length; //only pull 2 youtube videos in results
  const iframeContainer = document.createElement("div");
  for (let i = 0; i < length; i++) {
    const video = videos[i]; //vido
    const iframe = createIframe(video);
    iframeContainer.appendChild(iframe);
    content.appendChild(iframeContainer);
  }
}
// Event Delegation for elements that are not in the dom until it is seached by the visitor
document.onclick = function (event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "img") {
    console.log("event:", event);
    const movieID = target.dataset.movieId;
    console.log("movie:", movieID);
    const section = event.target.parentElement.parentElement; // section
    const content = section.nextElementSibling; // content
    content.classList.add("content-display");

    const path = `/movie/${movieID}videos`;
    const url = generateUrl(path);
    //fetch movie videos here!
    fetch(url)
      .then((res) => res.json())
      .then((data) => createVideoTemplate(data, content))
      .catch((error) => {
        console.log("Error", error);
      });
  }

  if (target.id === "content-close") {
    const content = target.parentElement;
    content.classList.remove("content-display");
  }
};
