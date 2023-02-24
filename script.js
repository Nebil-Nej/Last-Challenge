const navToggle=document.querySelector('.nav-toggle')
const navList=document.querySelector('.nav-list-section')
navToggle.addEventListener('click', () => {
    navList.classList.toggle('expand')
})
