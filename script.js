let jokeText = document.querySelector('.joke-text');
let changeJokeBtn = document.querySelector('.change-joke-btn');
let randomJokeUrl = 'https://api.chucknorris.io/jokes/random';

async function getData() {
    const res = await fetch(randomJokeUrl);
    const data = await res.json();
    insertNewJoke(data);

}

function insertNewJoke(data){
    let jokeContent = jokeText.querySelector('p');
    jokeContent.style.top = '-100%'
    jokeContent.ontransitionend = function(){
        jokeContent.textContent = data.value;
        jokeContent.style.top = '0px'   
    }
}


changeJokeBtn.onclick = function(){
    getData();
}



