const logo = document.getElementById('logo');
const rightSection = document.querySelector('.right');

logo.addEventListener('click', function() {
  if (rightSection.style.display === 'none') {
    rightSection.style.display = 'block';
  } else {
    rightSection.style.display = 'none';
  }
});

var helpDisplaying = true;
const helpToggleButton = document.getElementById('help-toggle');
helpToggleButton.addEventListener('click', function() {
  helpDisplaying = !helpDisplaying;
  //if (helpDisplaying) helpToggleButton.innerHTML = "Help off";
  //else helpToggleButton.innerHTML = "Help on";
});
