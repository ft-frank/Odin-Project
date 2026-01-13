import pastaSRC from './assets/pasta.jpeg';
import pizzaSRC from './assets/pizza.jpg'
import pancakeSRC from './assets/pancake.jpg';



export function Menu () {
    content.innerHTML = ""

    const menuDiv = document.createElement('div')
    menuDiv.id = "menuDiv"
    
    const pasta = document.createElement("div")
    pasta.textContent = "pasta"
    const pastaImg = document.createElement('img')
    pastaImg.src = pastaSRC;
    pastaImg.classList.add("foodImg")
    pasta.appendChild(pastaImg)
    

    const pizza = document.createElement("div")
    pizza.textContent = "pizza"
    const pizzaImg = document.createElement('img')
    pizzaImg.src = pizzaSRC
    pizzaImg.classList.add("foodImg")
    pizza.appendChild(pizzaImg)


    const pancake = document.createElement("div")
    pancake.textContent = "pancake"
    const pancakeImg = document.createElement('img')
    pancakeImg.src = pancakeSRC
    pancakeImg.classList.add("foodImg")
    pancake.appendChild(pancakeImg)

    menuDiv.append(pasta, pizza, pancake)

    content.append(menuDiv)


}