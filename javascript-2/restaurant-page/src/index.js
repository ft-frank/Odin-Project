import {About} from "./about.js"
import {Menu} from "./menu.js"
import {Contact} from "./contact.js"
import "./styles.css"



const about = document.getElementById('about')
about.addEventListener('click', () => {
    About()
})


const menu = document.getElementById('menu')
menu.addEventListener('click', () => {
    Menu()
})

const contact = document.getElementById('contact')
contact.addEventListener('click', () => {
    Contact()

})


const content = document.getElementById('content')





