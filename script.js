import { renderLevelPage } from "./levelPage.js";
const levels = document.querySelectorAll('.radio');
const start = document.querySelector('.start')
let userLevel = null;

for(const level of levels){
level.addEventListener('input', () => {
    userLevel = level.value;
    console.log(`Вы выбрали уровень сложности ${userLevel}!`);
})
};

start.addEventListener('click', () => {
if (userLevel) {
    renderLevelPage(userLevel); 
} 
});
