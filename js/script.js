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




let fruits = ['kiwi','apple','kiwi','orange', 'kiwi', 'apple'];

let countFruits = (list) => {
    let count = {}
    list.forEach(f => {
        !count[f] ? count[f] = 1 : count[f] ++
    })
    return count
}

console.log(countFruits(fruits));




let searchFruits = (list) => {
    let objectFruits = {}
    list.forEach(fruit => {
        !objectFruits[fruit] ? objectFruits[fruit] = 1 : objectFruits[fruit]++
    })
    return objectFruits
}

console.log(searchFruits(fruits));



let students = ['Astemir', 'Tembulat', 'Ruslan', 'Igor', 'Astemir', 'Tembulat']

let uniqueStudents = (list) => {
    let uniqie = {}
    list.forEach(f => {
        uniqie[f] = null
    })
    return Object.keys(uniqie)
}
console.log(uniqueStudents(students));



let getGitProfile = async () => {
    try {
    let response = await fetch('http://universities.hipolabs.com/search?country=Spain')
    let dataResponse = await response.json()
    let newData = dataResponse.map(item => item.name).forEach(item => console.log(`Университет: ${item}`))
    console.log(newData);
    }
    catch (err){
        console.log(err);
    }
}

getGitProfile()


let getIpInfo = async () => {
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let dataResponse = await response.json()
        let img = document.createElement('img')
        let form = document.querySelector('form')
        img.src = dataResponse.message
        form.append(img)
        img.style.marginTop = '50px'
    }
    catch(err) {
        let img = document.createElement('img')
        let form = document.querySelector('form')
        img.src = 'https://i.ytimg.com/vi/8K2dSOUjRxo/maxresdefault.jpg'
        form.append(img)
        img.style.marginTop = '50px'
    }
}

getIpInfo()


let compareNumbers = (a,b) => b - a
let ages = [2,3,7,5,10,9]
let res = ages.sort(compareNumbers)
console.log(res);

