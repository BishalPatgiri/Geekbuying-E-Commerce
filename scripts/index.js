


let caroselData=[
    'https://img.gkbcdn.com/bn/2206/740x670-62a890272b40c929fc3f02e7._p1_.jpg',
    'https://img.gkbcdn.com/bn/2206/740x670-62a8904e2b40c929fc3f02e8._p1_.jpg',
    'https://img.gkbcdn.com/bn/2206/740x670-62a8912a2b40c929fc3f02eb._p1_.jpg',
    'https://img.gkbcdn.com/bn/2206/740x670-62a8906f2b40c929fc3f02e9._p1_.jpg',
    'https://img.gkbcdn.com/bn/2206/740x670-62a890bf2b40c929fc3f02ea._p1_.jpg',
    'https://img.gkbcdn.com/bn/2206/740x670-62a9507f2b40c91d48a175b2._p1_.jpg'
]

let carosel=document.querySelector(".carosel_1");
function appendCarosel(data,container){
    data.forEach(function(elem){
        let box=document.querySelector(".carousel_cell");
        let img=document.querySelector(".carosel_1");
        img.src=elem;
        box.append(img);
        document.querySelector(".main_carousel").append(box)
    })
}
appendCarosel(caroselData,carosel)



let dealsOfDay=[
    {
        image:'https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg',
        disc:'21% OFF',
        price:'₹2656.58',
        offPrice:'₹3381.32'
    },
    {
        image:'https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg',
        disc:'43% OFF',
        price:'₹691.73',
        offPrice:'₹1207.10'
    },
    {
        image:'https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg',
        disc:'19% OFF',
        price:'₹4589.22',
        offPrice:'₹5636.07'
    },
    {
        image:'https://img.gkbcdn.com/p/2019-02-20/stmagic-spt31-512g-mini-portable-m-2-ssd-gray-1571995742585._w280_p1_.jpg',
        disc:'18% OFF',
        price:'₹6038.70',
        offPrice:'₹7407.66'
    }
]
let appendDealsofDay=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="brand_item";
    let img=document.createElement("img");
    img.src=elem.image;
    img.className="proImg";
    let disc=document.createElement("span");
    disc.className="proDis1";
    disc.innerText=elem.disc;
    let br=document.createElement("br");
    
    let price=document.createElement("span");
    price.innerText=elem.price;
    price.className="price1";
    let br1=document.createElement("br");
    let ofPrice=document.createElement("del");
    ofPrice.innerText=elem.offPrice;
    ofPrice.className="mrp1";
    box.append(img,disc,br,price,br1,ofPrice);
    container.append(box)
    
    })
}
let container=document.querySelector("#dealDay");
appendDealsofDay(dealsOfDay,container);

let featuredProducts=[
    {
        image:'https://img.gkbcdn.com/p/2021-07-20/e8d982f4f76e4c109aff2227fedaaa18-461408-1._w280_p1_.jpg',
        name:'One Netbook',
        price:'₹84552.33',
        offPrice:'₹110320.91'
    },
    {
        image:'https://img.gkbcdn.com/p/2020-05-09/Razer-Viper-Mini-RGB-Gaming-Mouse-61G-Ultra-Light-Black-903961-._w280_p1_.jpg',
        name:'Razer Viper Mini RGB',
        price:'₹3059.21',
        offPrice:'₹3220.27'
    },
    {
        image:'https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg',
        name:'Tronsmart Element T6',
        price:'₹4830.80',
        offPrice:'₹6441.34'
    },
    {
        image:'https://img.gkbcdn.com/p/2017-08-11/xiaomi-yeelight-motion-sensor-night-light-white-1571990951696._w280_p1_.jpg',
        name:'Xiaomi Yeelight',
        price:'₹1529.20',
        offPrice:'₹2415.00'
    }
]
let appendFeatures=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="brand_item";
    let img=document.createElement("img");
    img.src=elem.image;
    img.className="proImg";
    let br=document.createElement("br");
    let name=document.createElement("span");
    name.innerText=elem.name;
    name.className="name1";
    let price=document.createElement("span");
    price.innerText=elem.price;
    price.className="price1";
    let br1=document.createElement("br");
    let ofPrice=document.createElement("del");
    ofPrice.innerText=elem.offPrice;
    ofPrice.className="mrp1";
    box.append(img,name,br,price,br1,ofPrice);
    container.append(box)
    
    })
}
container=document.querySelector("#featured");
appendFeatures(featuredProducts,container);

