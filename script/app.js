const jokeContent = document.querySelector(".js-joke-content");
const jokeBtn = document.querySelector(".js-joke-btn");
const jokeLoader = document.querySelector(".js-loading-state");

let loadingDelayed;

const showLoader = () => {
    loadingDelayed = setTimeout(() => {
        jokeLoader.classList.remove("u-hidden");
        jokeContent.classList.add("u-hidden");
    }, 500)
   
}

const removeLoader = () => {
    if(loadingDelayed) clearTimeout(loadingDelayed);
    loadingDelayed = null;
    jokeLoader.classList.add("u-hidden");
    jokeContent.classList.remove("u-hidden");
}


const fetchJoke = () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => response.json())
}

const generateJoke =  async function () {
    showLoader();
    const {joke}  = await fetchJoke()
    jokeContent.innerHTML = joke
    removeLoader();
    
}

const init = function () {
    generateJoke();
    jokeBtn.addEventListener("click", generateJoke);
  };

init();
