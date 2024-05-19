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
const copyright = document.getElementById('copyright');
copyright.addEventListener('click', function() {
  helpDisplaying = !helpDisplaying;
});
