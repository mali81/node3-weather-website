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


   
      


    
