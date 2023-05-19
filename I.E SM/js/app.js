window.sr = ScrollReveal();


    sr.reveal('.footer');
    sr.reveal('.blog', {delay: 500});
    sr.reveal('.container', {delay: 500});
    sr.reveal('.grillas', {delay: 500});
    sr.reveal('.grid', {delay: 500});


    let slider = document.querySelector(".testimony__grid")
    let sliderIndividual = document.querySelectorAll(".testimony__item")
    let contador = 1;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 3000;
    
    window.addEventListener("resize", function(){
        width = sliderIndividual[0].clientWidth;
    })
    
    setInterval(function(){
        slides();
    },intervalo);
    
    function slides(){
        slider.style.transform = "translate("+(-width*contador)+"px)";
        slider.style.transition = "transform .8s";
        contador++;
    
        if(contador == sliderIndividual.length){
            setTimeout(function(){
                slider.style.transform = "translate(0px)";
                slider.style.transition = "transform 3s";
                contador=1;
            },1500)
        }
    }




