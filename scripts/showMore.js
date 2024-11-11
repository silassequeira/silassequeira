const showMore = () => [...document.querySelectorAll('.showMore')]
 .forEach(button => 
   button.addEventListener('click', () => {
     const content = button.previousElementSibling
     const isExpanded = !content.classList.contains('expanded')
     
     content.classList.toggle('expanded')
     button.textContent = isExpanded ? 'Read less' : 'Read more'
   })
 )

showMore()