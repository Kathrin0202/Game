const box = document.querySelector('.container');
export function renderLevelPage(userLevel) {
    
    const gameHtml = `
    <div class="level"> 
    <h1 class="title">Выбран уровень ${userLevel}</h1>
    </div>`;
    box.innerHTML = gameHtml;
}