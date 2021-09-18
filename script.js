setTimeout(function(){
    document.querySelector("#logo").style.opacity=1;
    document.querySelector("#logo").classList.remove("animationEnter");
    document.querySelector("#logo").classList.add("animationMovement");
}, 3000);