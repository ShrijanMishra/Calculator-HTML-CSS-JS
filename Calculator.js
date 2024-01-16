let screen=document.querySelector(".display");
let Buttons1=document.querySelectorAll(".NumBtn");
let OpBtns=document.querySelectorAll(".operatorBtn");
let Clear= document.querySelector(".ClrBtn");
let Equal=document.querySelector(".EqlBtn");
let string="";

Buttons1.forEach((Button)=>{
Button.addEventListener("click",(e)=>{
    let value=e.target.dataset.num;
    screen.value+=value;
 
})
});

OpBtns.forEach((Button1)=>{
    Button1.addEventListener("click",(e)=>{
        let value=e.target.dataset.num;
        screen.value+=value;
    })
})


Equal.addEventListener("click",(e)=>{
//if(screen.value===''){
//   screen.value="";
//}else{
let ans=eval(screen.value);
screen.value=ans;
//}
})

Clear.addEventListener("click",(e)=>{
screen.value="";

})


//  DATE AND TIME

let ajaxreq=new XMLHttpRequest();
let endpoint="http://worldtimeapi.org/api/timezone/Asia/Kolkata";

function connect(){
    ajaxreq.onreadystatechange=showTime;
    ajaxreq.open("get",endpoint,true);
    ajaxreq.send(null);


}

 function showTime(){
    if (ajaxreq.readyState ===4 && ajaxreq.status === 200){
        let obj= JSON.parse(ajaxreq.responseText);
        let current=new Date(obj.datetime);
        console.log(current.toDateString());
        let str=current.toDateString()  +"  <br/> "+   current.toLocaleTimeString();
        let span=document.querySelector("#datetime");
        span.innerHTML=str;
    }
 }

 connect();
 setInterval(
    ()=>{
        connect()
    },
    1000
 );