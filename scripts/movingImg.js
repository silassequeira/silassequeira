const moveImageContainer = () => {
    const layoutGrid = document.querySelector('.layoutGrid')
    const imgContainer = document.querySelector('.imgHeight')
    const infoFlex = layoutGrid.querySelector('.infoFlex.column')
    
    window.innerWidth < 950 
      ? layoutGrid.insertBefore(imgContainer, infoFlex)
      : layoutGrid.appendChild(imgContainer)
   }
   
   moveImageContainer()
   window.addEventListener('resize', moveImageContainer)