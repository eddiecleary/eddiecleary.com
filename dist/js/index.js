const navBtn = document.getElementById("navBtn");
const nav = document.getElementById("nav");
const year = document.getElementById('year');
const scrollBtn = document.getElementById('scrollBtn');
const rootElement = document.documentElement;
const examplesLink = document.getElementById('examplesLink');
const examples = document.getElementById('examples');

navBtn.addEventListener("click", toggleNav);
scrollBtn.addEventListener('click', scrollTop);
document.addEventListener('scroll', handleScroll);
examplesLink.addEventListener('click', scrollToExamples);

year.textContent = new Date().getFullYear();

function toggleNav() {
  navBtn.classList.toggle("is-active");
  nav.classList.toggle("expanded");
}

function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if ((rootElement.scrollTop / scrollTotal) > 0.4) {
    scrollBtn.style.opacity = '1';
    scrollBtn.style.pointerEvents = 'all';
  } else {
    scrollBtn.style.opacity = '0';
    scrollBtn.style.pointerEvents = 'none';
  }
}

function scrollToExamples() {
  console.log('clicked');
  
  examples.scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

