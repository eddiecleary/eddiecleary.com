const cards = document.querySelectorAll('#example-card');
const examplesLink = document.getElementById('examplesLink');
const examples = document.getElementById('examples');

examplesLink.addEventListener('click', scrollToExamples);

function is_touch_device4() {
    
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  
  var mq = function (query) {
      return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

window.addEventListener("load", function(){
  if (is_touch_device4()) {
    cards.forEach((el) => {
      el.classList.add('touch');
    });
  }
});

function scrollToExamples() {
  examples.scrollIntoView({
    behavior: 'smooth'
  });
}