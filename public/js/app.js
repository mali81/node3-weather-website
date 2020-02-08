console.log('client side javascript is loaded')



const login=document.querySelector('#form1')
const weatherForm = document.querySelector('#form2')
const search=document.querySelector('#location')
const messageone= document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()

    const location=search.value
    messageone.textContent='Loading....'
messagetwo.textContent=''

// if (location ==='cairo')
// {

//    return window.location = '/video?address='+location


// }

    fetch('/weather?address='+encodeURIComponent(location)).then((response)=>{

response.json().then((data)=>{

    if(data.error){

        messageone.textContent=data.error
    }
    else{
messageone.textContent=data.location

messagetwo.textContent=data.forecastdata



    }
    

})

})
    


})


    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: 'same-origin', // include, *same-origin, omit
    //       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'no-referrer', // no-referrer, *client
    //       body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return await response.json(); // parses JSON response into native JavaScript objects
    //   }
      
      
    //   const celldata ={
    //   homeMobileCountryCode: 427,
    //     homeMobileNetworkCode: 02,
    //     radioType: 'lte',
    //     carrier: 'Vodafone QA',
    //     considerIp: 'true',
    //   cellTowers: [
    //       {
    //         cellId: 330,
    //         locationAreaCode: 161,
    //         mobileCountryCode: 427,
    //         mobileNetworkCode: 02,
    //         age: 10,
    //         signalStrength: -60,
    //         timingAdvance: 15
    //       }
    //     ]
    //   }
      
      
    //   postData('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCjgSW-zVx39tXSqpEoiLHeLWf-vO7BEHw', celldata)
    //     .then((data) => {
    //       console.log(data); // JSON data parsed by `response.json()` call
    //     });
      


    
