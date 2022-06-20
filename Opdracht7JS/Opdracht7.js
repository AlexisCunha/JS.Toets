document.getElementById("elemento").addEventListener("click",function(){
    let willekeurig= 1;
    for(i = 0; i <= 49;i++){
        willekeurig[i] = Math.floor(Math.random()*900)+100;
        while(willekeurig<50){
        console.log(willekeurig[i])
        document.querySelector(".container") .innerHTML += `<div class="container__item">${willekeurig}</div>`
        willekeurig++
       console.log(willekeurig[i])
    }
    }
     })
