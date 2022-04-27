const ratings = document.querySelectorAll('.rating')
const input = document.querySelector('input')
const ratingLow = document.querySelector('.rating-low small')
const ratingHigh = document.querySelector('.rating-high small')
const modal = document.querySelector('.modal')
const userRatingNumber = document.querySelector('.rating-number p')
const userFeedbackComment = document.querySelector('.feedback-comment p')
const sendBtn = document.querySelector('.btn')

let userRating = ''
let userComment = ''

// Ratings Style Classes
ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        removeClickedClass()
        rating.classList.add('clicked')

        userRating = rating.textContent
    }) 
})

function removeClickedClass() {
    ratings.forEach(rating => rating.classList.remove('clicked'))
}

// Get ScreenWidth
function screenWidth() {
    let screenWidth = window.innerWidth
    return screenWidth
}

// Checks ScreenWidth & Changes Input placeholder
function checkScreenWidth() {
    if (screenWidth() <= 500) {
        input.placeholder = 'Leave your feedback..,'
    } else {
        input.placeholder = 'Tell us something that keeps you coming back.'
    }
}

// 
function ratingTextChange() {
    if (screenWidth() <= 737) {
        ratingLow.textContent = '1 - Not likely at all'
        ratingHigh.textContent = '10 - Extremely likely'
    } else {
        ratingLow.textContent = 'Not likely at all'
        ratingHigh.textContent = 'Extremely likely'
    }
}

// Modal Toggle
function toggleModal() {
    if (!modal.classList.contains('open')) {
        modal.classList.add('open')
    } else {
        modal.classList.remove('open')
    }
}

// Update Modal DOM
function updateModal() {
    let comment = input.value
    userComment = comment

    if (userRating == '') {
        alert('Please select a rating.')
        toggleModal()
    } else {
        userRatingNumber.textContent = userRating
    }

    if (comment.length == 0) {
        userFeedbackComment.textContent = 'N/A'
    } else {
        userFeedbackComment.textContent = userComment
        input.value = ''
    }
}

// EVs
window.addEventListener('load', () => {
    checkScreenWidth()
    ratingTextChange()
});

window.addEventListener('resize', () => {
    checkScreenWidth()
    ratingTextChange()
});

modal.addEventListener('click', toggleModal)
sendBtn.addEventListener('click', () => {
    updateModal()
    toggleModal()
})



