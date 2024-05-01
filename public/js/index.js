const $ = (selector) => {
  return window.document.querySelector(selector)
}

// const logo = $('#logo')
const iconMenu = $('#iconMenu')
const iconClose = $('#iconClose')
const nav = $('#nav')
const navContainer = $('#nav-container')

const openMenu = () => {
  iconMenu.classList.add('hidden')
  iconClose.classList.remove('hidden')
  navContainer.classList.remove('hidden')
  navContainer.classList.add('absolute', 'h-screen', 'w-full', 'top-0', 'left-0')
}

const closeMenu = () => {
  iconClose.classList.add('hidden')
  iconMenu.classList.remove('hidden')
  navContainer.classList.add('hidden')
}

iconMenu.addEventListener('click', () => openMenu())
iconClose.addEventListener('click', () => closeMenu())