const body = document.body.classList;
const cardWrappers = document.querySelectorAll('.card-wrapper')
const ctaBtns = document.querySelectorAll('.cta-btn button')

// GV for clearTimeout
let timer

// Loops through each .cardwrapper, add EL, removes active classes,  
// adds active and calls cardWrapperCheck FUNC
ctaBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        removeActiveClass()
        cardWrappers[i].classList.add('active')

        cardWrapperCheck()
    })
})

// Removes active class
function removeActiveClass() {
    cardWrappers.forEach(cardWrap => {
        cardWrap.classList.remove('active')
    }) 
}

// Checks if card is equal to 0 or equal to the cardwrapper length -1
// then calls each FUNC, to change the bg linear gradient direction
function cardWrapperCheck() {
    cardWrappers.forEach((cardWrap, i) => {
        if(cardWrap.classList.contains('active') && i === 0) {
            setBgLeftStyle()
        } else if(cardWrap.classList.contains('active') && i === cardWrappers.length - 1) {
            setBgRightStyle()
        }
    }) 
}

// Changes bg linear gradient style, replaces .bg-left with .bg-right
function setBgRightStyle() {
    cardWrappers.forEach(cardWrap => {
        if(cardWrap.classList.contains('active')) {
            // Empty IF - to allow transition to finish and apply else
        } else {
            cardWrap.classList.replace('bg-left', 'bg-right')
        }
    })
}

// Changes bg linear gradient style, replaces .bg-right with .bg-left
function setBgLeftStyle() {
    cardWrappers.forEach(cardWrap => {
        if(cardWrap.classList.contains('active')) {
            // Empty IF - to allow transition to finish and apply else
        } else {
            cardWrap.classList.replace('bg-right', 'bg-left')
        }
    })
}

// Removes Transitions Visual on Load and Resize Event Listeners
function removeTransitions() {
    if(timer) {
        clearTimeout(timer)
        timer = null
    }
    
    body.add('stop-transitions');

    timer = setTimeout(() => {
        body.remove('stop-transitions')
        timer = null
    }, 100)
}

// EL for window resize
window.addEventListener('resize', () => {
    removeTransitions()
})

