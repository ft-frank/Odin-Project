import './styles.css'

class Item {

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.project = Project.currentProject.title
    }

    view() {

        const div = document.createElement('div')

        const item = document.createElement('button')
        item.classList.add('collapsible-item')
        item.textContent = `${this.title}`

        const itemContent = document.createElement('div')
        itemContent.className = 'content'
        
        const descriptionItem = document.createElement('p')
        descriptionItem.textContent = this.description
        descriptionItem.className = 'item-description'
        
        const dueDateItem = document.createElement('p')
        dueDateItem.textContent = `Due: ${this.dueDate}`
        dueDateItem.className = 'item-due-date'
        
        const priorityItem = document.createElement('p')
        priorityItem.textContent = `Priority: ${this.priority}`
        priorityItem.className = 'item-priority'
        
        const projectItem = document.createElement('p')
        projectItem.textContent = `Project: ${this.project}`
        projectItem.className = 'item-project'

        const deleteButton = document.createElement('button')
        deleteButton.textContent = "delete"
        deleteButton.addEventListener('click', () => {
            const currentProject = Project.listOfProjects.find((project) => project.title === Project.currentProject)
            const thisItemIndex = currentProject.items.findIndex(toBeFoundItem => toBeFoundItem.title === this.title)
            currentProject.items.splice(thisItemIndex ,1)
            page.loadPage()
        })
        deleteButton.className = "delete"

        const checkBox = document.createElement('input')
        checkBox.type = "checkbox"

        item.addEventListener("click", () => {
            item.classList.toggle("active")
            var itemCont = item.nextElementSibling;
            if (itemCont.style.display === "block") {
                itemCont.style.display = "none"
            }
            else {
                itemCont.style.display = "block"
            }
        })

        itemContent.appendChild(descriptionItem)
        itemContent.appendChild(dueDateItem)
        itemContent.appendChild(priorityItem)
        itemContent.appendChild(projectItem)
        itemContent.appendChild(deleteButton)
        item.appendChild(checkBox)

        div.appendChild(item)
        div.appendChild(itemContent)

        



        return div
        
    }

}

class Project {

    static listOfProjects = []
    static listofProjectTitles = []
    static currentProject = undefined

    constructor(title) {
        this.title = title
        this.items = []
        Project.listOfProjects.push(this)
        Project.listofProjectTitles.push(this.title)
        Project.currentProject = this.title
    }


    view() {
        const projectContent = document.createElement("div")
        this.items.forEach((item) => {
            projectContent.appendChild(item.view())
        })
        return projectContent
    }

    static switchCurrent(title) {
        Project.currentProject = title
    }
}

const general = new Project("general")
const content = document.getElementById('listContent')

function Page() {

    function loadProjects() {
        const projects = document.getElementById("selectProjects")
        projects.innerHTML = ""
        Project.listofProjectTitles.forEach((projectTitle)=>{  
            const option = document.createElement("option")
            option.textContent = projectTitle
            projects.appendChild(option)
        })  
    }

    function loadItems() {
        const currentProject = Project.listOfProjects.find((project) => project.title === Project.currentProject)
        content.append(currentProject.view())
        
    }

    function addItem(item) {
        const currentProject = Project.listOfProjects.find((project) => project.title === Project.currentProject)
        currentProject.items.push(item)

    }

    function initialiseItemForm(){

        const itemForm = document.getElementById("form")
        itemForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(itemForm)
            const title = formData.get('title')
            const description = formData.get('description')
            const dueDate = formData.get('dueDate')
            const priority = formData.get('priority')
            const item = new Item(title, description, dueDate, priority, Project.currentProject)
            addItem(item)
            // const currentProject = Project.listOfProjects.find((project) => project.title === Project.currentProject)
            itemForm.reset()
            loadPage()
    

        })}

    function changeHeader () {
        content.innerHTML = ""
        const header = document.createElement('h1')
        header.textContent = Project.currentProject
        content.appendChild(header)

    }

    function checkValidity(checkTitle) {

    return Project.listofProjectTitles.includes(checkTitle)
}

    function initialiseProjectForm() {
        const projectForm = document.getElementById("projectForm")
        const titleInput = document.getElementById("projectTitle")
        
        
    
        titleInput.addEventListener('input', () => {
            const inputtedTitle = titleInput.value.trim()
            
            if (inputtedTitle === "") {
                titleInput.setCustomValidity("") 
            } else if (checkValidity(inputtedTitle)) {
                titleInput.setCustomValidity("A project with this title already exists")
            } else {
                titleInput.setCustomValidity("") 
            }
        })
        
  
    projectForm.addEventListener('submit', (event) => { 
        event.preventDefault()
        const formData = new FormData(projectForm)
        const title = formData.get('projectTitle').trim()
        
       
        if (title === "") {
            titleInput.setCustomValidity("Project title is required")
            titleInput.reportValidity()
            return
        }
        
        if (checkValidity(title)) {
            titleInput.setCustomValidity("A project with this title already exists")
            titleInput.reportValidity()
            return
        }
        
     
        titleInput.setCustomValidity("") 
        const project = new Project(title)
        projectForm.reset()
        loadPage()
    })
}


    function loadSelectProject() {
        const selectForm = document.getElementById('selectProjects')
        selectForm.addEventListener('change', (event) => {
            Project.switchCurrent(selectForm.value)
            console.log(selectForm.value)
            changeHeader()
        })

    }
    function loadPage() {
        changeHeader()
        loadItems()
        loadProjects()
        loadSelectProject()
    }

    function initialise() {
        initialiseProjectForm()
        initialiseItemForm()
      
    }

    return {loadPage,initialise}
}

const page = Page()
page.loadPage()
page.initialise()












// const selectProject = document.getElementById('selectProject')
// selectProject.addEventListener('submit', (event)=>{
//     event.preventDefault()
    
