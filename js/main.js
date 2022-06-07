document.querySelector('.today').addEventListener('click', getToday)
document.querySelector('.tomorrow').addEventListener('click', getTomorrow)

document.querySelector('h2').innerText = ''

function getToday(){
  const url = `https://mercuryretrogradeapi.com`
  document.querySelector('h2').innerText = ''
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
      if(data.is_retrograde===false){
        document.querySelector('h2').innerText = 'NO'
      }
      else{
        document.querySelector('h2').innerText = 'YES'
      }
     
       })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getTomorrow(){
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    const tomorrow =  year +'-'+ month  +'-'+ day
    console.log(tomorrow)

  const url = `https://mercuryretrogradeapi.com?date=${tomorrow}`
  document.querySelector('h2').innerText = ''
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
      if(data.is_retrograde===false){
        document.querySelector('h2').innerText = 'NO'
      }
      else{
        document.querySelector('h2').innerText = 'YES'
      }
     
       })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}
