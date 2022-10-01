let click = document.querySelector('.click');
    let list = document.querySelector('.list');
    click.addEventListener("click",()=>{
        list.classList.toggle('newlist');
});

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let date = new Date();
const [month, day] = [date.getMonth(), date.getDate()];

let sdate=document.querySelector(".sdate");
sdate.innerText=day+"  "+monthNames[(month)];

let edate=document.querySelector(".edate");
edate.innerText=day+"  "+monthNames[(month)];

obj=[
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2021/03/25/ORB_InsiderPrices_lpheroB_1680x945_20210219.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
    },
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2021/07/29/ORB_All-Inclusive_lpheroB_1680x945_20210729.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
    },
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2021/06/23/ORB_JetReset_imgB_1024x580_20210623.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"
    }
];
obj.forEach(function(el){
    let a=document.querySelector(".deals");

    let b=document.createElement("div");
    let c=document.createElement("img");
    c.src=el.img;
    b.append(c);
    a.append(b);
})

let offers=[
    {
        img:"http://drive.google.com/uc?export=view&id=16IjieR7PYM2fJaY3nsKZI_MkJ0MkavOq"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1OPE5jcQ84fBEZahEbfagTo_DlHnhBZ3Q"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1jgCXJpZVYyT-f9JR7QYVwHyr-k50PfzZ"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1hDp4G50BsIhma78XhTKppO6WgiP89vbr"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1AGj2AonBf9KsTzqNdrH7B1ylemVC5nIz"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1-BE2WAtaFQfwrH72C4mVfee8Jmed3H_T"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1WBfi-G29G1Xnn3a_bYkhO6G5IaTi1IW0"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1Zpzd2Qwp-JFx01eYeY2vXJlpJDeSO1gv"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1Ngqa0z-J07kbPEwzwaG7PNPdMBQYIP7C"
    }
]
offers.forEach(function(el){
   let a= document.querySelector(".offers");

   let b=document.createElement("div");
   let c=document.createElement("img");
   c.src=el.img;
   b.append(c);
   a.append(b);
})

let last=[
    {
        img:"http://drive.google.com/uc?export=view&id=1Rql_IhAJC4BKtN2-RDX5gc7OnjRmE8uy"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1sJdXmvD6lCF7i-oomfIMNEEWno1Hlm_-"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1cE0Dk4yIAxLYLNf1Lyq4FiCJjyWhhj4U"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1i7nznCMuOz5P3C3d9tPXnjBS25ykvN83"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1bKCjNAOi623OtCP-SwsCjK44KFaqqJ0o"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1hcrNTEeYyS4n4Pre7CqLuKAsedSUMu9B"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1exg-Rm_xjGeC1v4SsA2ZRM42ATZTjm6T"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1DUqtN-NhioqvuYC0CXvadp749ayuQZh9"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1dmphMlvkfl01NTXfJMmiZU3epWfGvjsm"
    },
]

last.forEach(function(el){
    let a= document.querySelector(".last");
 
    let b=document.createElement("div");
    let c=document.createElement("img");
    c.src=el.img;
    b.append(c);
    a.append(b);
 })
 
 let home=[
    {
        img:"http://drive.google.com/uc?export=view&id=1lRMdPgbVgFoNc26Lk-edAUHk33m-jrO3"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1Yg6OZRAxQtd8UTYmWpSdpnJKAYCt4kO9"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1Icp7_fUG6jPVDHf_xlcuBCteUHgbEQrb"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=146PeXcilge5errB0spFSpCUk3uEZ2fyq"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1K7z74SIN79tHiTgcymFp4vWCxrAyLdAo"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1Q9bJg6Nb0rc4_hHHdFdbR0TK6lgwiWIG"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1UxBdi1Fe7rWR8Zh8MdjQiTEJhMwp5wnq"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1XVa7usla0xaADqXti-Az9f9fHB4AhBy_"
    },
    {
        img:"http://drive.google.com/uc?export=view&id=1NgNC-Budl_x2zFNCbdWJkX1QR14uEOF1"
    }
 ]
 home.forEach(function(el){
    let a= document.querySelector(".vacation");
 
    let b=document.createElement("div");
    let c=document.createElement("img");
    c.src=el.img;
    b.append(c);
    a.append(b);
 })

 let isnpi=[
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2020/08/05/glamping.png?impolicy=fcrop&w=900&h=386&q=mediumHigh"
    },
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2020/08/05/traveling.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
    },
    {
        img:"https://forever.travel-assets.com/flex/flexmanager/images/2020/08/05/trip_apps.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
    },
 ]
 isnpi.forEach(function(el){
    let a= document.querySelector("#adventure");
 
    let b=document.createElement("div");
    let c=document.createElement("img");
    c.src=el.img;
    b.append(c);
    a.append(b);
 })