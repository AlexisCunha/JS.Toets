let willekeurig = 0;
let i = 1;
 
document.getElementById("elemento").addEventListener("click",function(){
 willekeurig++;
    if(i <50){
        willekeurig[i]  = Math.floor(Math.random()*900)+100;
        document.querySelector(".container") .innerHTML += `<div class="container__item">${willekeurig}</div>`
        console.log(willekeurig)
        i++
    }})
