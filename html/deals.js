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