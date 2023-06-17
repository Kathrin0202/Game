import { cards } from './cards'
import './css/page.css'
import { startPage } from './script'
export function renderLevelPage(box: HTMLElement, cardsCount: number) {
    let openHtml = ''
    let firstCard: string | undefined
    let secondCard: string | undefined
    let myTime = ''
    for (let i = 0; i <= cardsCount; i++) {
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
    const timer = setInterval(() => {
        time++
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, '0')
        const seconds = (time % 60).toString().padStart(2, '0')
        const gameTimer = document.querySelector('.time') as HTMLElement
        gameTimer.textContent = `${minutes}.${seconds}`
        myTime = gameTimer.innerHTML
        const buttonStart = document.querySelector(
            '.buttonstart'
        ) as HTMLElement
        buttonStart.addEventListener('click', () => {
            time = 0
            gameTimer.textContent = '00.00'
            clearInterval(timer)
        })
    }, 1000)
    const stopTimer = (): void => {
        clearInterval(timer)
    }
    const card: HTMLInputElement[] = Array.from(
        document.querySelectorAll('.card')
    )
    card.forEach((car) => {
        car.addEventListener('click', () => {
            car.setAttribute(
                'src',
                `./static/asset/jpg/${car.dataset.value}.jpg`
            )
            if (!firstCard) {
                firstCard = car.dataset.value
            } else {
                stopTimer()
                secondCard = car.dataset.value
                if (firstCard !== secondCard) {
                    const looser = `<div class="container-end">
                    <div class="text">
                    <div><img class="image"src="./static/asset/jpg/looser.png" alt="looser"></div>
                    <h1 class="title-end">Вы проиграли!</h1>
                    </div>
                    <div class="text-end">Затраченное время:</div>
                    <div class="time-end">${myTime}</div>
                    <div class="again">
                    <button class="start-again">Играть снова</button>
                    </div>
                    </div>`
                    box.innerHTML = looser
                    const buttonAgain = document.querySelector(
                        '.start-again'
                    ) as HTMLElement
                    buttonAgain.addEventListener('click', () => {
                        startPage()
                    })
                } else {
                    stopTimer()
                    const winner = `<div class="container-end">
                    <div class="text">
                    <div><img class="image"src="./static/asset/jpg/winner.png" alt="winner"></div>
                    <h1 class="title-end">Вы проиграли!</h1>
                    </div>
                    <div class="text-end">Затраченное время:</div>
                    <div class="time-end">${myTime}</div>
                    <div class="again">
                    <button class="start-again">Играть снова</button>
                    </div>
                    </div>`
                    box.innerHTML = winner
                    const buttonAgain: HTMLElement = document.querySelector(
                        '.start-again'
                    ) as HTMLElement
                    buttonAgain.addEventListener('click', () => {
                        startPage()
                    })
                }
            }
        })
    })
}
