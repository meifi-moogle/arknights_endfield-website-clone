const operatorImage = document.querySelector('.img-operator-0')
const imgOptions = document.querySelectorAll('.img-char-box')

const opName = document.querySelector('.op-name')
const opQuote = document.querySelector('.op-quote')
const opBio = document.querySelector('.op-bio-1')
const opBioTwo = document.querySelector('.op-bio-2')

for (let i = 0; i < imgOptions.length; i++) {
    imgOptions[i].addEventListener('click', function() {

        operatorImage.className = ''
        operatorImage.classList.add('img-operator')
        operatorImage.classList.add(`img-operator-${i}`)

        imgOptions.forEach((img) => {
            img.classList.remove('active')
            img.classList.add('inactive')
        })

        imgOptions[i].classList.remove('inactive')
        imgOptions[i].classList.add('active')

         //Reliably Play Animation When Characters Swap
         if (operatorImage.style.animationName === 'slide-in') {
            operatorImage.style.animation = "slide-in-alt 1000ms"
        } else {
            operatorImage.style.animation = "slide-in 1000ms"
        }
    })
}