let newForYou=[
    {
        img:'https://img.gkbcdn.com/bn/2206/276x348-62a6e6f12b40c917a8566ce6._p1_.jpg',
        name:'',
        price:''
    },
    {
        img:'https://img.gkbcdn.com/p/2022-06-07/C127-RC-Helicopter-2-4G-4CH-6-Axis-Gyro-720P-Camera-with-Remote-Contro-501582-0._w280_p1_.jpg',
        name:'C127 RC Helicopter 2.4G 4CH 6-Axis Gyro 720P Camera Optical',
        price:'₹9662.41'
    },
    {
        img:'https://img.gkbcdn.com/p/2022-05-27/xiaomi-mi-band-7-black-17e243-1653647543366._w280_p1_.jpg',
        name:'XIAOMI Mi Band 7 Smart Bracelet Smart Wristband Watch AMOLED',
        price:'₹4589.22'
    },
    {
        img:'https://img.gkbcdn.com/p/2022-05-27/MEROCA-WR15-WR25-Cushion-mounting-bracket-501368-0._w280_p1_.jpg',
        name:'Cushion Mounting Bracket for MEROCA WR15 WR25 Smart Bike',
        price:'₹240.78'
    }
]
let appendNewForYou=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="for_you_item";
    let img=document.createElement("img");
    img.src=elem.img;
    let price=document.createElement("span");
    price.className="for_you_price";
    price.innerText=elem.price;
    let br=document.createElement("br");
    let br1=document.createElement("br");
    let name=document.createElement("a");
    let box1=document.createElement("div");
    box1.className="for_you_item_details";
    name.className="for_you_Name";
    name.innerText=elem.name;
    box1.append(name,br,price)
    box.append(img,br1,box1);
    container.append(box)
    })
}
container=document.querySelector("#new_for_you_product");
appendNewForYou(newForYou,container);

let trendingProduct=[
    {
        img:'https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg',
        name:'Smart Home',
        desc:'Smart cleaning robots and vacuums, keep floors constantly tidy with very little effort on your part'
    },
    {
        img:'https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg',
        name:'E-transport',
        desc:"My ride. My speed. My way. I'm keeping up with myself."
    },
    {
        img:'https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg',
        name:'3D Printers',
        desc:'3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing'
    }
]

let appendTrending=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="trending_item";
    let img=document.createElement("img");
    img.src=elem.img;
    let disc=document.createElement("span");
    disc.className="trendingDesc";
    disc.innerText=elem.desc;
    let br=document.createElement("br");
    let br1=document.createElement("br");
    let name=document.createElement("a");
    name.className="trendingName";
    name.innerText=elem.name;
    box.append(img,br1,name,br,disc);
    container.append(box)
    })
}
container=document.querySelector("#trending_product");
appendTrending(trendingProduct,container);


