import exportNav from '../components/nav.js'

let navbar = document.querySelector("#navbar");
navbar.innerHTML = exportNav();

import exportF1 from '../components/footer1.js'

let footer1 = document.querySelector("#footer_part1")

footer1.innerHTML = exportF1();


import exportF2 from '../components/footer2.js'

let footer2 = document.querySelector("#footer_part2")

footer2.innerHTML = exportF2();

let data = JSON.parse(localStorage.getItem("BestSeller"))

append(data)




function append(data){
    let parent = document.querySelector("#item");
    console.log(data)
    parent.innerHTML="";

    data.forEach((el)=>{
        let div = document.createElement('div');
        div.addEventListener("click",function(){
            detail(el);
        })

        let img = document.createElement('img');
        img.src = el.imgURL;
   
        let name = document.createElement('p');
        name.innerText = el.name;
   
        let price = document.createElement('h3');
        price.innerText = el.price;
   
        let discount = document.createElement('h6');
        if(el.off==undefined){
           discount.innerText="";
        }
        else{
           let text = el.cutoff+" "+el.off;
           discount.innerText = text;
        }
   
        let div2 = document.createElement("div");
        div2.setAttribute("class","logo")
   
        let img2 = document.createElement('img');
        img2.setAttribute("id","logoimg")
        img2.src = "https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
   
        let wish = document.createElement('p');
        wish.innerText = el.wishlist;

        div2.append(img2, wish)
   
      div.append(img,name,price,discount,div2);
   
      parent.append(div)

     
     

    })


}

function detail(data){


    let bag = "";
    for(let i=1;i<data.price.length;i++){
        bag+=data.price[i]
    }
    let x = Number(bag)

    let bag2 = "";
    for(let i=0;i<data.name.length;i++){
        if(data.name[i]==" "){
            break;
        }
        bag2+=data.name[i];
    }

    let obj ={
        title: data.name,
        description:data.description,
        price:Math.floor(x),
        rating:data.ratings,
        image:data.imgURL,
        quantity:1,
        item_code:Math.floor((Math.random() * 999999) + 1),
        brand: bag2,
        country:data.country


    }
console.log(obj)
    localStorage.setItem("Item_Details",JSON.stringify(obj))
    window.location.href="product_detail.html"
}



function filcountry(){

    console.log("hi")

    let query = document.querySelector("#country").value;
    console.log(query)

if(query=="Default"){
    let newdata = data;
    append(newdata)
}
else{
    let newdata = data.filter(function(el){
        if(el.country==query){
            return el;
        }
    })
 append(newdata)

}
}
function showfun(){
    let btn = document.querySelector("#btn")
    btn.innerHTML=`<button onclick="minmax()">OK</button>`   
}


let ar7=0;
function arrived(){
    ar7++;
   if(ar7%2!=0){
    let newdata = data.filter(function(el){
        if(el.arrived=="7"){
            return el;
        }
    })
    append(newdata)
   }
else{
    let newdata=data;
    append(newdata)
}
    
}

let ar15=0;
function arrived2(){
    ar15++;
   if(ar15%2!=0){
    let newdata = data.filter(function(el){
        if(el.arrived=="15"){
            return el;
        }
    })
    append(newdata)
   }
   else{
    let newdata=data;
    append(newdata)
}
}

let ar30=0;
function arrived3(){
    ar30++;
    if(ar30%2!=0){
        let newdata = data.filter(function(el){
            if(el.arrived=="30"){
                return el;
            }
        })
        append(newdata)
    }
    else{
        let newdata=data;
        append(newdata)
    }
}

function funsale(){
let sale = document.querySelector("#sale");

if(sale.checked){
    newdata = data.filter(function(el){
        if(el.sale=="yes"){
            return el;
        }
    })

    append(newdata)
}
else{
    let newdata=data;
    append(newdata)
}

}


function funship(){
    let ship = document.querySelector("#ship");
    
    if(ship.checked){
        let newdata = data.filter(function(el){
            if(el.shipping=="yes"){
                return el;
            }
        })
    
        append(newdata)
    }
    else{
        newdata=data;
        append(newdata)
    }
    
    }


    function minmax(){

    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    console.log(min,max)

    if(min=="" || max==""){
        alert("Enter the correct Min and Max values")
    }
    else{
        let newdata = data.filter(function(el){
            
            let bag = "";
            for(let i=1;i<el.price.length;i++){
                bag+=el.price[i]
            }
            let x = Number(bag);
            if(x>=min && x<=max){
                return el;
            }

        })
        append(newdata)
    }

    }

    function bstmtch(){
        console.log("hi")
      let newdata = data.sort(function(a,b){
       let x = Number(a.wishlist)
       let y = Number(b.wishlist)
        return y-x;
      })

     append(newdata)
    }

    function nwarvl(){
        let newdata = data.sort(function(a,b){
            let x = Number(a.ratings)
            let y = Number(b.ratings)
             return x-y;
           })
     
          append(newdata)


    }

    let prccnt=0;

    function prc(){
        prccnt++;
        let newdata = data.sort(function(a,b){
            let bag = "";
    for(let i=1;i<a.price.length;i++){
        bag+=a.price[i]
    }
    let x = Number(bag)
    let bag2 = "";
    for(let i=1;i<b.price.length;i++){
        bag2+=b.price[i]
    }
    let y = Number(bag2)

            if(prccnt%2!==0){
                return x-y;
            }
            else{
                return y-x;
            }

           })
     
          append(newdata)


    }



//Searchbox Categories Container.
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

//Sign In Icon Dropdown starts here.
let cuser=JSON.parse(localStorage.getItem("c_user"))||[];
if(cuser.length===0){
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
        //Sign In ends here.
    }
}
else{
    //Sign out starts here.
    let dropdown2=document.querySelector(".sign_in");
    dropdown2.addEventListener("mouseover",()=>{
        displaySignOutdiv()
    });
    let displaySignOutdiv=()=>{
        let content=document.querySelector(".signout_dropdown_content")
        content.style.display="block";
    }
    let dropdown2_content=document.querySelector(".signout_dropdown_content");
    dropdown2_content.addEventListener("mouseout",()=>{
        hideSignOutdiv()
    });
    let hideSignOutdiv=()=>{
        let content=document.querySelector(".signout_dropdown_content")
        content.style.display="none"; 
    }

    let span_signin=document.querySelector(".sign_in>p");
    // console.log(cuser);
    span_signin.innerText=`Hello,${cuser[0].name}`;

    //Signout functionality.
    let signout_p=document.querySelector("#sign_out");
    signout_p.addEventListener("click",()=>{
        deleteCUser();
    })
    let deleteCUser=()=>{
        cuser=[];
        localStorage.setItem("c_user",JSON.stringify(cuser));
        localStorage.setItem("cart_data",JSON.stringify([]));
        window.location.reload();
    }
}
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
//Hamburger Dropdown ends here.

//Increment of Count in red-circle.
let cartData=JSON.parse(localStorage.getItem("cart_data"))||[];
let red_circle_cart=document.querySelector(".red_circle");
let total_count=0;
cartData.forEach((elem) => {
    total_count+=elem.quantity;
});
red_circle_cart.innerText=total_count;