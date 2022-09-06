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