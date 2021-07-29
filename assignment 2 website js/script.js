const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percent = document.getElementById('percent')
const remaining = document.getElementById('remaining')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullCups / totalCups * 330}px`
        percent.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else {
        remaining.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}