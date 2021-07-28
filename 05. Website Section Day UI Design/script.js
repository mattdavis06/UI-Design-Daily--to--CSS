const col1_Percentage = document.querySelector('.col-1 .header span')
const col2_Percentage = document.querySelector('.col-2 .header span')
const enrollDate = document.querySelector('.enrollment-date')
const commenceDate = document.querySelector('.commencement-date')
const completionDate = document.querySelector('.completion-date')
const enrollDates = document.querySelectorAll('.enrollment-list li')

const data = [
    {
        id: 'Summer 2021',
        graduatesPercentage: 98,
        enrollmentPercentage: 86,
        enrollmentDate: '12 July',
        commencementDate: '08 September',
        completionDate: '30 November '
    }, 
    {
        id: 'Autumn 2021',
        graduatesPercentage: 90,
        enrollmentPercentage: 80,
        enrollmentDate: '05 August',
        commencementDate: '03 October',
        completionDate: '12 December'
    },
    {
        id: 'Winter 2021',
        graduatesPercentage: 75,
        enrollmentPercentage: 67,
        enrollmentDate: '23 September',
        commencementDate: '03 November',
        completionDate: '21 December'
    }
]

enrollDates.forEach((date, index) => {
    date.addEventListener('click', () => {

        removeActiveClass()
        date.classList.add('active')

        if(date.innerHTML == data[index].id) {
            col1_Percentage.innerHTML = `${data[index].graduatesPercentage}%`
            col2_Percentage.innerHTML = `${data[index].enrollmentPercentage}%`
            enrollDate.innerHTML = `${data[index].enrollmentDate}`
            commenceDate.innerHTML = `${data[index].commencementDate}`
            completionDate.innerHTML = `${data[index].completionDate}`
        } 
    })
})

function removeActiveClass() {
    enrollDates.forEach(date => {
        date.classList.remove('active')
    })
}

window.addEventListener('load', () => {
    enrollDates[0].classList.add('active')

    col1_Percentage.innerHTML = `${data[0].graduatesPercentage}%`
    col2_Percentage.innerHTML = `${data[0].enrollmentPercentage}%`
    enrollDate.innerHTML = `${data[0].enrollmentDate}`
    commenceDate.innerHTML = `${data[0].commencementDate}`
    completionDate.innerHTML = `${data[0].completionDate}`

})