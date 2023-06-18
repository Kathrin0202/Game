import { renderLevelPage } from './levelPage'
import './css/index.css'
import 'lodash'

export const startPage = () => {
    const levels: HTMLInputElement[] = Array.from(
        document.querySelectorAll('.radio')
    )
    const start = document.querySelector('.start') as HTMLElement
    const box = document.querySelector('.top') as HTMLElement
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
