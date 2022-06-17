
///////////////////input_testing
// let obj={
//     title: "SCULPFUN 30L/Min 200-240V Air Pump Compressor for Laser Engraver, Adjustable Speed Low Noise Low Vibration - EU Plug",
//     brand:"SCULPFUN",
//     rating: 5.6,
//     price:7085.55,
//     quantity:1,
//     image:"https://img.gkbcdn.com/s3/d/202205/SCULPFUN-30L-Min-Air-Pump-Compressor-EU-Plug-501434-4.jpg",
//     item_code:152645,
//     country:"USA",
// }

// localStorage.setItem("Item_Details",JSON.stringify(obj))


/////////////////////

import {description,review,q_a} from "./product_detail_database.js"

import exportNav from '../components/nav.js';

import exportF1 from '../components/footer1.js';
import exportF2 from '../components/footer2.js';

let f1=document.querySelector("#footer_part1");
f1.innerHTML=exportF1();

let f2=document.querySelector("#footer_part2");
f2.innerHTML=exportF2();

document.getElementById("navbar").innerHTML=exportNav();

let input=JSON.parse(localStorage.getItem("Item_Details"))||{};
console.log(input)

let im=document.createElement("img")
im.src=input.image
document.getElementById("image").append(im)
document.getElementById("title").innerText=input.title
document.getElementById("rating").innerText=5
document.getElementById("brand").innerText=`Brand: ${input.brand}`
document.getElementById("code").innerText=`Item Code: ${input.item_code}`
document.getElementById("price").innerText=`$${input.price}`
document.getElementById("number").innerText=`${input.quantity}`
document.getElementById("from_country").innerText=`${input.country}`
input.rating=5


document.getElementById("btn1").addEventListener("click",go_to_cart)
document.getElementById("btn2").addEventListener("click",go_to_cart)

function go_to_cart(){
    let array=JSON.parse(localStorage.getItem("cart_data"))||[];
    array.push(input)
    localStorage.setItem("cart_data",JSON.stringify(array))
    window.location.href="cart.html"
}

///////////////////////

let i=1;

document.getElementById("plus").addEventListener("click",increse)

function increse(){
i++;
document.getElementById("number").innerText=`${i}`
input.quantity=i;
}

document.getElementById("minus").addEventListener("click",decrese)

function decrese(){
i--;
if(i<0){
    i=0;
}
document.getElementById("number").innerText=`${i}`
input.quantity=i;
}

///////////////////////

document.getElementById("descrip").addEventListener("click",show_des)

function show_des(){
document.getElementById("rev").style.color="black"
document.getElementById("rev").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("qa").style.color="black"
document.getElementById("qa").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("descrip").style.color="white"
document.getElementById("descrip").style.backgroundColor="rgb(20, 74, 237)"

document.getElementById("below_content").innerHTML=""
document.getElementById("below_content").innerHTML=description()
}



document.getElementById("rev").addEventListener("click",show_rev)

function show_rev(){
document.getElementById("descrip").style.color="black"
document.getElementById("descrip").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("qa").style.color="black"
document.getElementById("qa").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("rev").style.color="white"
document.getElementById("rev").style.backgroundColor="rgb(20, 74, 237)"

document.getElementById("below_content").innerHTML=""
document.getElementById("below_content").innerHTML=review()
}



document.getElementById("qa").addEventListener("click",show_qa)

function show_qa(){
document.getElementById("descrip").style.color="black"
document.getElementById("descrip").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("qa").style.color="white"
document.getElementById("qa").style.backgroundColor="rgb(20, 74, 237)"

document.getElementById("rev").style.color="black"
document.getElementById("rev").style.backgroundColor="rgb(213, 209, 209)"

document.getElementById("below_content").innerHTML=""
document.getElementById("below_content").innerHTML=q_a()
}

//////////////