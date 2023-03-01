let jokeText = document.querySelector('.joke-text');
let changeJokeBtn = document.querySelector('.change-joke-btn');
let randomJokeUrl = 'https://api.chucknorris.io/jokes/random';

async function getData() {
    const res = await fetch(randomJokeUrl);
    const data = await res.json();
    insertNewJoke(data)
}

function insertNewJoke(data){
    let oldJoke = jokeText.querySelector('p');
    oldJoke.remove();
    let newJoke = document.createElement('p');
    newJoke.textContent = data.value;
    jokeText.append(newJoke);
}

changeJokeBtn.onclick = function(){
    getData();
}



