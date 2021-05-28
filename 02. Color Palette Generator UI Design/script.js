const clickedColour = document.querySelector('.clicked-colour')
const hexValue = document.querySelector('.hex-colour')
const colourValue = document.querySelectorAll('.colour-value')
const colourPalette = document.querySelectorAll('.colour')
const colourValueText = document.querySelectorAll('.colour-value-text')
const generateBtn = document.querySelector('.btn')



// Random HEX Colour Value Generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// FUNC - Generates random colour in DOM
function generateRandomColour() {
    colourValueText.forEach((text) => {
        text.innerText = getRandomColor()
        text.previousElementSibling.style.backgroundColor = `${text.innerText}`
    })
    
}

generateRandomColour()

// FUNC - Add copied popup on screen and pop up colour card
function clickedColorPalette() {
    colourValue.forEach((colour, index) => {
        colour.addEventListener('click', () => {

            // Clicked colour ,palatte card effect
            colour.classList.add('success')

            // Clicked colour card pop up
            clickedColour.classList.add('active')

            // Add HEX value to pop up
            hexValue.innerText = `${colour.lastElementChild.innerText}`

            colourPalette[index].style.backgroundColor = '#fff'
            colourPalette[index].innerHTML = `<h4>Copied!</h4>`

            // Copy to clipboard
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(hexValue);
            selection.removeAllRanges()
            selection.addRange(range)

            try {
                document.execCommand('copy')
                selection.removeAllRanges()
                
                setTimeout(() => {
                    // Removes classes
                    colour.classList.remove('clicked')
                    colour.classList.remove('success')
                    

                    colourPalette[index].style.backgroundColor = hexValue.innerText = `${colour.lastElementChild.innerText}`
                    colourPalette[index].innerText = ''

                }, 1500)
            } catch(e) {
                const errorMsg = document.querySelector('.error-msg');
                errorMsg.classList.add('show');
    
                setTimeout(() => {
                    errorMsg.classList.remove('show');
                }, 1000);
    
            }
            setTimeout(() => {
                // Longer timeout for pop up class removal
                clickedColour.classList.remove('active')
            }, 1500)
        })
    })
}

clickedColorPalette()

function copyAllHexValues() {
    let values = [];
    document.querySelectorAll('.colour-value-text').forEach( (p) => values.push( p.innerHTML ) );
    let text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = values.join(', ');
    text.select();
    document.execCommand('copy');

    let allHexValues = text.value
    hexValue.innerHTML = allHexValues
    
    text.parentNode.removeChild(text);
}


// Copy Hex Palette - 'C' Key
document.addEventListener('keydown', (e) => {
    const c_keyDown = e.key

    if(c_keyDown === 'c') {
        copyAllHexValues()

        colourValue.forEach((colour, index) => {  

            colour.classList.add('success')
            clickedColour.classList.add('active')
        
            colourPalette[index].style.backgroundColor = '#fff'
            colourPalette[index].innerHTML = `<h4>Copied!</h4>`

            setTimeout(() => {
                // Removes classes
                
                colour.classList.remove('clicked')
                colour.classList.remove('success');
                clickedColour.classList.remove('active')

                colourPalette[index].style.backgroundColor = `${colour.lastElementChild.innerText}`
                colourPalette[index].innerText = ''

            }, 1500)
        })
    }

})

// Generate Random Palette - Spacebar
document.addEventListener('keydown', (e) => {
    const spacebarDown = e.key

    if(spacebarDown == ' ') {
        generateRandomColour() 
        }
})

// Generate Random Palette - Btn
generateBtn.addEventListener('click', () => {
    generateRandomColour()
})







