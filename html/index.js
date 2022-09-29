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

let obj=[
        {
            img:"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
        },
        {
            img:"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
        },
        {
            img:"https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
        }
        ]

obj.forEach(function(el){
    let a=document.querySelector("#img")

    let b=document.createElement("div");
    let c=document.createElement("img");
    c.src=el.img;
    b.append(c);
    a.append(b);
})