import "../components/main-section";

const main = () => {
    // initial value
    const API_KEY = "50c9f41e6509b485229c9341a77cc53d";
    const url =
    "https://api.themoviedb.org/3/search/movie?api_key=50c9f41e6509b485229c9341a77cc53d";

    // selecting element from the DOM
    const buttonElement = document.querySelector("#search");
    const inputElement = document.querySelector("#inputValue");
    const movieList = document.querySelector("#movie-list")

    function movieSection(movies) {
        return movies.map((movie) => {
          return `
            <img class="m-1" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" data-movie-id="${movie.id}"/>
          `;
        })
      }
      
      function createMovieContainer(movies) {
        const movieElement = document.createElement("div");
        movieElement.setAttribute("class", "movie");
      
        const movieTemplate = `
            <div class="section">
              ${movieSection(movies)}
            </div>
        `;
      
          movieElement.innerHTML = movieTemplate;
          return movieElement;
      };
      
      
      
      buttonElement.onclick = function (event) {
        event.preventDefault();
        const value = inputElement.value;
      
        const newUrl = url + "&query=" + value;

        fetch(newUrl)
          .then((res) => res.json())
          .then((data) => {
            const movies = data.results;
            const movieBlock = createMovieContainer(movies);
            movieList.appendChild(movieBlock);
            console.log("data: ", data);
          })
          .catch((error) => {
            console.log("error: ", error);
          });
      };
}

export default main;