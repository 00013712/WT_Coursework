const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('toggle-button')[0]


toggleButton.addEventListener('clck', () => {
    navbarlinks.classList.toggle('active')
})