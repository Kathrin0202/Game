const levels = document.querySelectorAll('.radio');
for(const level of levels){
level.addEventListener('click', () => {
    console.log(`Вы выбрали уровень сложности ${level.value}!`);
})
}
