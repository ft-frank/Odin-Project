
async function getWeather(location) {

    // API SAFE because it is free
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=APCTF2VJX6KFJDBZFJBQHLXYW`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        addDetail('description', data.description)
        addDetail('tempmax', data.days[0].tempmax)
        addDetail('tempmin', data.days[0].tempmin)
    }
    catch(error) {
        console.error('An error occurred:', error.message)
        if (error.message.includes('status: 400')) {
            console.log('Bad Request - invalid location?')
            invalid()


    
        }

    }
}

function invalid() {
    const weatherDetails = document.getElementById('weatherDetails')
    weatherDetails.innerHTML = ""
    weatherDetails.textContent = "invalid location bruh"
}
const locationForm = document.getElementById("locationForm")
locationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(locationForm)
    const location = formData.get('location')
    const weatherDetails = document.getElementById('weatherDetails')
    weatherDetails.innerHTML = ""
    getWeather(location)

})

function addDetail(stat, statistic) {
    
    const statDetail = document.createElement('div')
    statDetail.textContent = `{${stat} : ${statistic}`
    weatherDetails.append(statDetail)

}