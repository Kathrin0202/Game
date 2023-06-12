import { cards } from './cards.js'
import './css/page.css'
export function renderLevelPage(box, cardsCount) {
    let openHtml = ''
    let firstCard = ''
    let secondCard = ''
    for (let i = 0; i < cardsCount; i++) {
        const random = cards[Math.floor(Math.random() * cards.length)]
        openHtml += `
        <div data-index="${i}">
        <img data-value="${random}"class="card" src='./static/asset/jpg/${random}.jpg' alt='${random}'/>
        </div>`
        cards.splice(cards.indexOf(random), 1)
    }
    const headHtml = `
    <header class="head">
    <div class="timetable">
        <div class="minutes">
            <div class="min">
                <p>min</p>
            </div>
            <div class="min">
                <p>sek</p>
            </div>
        </div>
        <div class="time">
            <time></time>
        </div>
    </div>
    <div class="startAgain">
        <button class="buttonstart">Начать заново</button>
    </div>
</header>`
    const open = `<div class="tops">${headHtml}
 <div class="cards">${openHtml}</div> </div>`
    box.innerHTML = open
    setTimeout(() => {
        const card = document.querySelectorAll('.card')
        card.forEach((car) => {
            car.setAttribute('src', './static/asset/jpg/рубашка.jpg')
        })
    }, 5000)
    
    let time = 0
    let timer = setInterval(() => {
    time++

    const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    const gameTimer = document.querySelector('.time')
    gameTimer.textContent = `${minutes}.${seconds}`
    const buttonStart = document.querySelector('.buttonstart')
    buttonStart.addEventListener('click', () => {
        time = 0
        gameTimer.textContent = '00.00'
        clearInterval(timer)
    })
}, 1000)
    const card = document.querySelectorAll('.card')
    card.forEach((car) => {
        car.addEventListener('click', () => {
            car.setAttribute('src', `./static/asset/jpg/${car.dataset.value}.jpg`)
            if (!firstCard) {
                firstCard = car.dataset.value
            } else {
                secondCard = car.dataset.value
                if (firstCard !== secondCard) {
                    alert('Вы проиграли')
                } else {
                    alert('Вы выиграли')
                }
            }
        })
    })
}
