const reveal = () => [...document.querySelectorAll('.reveal')]
  .filter(element => !element.classList.contains('active'))
  .filter(element => element.getBoundingClientRect().top < window.innerHeight - 150)
  .forEach(element => element.classList.add('active'))

const onScroll = () => {
  reveal()
  
  const allRevealed = [...document.querySelectorAll('.reveal')]
    .every(element => element.classList.contains('active'))
  
  allRevealed && window.removeEventListener('scroll', onScroll)
}

window.addEventListener('scroll', onScroll, { passive: true })