const testimonialQuote = document.querySelector('.testimonial')
const userImg = document.querySelector('.testimonial-user img')
const userName = document.querySelector('.testimonial-user-name')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const navDots = document.querySelectorAll('.nav-dot')


const testimonialsArr = [{
    quote: '"This is simple unbelievable! I wish I would have thought of it first. Courses should be nominated for service of the year. It\'s the perfect solution for our business."',
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Olivia Jackson'
},
{
    quote: '"What a product. It\'s changed the way we work day to day, and increased our customer interaction. I would recommend to anyone."',
    img: 'https://randomuser.me/api/portraits/men/34.jpg',
    name: 'Mark Bidwell'
},
{
    quote: '"One word.....amazing!"',
    img: 'https://randomuser.me/api/portraits/men/89.jpg',
    name: 'Richard Dixon'
},
{
    quote: '"Increased turn around time, increased sales. What\'s not to like about this amazing software?!"',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Joanna Radcliffe'
},
]

let counter = 0
let navDotIndex = 0

function updateTestimonial(index) {
    const { quote, img, name } = testimonialsArr[index]

    testimonialQuote.innerHTML = quote
    userImg.src = img
    userName.innerHTML = name
}

prev.addEventListener('click', () => {
    counter--
    navDotIndex--

    if(counter && navDotIndex <= 0) {
        counter = testimonialsArr.length - 1
        navDotIndex = 3
    } 

    updateTestimonial(counter)
    updateActiveDots()
})

next.addEventListener('click', () => {
    counter++
    navDotIndex++

    if(counter && navDotIndex >= testimonialsArr.length) {
        counter = 0
        navDotIndex = 0
    }

    updateTestimonial(counter)
    updateActiveDots()
})

function updateActiveDots() {
    navDots.forEach((dot, index) => {
        if(index === counter) {
            removeActiveDot()
            dot.classList.add('active')
        }
    })
}

function removeActiveDot() {
    navDots.forEach(dot => {
        dot.classList.remove('active')
    }) 
}

updateTestimonial(counter)
updateActiveDots()