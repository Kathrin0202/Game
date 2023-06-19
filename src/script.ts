import { renderLevelPage } from './levelPage'
import './css/index.css'
import 'lodash'

export const startPage = () => {
    const box = document.querySelector('.top') as HTMLElement
    const startHtml = `<div class="container">
    <h1 class="title">Выбери сложность</h1>
    <div class="levels">
        <div class="level">
            <input
                class="radio"
                type="radio"
                id="radio1"
                name="radios"
                value="1"
                checked
            />
            <label for="radio1">1</label>
            <input
                class="radio"
                type="radio"
                id="radio2"
                name="radios"
                value="2"
                checked
            />
            <label for="radio2">2</label>
            <input
                class="radio"
                type="radio"
                id="radio3"
                name="radios"
                value="3"
                checked
            />
            <label for="radio3">3</label>
        </div>
    </div>
    <button class="start">Старт</button>
</div>`
    box.innerHTML = startHtml
    const levels: HTMLInputElement[] = Array.from(
        document.querySelectorAll('.radio')
    )
    const start = document.querySelector('.start') as HTMLElement
    let userLevel: string | null

    for (const level of levels) {
        level.addEventListener('input', () => {
            userLevel = level.value
            console.log(`Вы выбрали уровень сложности ${userLevel}!`)
        })
    }

    start?.addEventListener('click', () => {
        if (userLevel === '1') {
            renderLevelPage(box, 6)
        } else if (userLevel === '2') {
            renderLevelPage(box, 12)
        } else {
            renderLevelPage(box, 18)
        }
    })
}
startPage()
