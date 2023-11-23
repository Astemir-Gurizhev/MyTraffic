let questItems = document.querySelectorAll(".quest-item")

questItems.forEach(item =>{
    console.log(item);
    item.addEventListener("click", (event) => {
        console.log(event.currentTarget);
        let itemArrow = event.currentTarget.querySelector(".quest-item__arrow")
        itemArrow.classList.toggle("quest-item__arrow-active")
        let questText = event.currentTarget.querySelector(".quest-item__text")
        questText.classList.toggle("quest-item__text-active")
    })
})
        


