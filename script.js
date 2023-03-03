let jokeText = document.querySelector('.joke-text');
let changeJokeBtn = document.querySelector('.change-joke-btn');
let randomJokeUrl = 'https://api.chucknorris.io/jokes/random';
let categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
let categorySelect = document.querySelector('.category-select');

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    insertNewJoke(data);
}
async function getCategorys(){
    const res = await fetch(categoriesUrl);
    const categories = await res.json();
    categories.forEach(element => {
        let newCategory = document.createElement('option');
        newCategory.textContent = element;
        categorySelect.append(newCategory);
    });
}


function insertNewJoke(joke){
    let jokeContent = jokeText.querySelector('p');
    jokeContent.style.top = '-100%'
    jokeContent.ontransitionend = function(){
        jokeContent.textContent = joke.value;
        jokeContent.style.top = '0px'   
    }
}
getCategorys();
changeJokeBtn.onclick = function(){
    let chosenCategory = categorySelect.value;
    if(chosenCategory == 'random'){
        getData(randomJokeUrl);
        console.log('random')
    }
    else{
        getData(randomJokeUrl+`?category=${chosenCategory}`);
    }
}



