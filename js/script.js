let questItems = document.querySelectorAll(".quest-item")



questItems.forEach(item => {
    item.addEventListener("click", (event)=>{
        
        let questArrow = event.currentTarget.querySelector('.quest-item__arrow')
        
        let questTexts = event.currentTarget.querySelector('.quest-item__text')

        questArrow.classList.toggle('quest-item__arrow-active')
        questTexts.classList.toggle('quest-item__text-active')

    })
})

let teamItems = document.querySelectorAll('.team-item')
console.log(teamItems);

teamItems.forEach(item => {
    item.addEventListener("click", (event)=> {
        event.currentTarget.classList.toggle('team-item-active')
        let teamArrow = event.currentTarget.querySelector('.team-item__right')
        teamArrow.classList.toggle('team-item__right-active')
        let teamTextBottom = event.currentTarget.querySelector('.team-item__bottom')
        teamTextBottom.classList.toggle('team-item__bottom-active')
        let teamItemTop = event.currentTarget.querySelector('.team-item__top')
        teamItemTop.classList.toggle('team-item__top-active')
    })
})