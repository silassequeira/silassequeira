async function fetchJokes() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await response.json();
    
    const jokeElement = document.createElement('h2');
    
    jokeElement.textContent = joke.joke;

    document.querySelector('.dad-joke').appendChild(jokeElement);
    jokeElement.classList.add('serif');
    
    console.log("Fetched joke data:", joke);
}

fetchJokes();

