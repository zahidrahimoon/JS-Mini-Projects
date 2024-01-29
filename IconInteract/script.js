function handleClick(platform) {
    var userChoice = confirm(`You clicked on ${platform}`);
    
    if (userChoice) {
      document.body.style.backgroundColor = 'green';
    } else {
      document.body.style.backgroundColor = 'red';
    }
  }
  