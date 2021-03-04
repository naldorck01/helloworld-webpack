import './assets/css/app.css'
import './assets/scss/components.scss'
import covid from './assets/img/mascara-facial.png'

const getDataFromApi = async () => {
  try {
    let res = await fetch('https://api.covid19api.com/country/colombia/status/confirmed?from=2021-02-01T00:00:00Z&to=2021-03-01T00:00:00Z')
    res = await res.json()
    return res;
  } catch(error) {
    return error
  }  
}

document.addEventListener('DOMContentLoaded', async () => {
  const res = await getDataFromApi()
  var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let output = `
    <section>
      <img src="${covid}" alt="Covid" title="Covid" width="150"/>
    </section>
  `
  output += '<ul>'

  res.forEach(data => { 
    output += `<li><strong>Date</strong>: ${new Date(data.Date).toLocaleDateString('en-US', dateOptions)} - <strong>Cases:</strong> ${data.Cases}</li>`
  })
  
  output += '</ul>'

  document.querySelector('.app').innerHTML = output
})
