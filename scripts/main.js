let form = document.getElementById("form")
let data= JSON.parse(localStorage.getItem("user"))
function submit(){
    event.preventDefault()

    let obj={

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        wallet: document.getElementById("amount").value,
    
        // console.log(Name,Email,Address,Amount)
    }
   
    localStorage.setItem("user",JSON.stringify(obj))
    window.location.reload()
}

