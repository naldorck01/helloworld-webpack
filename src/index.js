import '@css/app.css'
import '@scss/components.scss'
import covid from '@img/mascara-facial.png'

const API = process.env.API

const getDataFromApi = async () => {
  try {
    let res = await fetch(`${API}country/colombia/status/confirmed?from=2021-02-01T00:00:00Z&to=2021-02-15T00:00:00Z`)
    res = await res.json()
    return res;
  } catch(error) {
    return error
  }  
}

document.addEventListener('DOMContentLoaded', async () => {
  let output = `
    <section class="img__wrapper--center">
      <img src="${covid}" alt="Covid" title="Covid" width="150"/>
    </section>
  `
  try {
    const res = await getDataFromApi()
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }  
    output += '<ul>'

    res.forEach(data => { 
      output += `<li><strong>Date</strong>: ${new Date(data.Date).toLocaleDateString('en-US', dateOptions)} - <strong>Cases:</strong> ${data.Cases}</li>`
    })
    
    output += '</ul>'
    document.querySelector('.app').innerHTML = output
  } catch(error) {
    document.querySelector('.app').innerHTML = error
  }
  
})