let bestSeller=[
    {
        img:'https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132869322._w280_p1_.jpg',
        disc:'25% OFF',
        title:'Tronsmart Element T6 Plus Portable Bluetooth 5.0 Speaker with 40W Max',
        rating:'211',
        price:'₹4830.80',
        offPrice:'₹6441.34'
    },
    {
        img:'https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg',
        disc:'34% OFF',
        title:'Tronsmart Element Mega SoundPulse™ Bluetooth 5.0 Speaker',
        rating:'328',
        price:'₹3542.37',
        offPrice:'₹5394.49'
    },
    {
        img:'https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg',
        disc:'19% OFF',
        title:'Tronsmart Force SoundPulse™ 40W Bluetooth 5.0 Speaker IPX7 Water',
        rating:' 219',
        price:'₹4589.22',
        offPrice:'₹5636.07'
    },
    {
        img:'https://img.gkbcdn.com/p/2020-10-12/P301-ANC-Bluetooth-5-0-TWS-Earbuds-426451-0._w280_p1_.jpg',
        disc:'26% OFF',
        title:'P301 ANC Bluetooth 5.0 TWS Earbuds Touch Control Active Noise',
        rating:' 23',
        price:'₹2978.69',
        offPrice:'₹4025.53'
    }
]
let appendBestSeller=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="brand_item";
    let img=document.createElement("img");
    img.src=elem.img;
    img.className="proImg";
    let disc=document.createElement("span");
    disc.className="proDis";
    disc.innerText=elem.disc;
    let br=document.createElement("br");
    let name=document.createElement("a");
    name.className="proName";
    name.innerText=elem.title;
    let br2=document.createElement("br");
    let ratingBox=document.createElement("div");
    let rating=document.createElement("span");
    rating.className='star';
    rating.innerHTML=`<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`;
    let ratingCount=document.createElement("span");
    ratingCount.innerText=elem.rating;
    ratingCount.className="ratingCount";
    ratingBox.append(rating,ratingCount)
    let subBox=document.createElement("div");
    let price=document.createElement("span");
    price.innerText=elem.price;
    price.className="price";
    let br1=document.createElement("br");
    let ofPrice=document.createElement("del");
    ofPrice.innerText=elem.offPrice;
    ofPrice.className="mrp";
    subBox.append(price,br1,ofPrice);
    box.append(img,disc,br,name,br2,ratingBox,subBox);
    container.append(box)
    
    })
}
container=document.querySelector("#best_seller_product");
appendBestSeller(bestSeller,container)

// slideshow image function---------
let slideshowImage=['https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg',
'https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg',
'https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg'
]
let slideshow=document.querySelector("#lazy_img");
slideshow.src=slideshowImage[0];
let i=0;
let id=setInterval(function(){
    if(i==slideshowImage.length)
    {
        i=0;
    }
    slideshow.src=slideshowImage[i];
    i++;
},3000);

// Product data----------....>>>>

let brand_products_1=[
    {
        img:"https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg",
        disc:"",
        title:'',
        price:'',
        offPrice:''
    },
    {
        img:'https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461369-0._w280_p1_.jpg',
        disc:'72% OFF',
        title:'JIMMY PowerWash HW8 Cordless Wet Dry Smart',
        price:'₹11272.95',
        offPrice:"₹40262.59"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-07-16/JIMMY-HW8-Pro-Cordless-Wireless-Wet-Dry-Smart-Vacuum-Cleaner-461370-0._w280_p1_.jpg',
        disc:'48% OFF',
        title:'JIMMY PowerWash HW8 Pro Cordless Wet Dry Smart',
        price:'₹16909.82',
        offPrice:"₹32209.91"
    },
    {
        img:'https://img.gkbcdn.com/p/2020-04-09/JIMMY-JV35-Anti-mite-Vacuum-Cleaner-Gray-899874-._w280_p1_.jpg',
        disc:'29% OFF',
        title:'JIMMY JV35 Handheld Anti-mite Vacuum Cleaner High',
        price:'₹9662.41',
        offPrice:"₹13688.75"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-03-02/JIMMY-H9-Pro-Cordless-Handheld-Vacuum-Cleaner-455418-0._w280_p1_.jpg',
        disc:'33% OFF',
        title:'JIMMY H9 Pro Flexible Smart Handheld Cordless',
        price:'₹32209.91',
        offPrice:"₹48314.47"
    }
]


