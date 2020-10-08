let moviesInner = document.getElementById("Movies");
let search = document.getElementById("search");
let word = document.getElementById("word");

let AllMovies = []; //5s
async function GetAllMovies(type="now_playing") {
  let respone = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=6dc3a7fd65156d4b3236883b015d8470&language=en-US&page=1`
  );
  let result = await respone.json();

  AllMovies = result.results;
  DisplayAllMovies(AllMovies);
}

GetAllMovies();

function DisplayAllMovies(AllMovies) {
  let cartona = ``;
  for (let index = 0; index < AllMovies.length; index++) {
    cartona += `
        <div class="col-md-4 mt-3">
        <div class="movie position-relative overflow-hidden">
            <img class="w-100" src="https://image.tmdb.org/t/p/w500${AllMovies[index].poster_path}" alt="">
            <div class="overlay position-absolute text-center pt-5">
                <h2>${AllMovies[index].title}</h2>
                <p>${AllMovies[index].overview}</p>
                <h3>${AllMovies[index].vote_average}</h3>
                <span>${AllMovies[index].release_date}</span>
            </div>
        </div>
    </div>
        `;
  }

  moviesInner.innerHTML = cartona;
}
// ============================= array search========================
search.addEventListener("keyup", () => {
  SearchInput(search.value);
  console.log(search.value);
});

function SearchInput(search) {
  let cartona = ``;
  for (let index = 0; index < AllMovies.length; index++) {
    if (
      AllMovies[index].title.toLowerCase().includes(search.toLowerCase()) ==
      true
    ) {
      cartona += `
            <div class="col-md-4 mt-3">
            <div class="movie position-relative overflow-hidden">
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${AllMovies[index].poster_path}" alt="">
                <div class="overlay position-absolute text-center pt-5">
                    <h2>${AllMovies[index].title}</h2>
                    <p>${AllMovies[index].overview}</p>
                    <h3>${AllMovies[index].vote_average}</h3>
                    <span>${AllMovies[index].release_date}</span>
                </div>
            </div>
        </div>
            `;
    }
  }

  moviesInner.innerHTML = cartona;
}
