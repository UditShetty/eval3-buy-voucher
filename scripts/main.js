let form = document.getElementById("form")
let data= JSON.parse(localStorage.getItem("user"))
// let arr1= JSON.parse(localStorage.getItem("wallet")) || []
function submit(){
event.preventDefault()

    let obj={

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        wallet: document.getElementById("amount").value,
        
    }
    // console.log(obj)
    // arr1.push(obj.wallet)
    // console.log(arr1)
    // let wallet= localStorage.setItem("wallet",JSON.stringify(arr1))
//    let amount= document.getElementById("amount")
//    amount.innerText=obj.wallet
//    console.log(amount)
    localStorage.setItem("user",JSON.stringify(obj))
    window.location.reload()
}

