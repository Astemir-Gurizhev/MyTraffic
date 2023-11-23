let questItems = document.querySelectorAll(".quest-item")


questItems.forEach(item => {
    item.addEventListener("click", (event)=>{
        
        let questArrow = event.currentTarget.querySelector('.quest-item__arrow')
        
        let questTexts = event.currentTarget.querySelector('.quest-item__text')

        questArrow.classList.toggle('quest-item__arrow-active')
        questTexts.classList.toggle('quest-item__text-active')

    })
})

