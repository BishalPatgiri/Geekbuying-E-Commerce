
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

////////////////navbar script

let searchbox=document.querySelector("#category_dropdown_Sbox");
searchbox.addEventListener("mouseover",()=>{
    displayCategories();
});
let searchbox_container=document.querySelector(".category_container");
let displayCategories=()=>{
    searchbox_container.style.display="flex";
}
searchbox_container.addEventListener("mouseout",()=>{
    hideCategories();
})
let hideCategories=()=>{
    searchbox_container.style.display="none";
}
//Sign In Icon Dropdown starts here.
let dropdown=document.querySelector(".dropdown");
dropdown.addEventListener("mouseover",()=>{
    showContent();
})
let showContent=()=>{
    let content=document.querySelector(".dropdown_content");
    content.style.display="flex";
}
let dropdown_content=document.querySelector(".dropdown_content");
dropdown_content.addEventListener("mouseout",()=>{
    hideContent();
})
let hideContent=()=>{
    let content=document.querySelector(".dropdown_content");
    content.style.display="none";
}
let sign_in=document.querySelector(".sign_in");
sign_in.addEventListener("mouseover",()=>{
    showSignIn();
})
let showSignIn=()=>{
    let signIn_div=document.querySelector(".signin_dropdown_content");
    signIn_div.style.display="block";
}
let signIndiv=document.querySelector(".signin_dropdown_content");
signIndiv.addEventListener("mouseout",()=>{
    hideSignIn();
})
let hideSignIn=()=>{
    let signIn_div=document.querySelector(".signin_dropdown_content");
    signIn_div.style.display="none";
}
//Sign In ends here.

//Sign out starts here.



//Hamburger Dropdown Starts here.