let brand_products_2=[
    {
        img:'https://img.gkbcdn.com/bb/tronsmart-20210123120544453._p1_.jpg',
        disc:"",
        title:'',
        price:'',
        offPrice:''
    },
    {
        img:'https://img.gkbcdn.com/p/2020-10-14/tronsmart-element-mega-pro-60w-bluetooth-5-0-speaker-1602637495048._w280_p1_.jpg',
        disc:'14% OFF',
        title:'Tronsmart Element Mega Pro 60W Bluetooth 5.0',
        price:'₹6199.76',
        offPrice:"₹7246.61"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-10-12/tronsmart-splash-1-led-15w-bluetooth-speaker-1634038411944._w280_p1_.jpg',
        disc:'33% OFF',
        title:'Tronsmart Splash 1 LED 15W Bluetooth Speaker',
        price:'₹1609.73',
        offPrice:"₹2415.00"
    },
    {
        img:'https://img.gkbcdn.com/p/2020-12-09/Tronsmart-Apollo-Q10-ANC-Bluetooth-Headphones-Black-426941-0._w280_p1_.jpg',
        disc:'37% OFF',
        title:'Tronsmart Apollo Q10 ANC Active Noise Cancelling',
        price:'₹3059.21',
        offPrice:"₹4830.80"
    },
    {
        img:'https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg',
        disc:'29% OFF',
        title:'Tronsmart T6 Plus Upgraded Edition Bluetooth 5.0 40W',
        price:'₹4025.53',
        offPrice:"₹6441.34"
    }
]

let brand_products_3=[
    {
        img:'https://img.gkbcdn.com/bb/eleglide-20220531151324673._p1_.jpg',
        disc:"",
        title:'',
        price:'',
        offPrice:''
    },
    {
        img:'https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg',
        disc:'21% OFF',
        title:'ELEGLIDE M1 PLUS Electric Mountain Bike',
        price:'₹65103.50',
        offPrice:"₹85362.43"
    },
    {
        img:'https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-upgraded-version-electric-bike-7-5ah-250w-motor-dark-blue-b23cd2-1650765670228._w280_p1_.jpg',
        disc:'39% OFF',
        title:'ELEGLIDE M1 Electric Bike Upgraded Version 27.5 inch',
        price:'₹54957.13',
        offPrice:"₹88577.87"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-10-28/36v-10-4ah-removable-battery-for-eleglide-f1-electric-bike-1635406527480._w280_p1_.jpg',
        disc:'21% OFF',
        title:'36V 10.4Ah Removable Battery For ELEGLIDE F1',
        price:'₹14047.90',
        offPrice:"₹17715.09"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-10-28/36v-7-5ah-removable-battery-for-eleglide-m1-electric-bike-1635405543569._w280_p1_.jpg',
        disc:'2% OFF',
        title:'36V 7.5Ah Removable Battery For ELEGLIDE M1',
        price:'₹14926.45',
        offPrice:"₹15299.29"
    }
]
let brand_products_4=[
    {
        img:'https://img.gkbcdn.com/bb/roborock-20211111211035580._p1_.jpg',
        disc:"",
        title:'',
        price:'',
        offPrice:''
    },
    {
        img:'https://img.gkbcdn.com/p/2022-03-14/Roborock-Q7-Max--Robot-Vacuum-Cleaner-497781-1._w280_p1_.jpg',
        disc:'30% OFF',
        title:'Roborock Q7 Max+ Robot Vacuum Cleaner with Auto-',
        price:'₹44288.93',
        offPrice:"₹64424.66"
    },
    {
        img:'https://img.gkbcdn.com/p/2021-03-01/roborock-s7-robot-vacuum-cleaner-2500pa-powerful-suction-1614568841892._w280_p1_.jpg',
        disc:'34% OFF',
        title:'Roborock S7 Robot Vacuum Cleaner with Sonic Mopping',
        price:'₹36236.25',
        offPrice:"₹56367.95"
    },
    {
        img:'https://img.gkbcdn.com/p/2020-05-29/roborock-s5-max-robot-vacuum-cleaner-international-version-black-1590736089662._w280_p1_.jpg',
        disc:'33% OFF',
        title:'Roborock S5 Max Robot Vacuum Cleaner Virtual Wall',
        price:'₹32209.91',
        offPrice:"₹44288.93"
    },
    {
        img:'https://img.gkbcdn.com/p/2018-06-28/vacuum-cleaner-right-wheel-1574132857748._w280_p1_.jpg',
        disc:'41% OFF',
        title:'Right Wheel for Xiaomi Vacuum Cleaner 2 - Black',
        price:'₹2173.42',
        offPrice:"₹3703.43"
    }
]
let append=(data,container)=>{
    data.forEach(function(elem){
    let box=document.createElement("div");
    box.className="brand_item";
    let img=document.createElement("img");
    img.src=elem.img;
    img.className="proImg";
    let disc=document.createElement("span");
    disc.className="proDis";
    disc.innerText=elem.disc;
    let br=document.createElement("br");
    let name=document.createElement("a");
    name.className="proName";
    name.innerText=elem.title;
    let subBox=document.createElement("div");
    subBox.className="brand_price";
    let price=document.createElement("span");
    price.innerText=elem.price;
    price.className="price";
    let ofPrice=document.createElement("del");
    
    ofPrice.innerText=elem.offPrice;
    ofPrice.className="mrp";
    subBox.append(price,ofPrice);
    box.append(img,disc,br,name,subBox);
    container.append(box)
    
    })
}
container=document.querySelector(".brand_products");
append(brand_products_1,container)
container=document.querySelector(".brand_products1");
append(brand_products_2,container)
container=document.querySelector(".brand_products2");
append(brand_products_3,container)
container=document.querySelector(".brand_products3");
append(brand_products_4,container)

