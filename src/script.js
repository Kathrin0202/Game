import { renderLevelPage } from './levelPage.js'
import './css/index.css'

const levels = document.querySelectorAll('.radio')
const start = document.querySelector('.start')
const box = document.querySelector('.top')
let userLevel = null

for (const level of levels) {
    level.addEventListener('input', () => {
        userLevel = level.value
        console.log(`Вы выбрали уровень сложности ${userLevel}!`)
    })
}

start.addEventListener('click', () => {
    if (userLevel === '1') {
        renderLevelPage(box, '6')
    }
    if (userLevel === '2') {
        renderLevelPage(box, '12')
    }
    if (userLevel === '3') {
        renderLevelPage(box, '18')
    }
})
