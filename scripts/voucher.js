
    let addmoney= document.getElementById("wallet_balance") 
    console.log(addmoney)
    let udata= JSON.parse(localStorage.getItem("user"))
    addmoney.innerText=udata.wallet

    // console.log(data)
    // console.log(addmoney)
    



const url=` https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url)
.then(function(res){
    return res.json(url)
}).then(function(res){
    // console.log(res[0].vouchers)
    return append(res[0].vouchers)
}).catch(function(err){
    console.log(err)

})
var arr=JSON.parse(localStorage.getItem("purchase")) || []
function append(data){
    console.log(data)
    data.forEach((elem) => {
        let div=document.querySelector("#voucher_list")
        
        let voucher_list= document.createElement("div")
        voucher_list.setAttribute("class","voucher")

        let name= document.createElement("p")
        name.innerText=elem.name

        let image= document.createElement("img")
        image.src= elem.image

        let price= document.createElement("h3")
        price.innerText=elem.price

        let buy=document.createElement("button")
        buy.innerText="Buy"
        buy.setAttribute("class","buy_voucher")
        buy.addEventListener("click",function(){
            // arr.push(elem)
            if(addmoney.innerText<elem.price){
                alert("Sorry! insufficient balance")
            }
            else{
                addmoney.innerText=addmoney.innerText-elem.price
                console.log(addmoney.innerText)
                // let udata= JSON.parse(localStorage.getItem("user"))
                udata.wallet=Number(addmoney.innerText)
                console.log(udata.wallet)
                localStorage.setItem("user",JSON.stringify(udata))
                alert("payment Successfull")
                arr.push(elem)
                localStorage.setItem("purchase",JSON.stringify(arr))
                

                
            }
            // console.log(elem)
            // voucherappend(elem)
            // window.location.href="purchase.html"


        })

        // console.log(name,image,price,buy)
        voucher_list.append(image,name,price,buy)
        div.append(voucher_list)

    });
}

// function voucherappend(data){
// console.log(data)
// }