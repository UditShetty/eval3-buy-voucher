var arr=JSON.parse(localStorage.getItem("purchase"))
console.log(arr)
append(arr)

function append(data){
    // console.log(data)
    data.forEach((elem) => {
        let div=document.querySelector(".voucher")
        
        let voucher_list= document.createElement("div")
        voucher_list.setAttribute("id","voucher_list")

        let name= document.createElement("p")
        name.innerText=elem.name

        let image= document.createElement("img")
        image.src= elem.image

        let price= document.createElement("h3")
        price.innerText=elem.price


        // console.log(name,image,price,buy)
        voucher_list.append(image,name,price)
        div.append(voucher_list)

    });
}

