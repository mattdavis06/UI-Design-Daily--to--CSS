const accordionHeaders = document.querySelectorAll('.accordion-header');


accordionHeaders.forEach((accordionHeader) => { 
    accordionHeader.addEventListener('click', () => {
        removeActiveClasses();
        accordionHeader.classList.add('active');
               
    })
})
    
function removeActiveClasses() {
    accordionHeaders.forEach((header) => {
        header.classList.remove('active')
    })
}
