document.getElementById("elemento").addEventListener("click",function(){
    let willekeurig= [];
    for(i = 0; i <= 49;i++){
        willekeurig[i] = Math.floor(Math.random()*900)+100;
        document.querySelector(".container") .innerHTML += `<div class="container__item">${willekeurig[i]}</div>`
       console.log(willekeurig[i])
    }
    }
     )
