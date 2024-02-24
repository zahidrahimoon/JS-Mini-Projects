const apiUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';

function generateJoke() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const jokeDisplay = document.getElementById('jokeDisplay');
            jokeDisplay.textContent = data.joke || (data.setup + ' ' + data.delivery);
        })
        .catch(error => console.error('Error fetching joke:', error));
}