let hamburger_dropdown1=document.querySelector(".first>#warehouse");
hamburger_dropdown1.addEventListener("mouseover",()=>{
    hamburger_dropdown1.style.backgroundColor="#f1f5fe";
    hamburger_dropdown1.style.borderLeft="3px solid #0066ff";
    showSecondDiv();
    appendSubcat1();
});
let hamburger_dropdown2=document.querySelector(".first>#outdoors");
hamburger_dropdown2.addEventListener("mouseover",()=>{
    hamburger_dropdown2.style.backgroundColor="#f1f5fe";
    hamburger_dropdown2.style.borderLeft="3px solid #0066ff";
    hideSecondDiv();
});
let hamburger_dropdown3=document.querySelector(".first>#gardens");
hamburger_dropdown3.addEventListener("mouseover",()=>{
    hamburger_dropdown3.style.backgroundColor="#f1f5fe";
    hamburger_dropdown3.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown4=document.querySelector(".first>#consumer");
hamburger_dropdown4.addEventListener("mouseover",()=>{
    hamburger_dropdown4.style.backgroundColor="#f1f5fe";
    hamburger_dropdown4.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown5=document.querySelector(".first>#TV_Box");
hamburger_dropdown5.addEventListener("mouseover",()=>{
    hamburger_dropdown5.style.backgroundColor="#f1f5fe";
    hamburger_dropdown5.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown6=document.querySelector(".first>#computers");
hamburger_dropdown6.addEventListener("mouseover",()=>{
    hamburger_dropdown6.style.backgroundColor="#f1f5fe";
    hamburger_dropdown6.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown7=document.querySelector(".first>#toys");
hamburger_dropdown7.addEventListener("mouseover",()=>{
    hamburger_dropdown7.style.backgroundColor="#f1f5fe";
    hamburger_dropdown7.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown8=document.querySelector(".first>#phones");
hamburger_dropdown8.addEventListener("mouseover",()=>{
    hamburger_dropdown8.style.backgroundColor="#f1f5fe";
    hamburger_dropdown8.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown9=document.querySelector(".first>#automobiles");
hamburger_dropdown9.addEventListener("mouseover",()=>{
    hamburger_dropdown9.style.backgroundColor="#f1f5fe";
    hamburger_dropdown9.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown10=document.querySelector(".first>#wearables");
hamburger_dropdown10.addEventListener("mouseover",()=>{
    hamburger_dropdown10.style.backgroundColor="#f1f5fe";
    hamburger_dropdown10.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown11=document.querySelector(".first>#security");
hamburger_dropdown11.addEventListener("mouseover",()=>{
    hamburger_dropdown11.style.backgroundColor="#f1f5fe";
    hamburger_dropdown11.style.borderLeft="3px solid #0066ff";
    //showSecondDiv();
});
let hamburger_dropdown12=document.querySelector(".first>#fashion");
hamburger_dropdown12.addEventListener("mouseover",()=>{
    hamburger_dropdown12.style.backgroundColor="#f1f5fe";
    hamburger_dropdown12.style.borderLeft="3px solid #0066ff";
   // showSecondDiv();
});
let showSecondDiv=()=>{
    let second_div=document.querySelector(".second");
    second_div.style.display="flex";
    second_div.style.marginRight="1px";
    second_div.style.marginBottom="0";
}
hamburger_dropdown1.addEventListener("mouseout",()=>{
    hamburger_dropdown1.style.backgroundColor="#ffffff";
    hamburger_dropdown1.style.borderLeft="none";
});
hamburger_dropdown2.addEventListener("mouseout",()=>{
    hamburger_dropdown2.style.backgroundColor="#ffffff";
    hamburger_dropdown2.style.borderLeft="none";
});
hamburger_dropdown3.addEventListener("mouseout",()=>{
    hamburger_dropdown3.style.backgroundColor="#ffffff";
    hamburger_dropdown3.style.borderLeft="none";
});
hamburger_dropdown4.addEventListener("mouseout",()=>{
    hamburger_dropdown4.style.backgroundColor="#ffffff";
    hamburger_dropdown4.style.borderLeft="none";
});
hamburger_dropdown5.addEventListener("mouseout",()=>{
    hamburger_dropdown5.style.backgroundColor="#ffffff";
    hamburger_dropdown5.style.borderLeft="none";
});
hamburger_dropdown6.addEventListener("mouseout",()=>{
    hamburger_dropdown6.style.backgroundColor="#ffffff";
    hamburger_dropdown6.style.borderLeft="none";
});
hamburger_dropdown7.addEventListener("mouseout",()=>{
    hamburger_dropdown7.style.backgroundColor="#ffffff";
    hamburger_dropdown7.style.borderLeft="none";
});
hamburger_dropdown8.addEventListener("mouseout",()=>{
    hamburger_dropdown8.style.backgroundColor="#ffffff";
    hamburger_dropdown8.style.borderLeft="none";
});
hamburger_dropdown9.addEventListener("mouseout",()=>{
    hamburger_dropdown9.style.backgroundColor="#ffffff";
    hamburger_dropdown9.style.borderLeft="none";
});
hamburger_dropdown10.addEventListener("mouseout",()=>{
    hamburger_dropdown10.style.backgroundColor="#ffffff";
    hamburger_dropdown10.style.borderLeft="none";
});
hamburger_dropdown11.addEventListener("mouseout",()=>{
    hamburger_dropdown11.style.backgroundColor="#ffffff";
    hamburger_dropdown11.style.borderLeft="none";
});
hamburger_dropdown12.addEventListener("mouseout",()=>{
    hamburger_dropdown12.style.backgroundColor="#ffffff";
    hamburger_dropdown12.style.borderLeft="none";
});
let hamburger=document.querySelector(".hamburger_dropdown");
hamburger.addEventListener("mouseover",()=>{
    hideSecondDiv();
});
let hideSecondDiv=()=>{
    let second_div=document.querySelector(".second");
    second_div.style.display="none";
}
let appendSubcat1=()=>{
    let container=document.querySelector(".second");
    container.innerHTML=null;
    let subcategory=document.createElement("div");
    subcategory.setAttribute("id","sub_cat_dropdown");
    subcategory.style.width="200px";
    let first_div=document.createElement("div");
    let h1=document.createElement("h3");
    h1.innerText="EU Warehouse";
    let p1=document.createElement("p");
    p1.innerText="EU Deals";
    first_div.append(h1,p1);
    first_div.style.marginBottom="20px";
    let second_div=document.createElement("div");
    let h2=document.createElement("h3");
    h2.innerText="DE Warehouse";
    let p2=document.createElement("p");
    p2.innerText="DE Deals";
    second_div.append(h2,p2);
    second_div.style.marginBottom="20px";
    let third_div=document.createElement("div");
    let h3=document.createElement("h3");
    h3.innerText="PL Warehouse";
    let p3=document.createElement("p");
    p3.innerText="PL Deals";
    third_div.append(h3,p3);
    third_div.style.marginBottom="20px";
    let fourth_div=document.createElement("div");
    let h4=document.createElement("h3");
    h4.innerText="ES Warehouse";
    let p4=document.createElement("p");
    p4.innerText="ES Deals";
    fourth_div.append(h4,p4);
    fourth_div.style.marginBottom="20px";
    let fifth_div=document.createElement("div");
    let h5=document.createElement("h3");
    h5.innerText="IT Warehouse";
    let p5=document.createElement("p");
    p5.innerText="IT Deals";
    fifth_div.append(h5,p5);
    fifth_div.style.marginBottom="20px";
    let sixth_div=document.createElement("div");
    let h6=document.createElement("h3");
    h6.innerText="CZ Warehouse";
    sixth_div.append(h6);
    sixth_div.style.marginBottom="20px";
    let seventh_div=document.createElement("div");
    let h7=document.createElement("h3");
    h7.innerText="EU-3 Warehouse";
    seventh_div.append(h7);
    seventh_div.style.marginBottom="20px";
    let eighth_div=document.createElement("div");
    let h8=document.createElement("h3");
    h8.innerText="UK Warehouse";
    let p8=document.createElement("p");
    p8.innerText="UK Deals";
    eighth_div.append(h8,p8);
    eighth_div.style.marginBottom="20px";
    subcategory.append(first_div,second_div,third_div,fourth_div,fifth_div,sixth_div,seventh_div,eighth_div);
    subcategory.style.fontFamily="Arial,Helvetica,sans-serif";
    let subcategory2=document.createElement("div");
    subcategory2.setAttribute("id","sub_cat_dropdown");
    subcategory2.style.width="200px";
    let ninth_div=document.createElement("div");
    let h9=document.createElement("h3");
    h9.innerText="US Warehouse";
    let p9=document.createElement("p");
    p9.innerText="US Deals";
    ninth_div.append(h9,p9);
    ninth_div.style.marginBottom="20px";
    subcategory2.append(ninth_div);
    let dropdown_div=document.createElement("div");
    dropdown_div.setAttribute("id","image_dropdown");
    let dropdown_img=document.createElement("img");
    dropdown_img.src="./images/warehouse_img.png";
    dropdown_div.style.margin="60px 0px 0px 10px";
    dropdown_div.append(dropdown_img);
    container.append(subcategory,subcategory2,dropdown_div);
};