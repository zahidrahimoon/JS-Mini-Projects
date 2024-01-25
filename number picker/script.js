  let generate = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let guessedCorrectly = false;

    function checkGuess() {
      if (guessedCorrectly) {
        return;
      }

      let GuessNum = parseInt(document.getElementById("GuessNum").value);
      attempts++;

      if (isNaN(GuessNum) || GuessNum < 1 || GuessNum > 10) {
        document.getElementById('result').textContent = "Please enter a value between 1 and 10.";
      } else if (GuessNum === generate) {
        document.getElementById('result').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('result').style.color = "green";
        guessedCorrectly = true;
        setTimeout(function () {
          location.reload();
        }, 2000);
      } else if (GuessNum < generate) {
        document.getElementById('result').textContent = "The number is too low.";
      } else {
        document.getElementById('result').textContent = "The number is too high.";
      }
    }