let questItems = document.querySelectorAll(".quest-item")

let questArrows = document.querySelectorAll(".quest-item__arrow")

let questTexts = document.querySelectorAll(".quest-item__text")


questItems.forEach(item => {
    item.addEventListener("click", (event)=>{

        console.log(event.currentTarget);
        questArrows.forEach(item =>{
            item.addEventListener('click', (event)=> {
                
                event.target.classList.toggle("quest-item__arrow-active")
            })
        })
        questTexts.forEach(item =>{
            item.addEventListener('click', (event)=> {
                event.target.classList.toggle("quest-item__text-active")
            })
        })
    })
})
