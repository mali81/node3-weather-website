//console.log('client side javascript2 is loaded')



const login=document.querySelector('#form1')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const errorlog= document.querySelector('#error-log')




login.addEventListener('submit',(e)=>{

    e.preventDefault()

    const uname=username.value
    const ps=password.value



    fetch('/loginpagecheck?username='+uname+'&password='+ps).then((response)=>{

response.json().then((data)=>{

    if(data.error){

        errorlog.textContent=data.error
    }
    else{

        window.location = '/'



    }
    
})
    })
})