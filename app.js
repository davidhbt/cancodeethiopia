const slider = () =>{
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav')
  const x = document.querySelector('.x')

  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active')
    if (nav.classList.contains('nav-active')) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  const mainMenuItems = document.querySelectorAll('.mainMenu > *')
  mainMenuItems.forEach(item => {
    item.addEventListener('click', () => {
    nav.classList.remove('nav-active')
    document.body.style.overflowY = 'auto'
    })
  })
  })

  x.addEventListener('click', () =>{
    nav.classList.remove('nav-active')
    if (nav.classList.contains('nav-active')) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  })
}

slider()

const mediaQuery = window.matchMedia('(max-width: 1035px)')

const handleMediaQueryChange = (e) => {
  const developmentImg = document.querySelector('#development-img')
  if (developmentImg) {
    if (e.matches) {
      developmentImg.style.display = 'none'
    } else {
      developmentImg.style.display = 'inline-table'
      developmentImg.style.textAlign = 'right'
    }
  }
}

mediaQuery.addEventListener('change', handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)