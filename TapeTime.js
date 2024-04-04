  // When scrolled down, contact information shows up
  document.addEventListener('DOMContentLoaded', function() {
    var containers = document.querySelectorAll('.container');
    var contact = document.querySelector('.contact');
    
    function isVisible(element) {
      var elementTop = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      return elementTop - windowHeight <= 0;
    }
    
    function handleScroll() {
      containers.forEach(function(container) {
        if (isVisible(container) && !container.classList.contains('active')) {
          container.classList.add('active');
        }
      });
      
      if (isVisible(contact)) {
        contact.classList.add('active');
      }
    }
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
});

// Debounce function to limit the frequency of function calls
function debounce(func, delay) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

// Function to handle scroll events with debounce
var debouncedHandleScroll = debounce(handleScroll, 50);

window.addEventListener('scroll', debouncedHandleScroll);

// When picked up by user, by scrolling down or up, content gets larger
function handleScroll() {
  var genresDivs = document.querySelectorAll('.genres');
  genresDivs.forEach(function(genresDiv) {
    var topPos = genresDiv.getBoundingClientRect().top;
    var bottomPos = genresDiv.getBoundingClientRect().bottom;

    if (topPos <= window.innerHeight && bottomPos >= 0) {
      genresDiv.classList.add('enlarged');
    } else {
      genresDiv.classList.remove('enlarged');
    }
  });
}

// Function - Title is visible letter by letter
document.addEventListener("DOMContentLoaded", function(event) {
  var titleElement = document.getElementById('title');
  var titleText = titleElement.textContent;
  var index = 0;

  function showLetters() {
    if (index < titleText.length) {
      titleElement.textContent = titleText.slice(0, index + 1);
      titleElement.style.visibility = "visible";
      index++;
      setTimeout(showLetters, 150);
    }
  }

  showLetters();
});
