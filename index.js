let CountValue=document.getElementById("counterValue");
let increase=document.getElementById("incbtn")
let decrease=document.getElementById("decbtn")
let reset=document.getElementById("rstbtn")
let count=0;
increase.onclick=function(){
    count++;
    CountValue.textContent=count;
}
decrease.onclick=function(){
    count--;
    CountValue.textContent=count;
}
reset.onclick=function(){
    count=0;
    CountValue.textContent=count;
}