// Recommeded Products----------->
let recommendedProducts=[
    'https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1574132580925._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-07-07/tronsmart-force-pro-1625627479845._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-02-23/BMAX-I11-4G-LTE-Tablet-PC-10-4--UNISOC-T618-8GB-128GB-497149-2._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-04-20/ALLDOCUBE-iPlay-40-Pro-UNISOC-Tiger-T618-LTE-Tablet-with-Keyboard-499808-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-12-04/xiaomi-roidmi-eve-plus-robot-vacuum-cleaner-with-dust-collector-1607048661057._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-12-18/Tronsmart-Element-Force2-SoundPulse--Bluetooth-Speaker-427034-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1571991425316._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-06-02/Tronsmart-Studio-30W-Bluetooth-Speaker-459902-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-10-12/tronsmart-splash-1-led-15w-bluetooth-speaker-1634038411944._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-04-11/Kecag-KC-808-Wall-Mountable-CD-Player-Black-499401-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-06-02/Tronsmart-Studio-30W-Bluetooth-Speaker-459902-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_.jpg',
    'https://img.gkbcdn.com/p/2018-10-29/xiaomi-ai-wireless-bluetooth-speaker-portable-white-1571985307121._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-11-12/tronsmart-element-t6-mini-bluetooth-5-0-speaker---red-1574132783060._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-04-08/Kecag-KC-806-Desktop-CD-Player-with-LED-Display-Blue-499304-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-04-11/Kecag-KC-808-Wall-Mountable-CD-Player-Black-499401-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-03-21/KIMIUP-101-Desktop-Wireless-Charging-Bluetooth-Speaker-LED-Alarm-Clock-498079-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-11-02/Wireless-Bluetooth-Speaker-USB-FM-3W-Bamboo-146143-476649-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-07-07/Roborock-Auto-Empty-Dock-automatic-suction-station-for-Roborock-s7-461162-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-12-29/bogist-c1-pro-folding-electric-scooter-500w-motor-13ah-battery-black-ef2cd9-1640740787540._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-03-01/engwe-engine-pro-folding-electric-bicycle-750w-48v-12-8ah-black-56bb66-1646127110093._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-01-18/FAFREES-26-Inch-Electric-Bike-250W-Powerful-Motor---White-493949-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-05-26/laserpecker-2-laser-engraver-cutter-standard-edition--3d1b8a-1653549798631._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-12-20/x96-max--amlogic-s905x3-tv-box-4gb-64gb-8k-decode-1576832065504._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-07-12/Artillery-Hornet-2021-Newest-Model-3D-Printer-with-Metal-Integrated-St-461283-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-10-27/Beelink-U59-Mini-PC-Intel-N5095-8GB-RAM-256GB-SSD-475308-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-02-09/gamebox-g5-32gb-video-game-console-with-2-gamepads-ad8287-1644387822135._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-09-24/kugoo-s1-pro-folding-electric-scooter-350w-motor-8-0-inch-tire-white-1574132522862._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-12-09/Tronsmart-Apollo-Q10-ANC-Bluetooth-Headphones-Black-426941-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-03-14/Roborock-Q7-Max-Robot-Vacuum-Cleaner-497779-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-03-01/engwe-engine-pro-folding-electric-bicycle-750w-48v-12-8ah-black-56bb66-1646127110093._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-03-18/Tronsmart-Onyx-Ace-Bluetooth-5-0-TWS-Earphones-White-899355-._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-07-01/kugoo-m4-folding-offroad-electric-scooter-500w-motor-45km-range-1593586327367._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-08-11/DYU-D3F-Folding-Moped-Electric-Bike-14-Inch-Black-425969-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-12-17/engwe-ep-2-pro-folding-fat-tire-electric-moped-bicycle-green-1608186539235._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-12-17/Sculpfun-Honeycomb-Panel-200x300mm-481734-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-01-30/replacement-36v-6ah-li-battery-for-kugoo-s1-electric-scooter-black-1571990849814._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-11-11/Roborock-Dyad-Wet-and-Dry-Vacuum-Clenaer-13Kpa-5000mAh-35Mins-Run-Time-478096-1._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-11-28/xiaomi-jimmy-jv85-pro-cordless-handheld-vacuum-cleaner---purple-1606560899187._w280_.jpg',
    'https://img.gkbcdn.com/p/2021-12-15/Foqucy-GX100-1080P-LED-Projector-481515-0._w280_.jpg',
    'https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_.jpg',
    'https://img.gkbcdn.com/p/2022-05-25/xiaomi-mi-band-6-smart-bracelet-1-56-inch-screen-black-237984-1653467777344._w280_.jpg',
    'https://img.gkbcdn.com/p/2020-03-13/xiaomi-smart4u-sh50-bicycle-smart-flash-helmet-white-1584081531579._w280_.jpg'

]
function appendRecommended(data){
    data.forEach(function(elem){
        let box=document.createElement("div");
        box.className="item_box";
        let img=document.createElement("img");
        img.src=elem;
        box.append(img);
        document.querySelector(".recommended").append(box);
    })
}
appendRecommended(recommendedProducts)

let [timer1,timer2,timer3,timer4]=[60,59,23,01];

let box=document.querySelector("#timer");
let id1=setInterval(function(){
    if(timer1===0)
    {
        timer1=60;
        timer2--;
    }
    if(timer2===0)
    {
        timer3--;
        timer2=59;
        timer1=60;
    }
    if(timer3===0){
        timer4--;
        timer3=23;
        timer2=59;
        timer1=60;
    }
    if(timer1<10 )
    {
        timer1="0"+timer1;
    }
    box.innerHTML=`Ends in ${timer4}:${timer3}:${timer2}:${timer1}`
    timer1--;
},1000);
