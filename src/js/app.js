import ScrollReveal from 'scrollreveal'



// Show Menu

const navMenu  = document.getElementById('nav-menu'),
      navOpen  = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

navOpen.addEventListener('click', () => {
  navMenu.classList.add('nav__menu--show')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('nav__menu--show')
})



// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => navMenu.classList.remove('nav__menu--show')
navLink.forEach(link => link.addEventListener('click', linkAction))



// Change BG Header

const scrollHeader = () => {
  const header = document.getElementById('header')

  window.scrollY >= 50
    ? header.classList.add('header--scroll')
    : header.classList.remove('header--scroll')
}

window.addEventListener('scroll', scrollHeader)



// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500,
})

sr.reveal(`.home__images`, {
  distance: '120px',
  delay: 400,
})

sr.reveal(`.home__title`, {
  delay: 1000,
})

sr.reveal(`.home__description`, {
  delay: 1200,
})

sr.reveal(`.home__button`, {
  delay: 1400,
})

sr.reveal(`.home__footer`, {
  delay: 1600,
})

sr.reveal(`.home__data div`, {
  origin: 'right',
  interval: 100,
  delay: 1800,
})