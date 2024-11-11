const moveProjectImageContainers = () => {
    const isMobileView = window.innerWidth < 950;
  
    document.querySelectorAll('.layoutGrid.sixColumns').forEach(layoutGrid => {
      const imgContainer = layoutGrid.querySelector('.imgContainer');
      imgContainer && (isMobileView 
        ? layoutGrid.insertAdjacentElement('afterbegin', imgContainer) 
        : layoutGrid.appendChild(imgContainer));
    });
  };
  
  moveProjectImageContainers();
  window.addEventListener('resize', moveProjectImageContainers);