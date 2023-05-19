
// Bloque 1 -------------------------------------------------------------
$(function(){
    $(".fj-hide1-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq1").css({"display": "none"});
    $(".bloque .trapecio-bloq1").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq1").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq1").css({"border-left":"10px"});
    $(".bloque .trapecio5-bloq1").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq1").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq1 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq1 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq1 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq1 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq1 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq1 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq1 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq1 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq1 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq1").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq1").css({"margin-left":"140px"});

    $(".fj-hide1-bottom").click(function(){

        $(".fj-hide1-icon").css({"display": "block"});
        $(".fj-hide1-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq1").css({"display": "block"});

        $(".bloque .trapecio6-bloq1 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq1 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq1 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq1 hr").css({"border": "none"});

        $("#isquierda1").css({"transform": "rotate(-45deg)"});
        $("#isquierda1").css({"margin": "14px 0 0 20px"});

        $("#derecha1").css({"transform": "rotate(-133deg)"})
        $("#derecha1").css({"margin": "-2px 0 0 -62px"})

        $("#arriba1").css({"transform": "rotate(-227.5deg)"})
        $("#arriba1").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba1").css({"width": "41px"})

        $("#abajo1").css({"transform": "rotate(-133deg)"})
        $("#abajo1").css({"margin": "-2px 0 0 19px"})
        $("#abajo1").css({"width": "42px"})

        $(".bloque .trapecio-bloq1").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq1").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq1").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq1").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq1").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq1").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq1").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq1").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq1").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq1").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq1").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq1").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq1 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq1").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq1").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide1-text").css({"display": "none"});
    $(".fj-hide1-icon").mouseenter(function(){
        $(".fj-hide1-text").css({"display": "block"});
    })
    $(".fj-hide1-icon").mouseleave(function(){
        $(".fj-hide1-text").css({"display": "none"});
    })
})

//-----------------------------------------------------------------------



// Bloque 2 -------------------------------------------------------------
$(function(){
    $(".fj-hide2-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq2").css({"display": "none"});
    $(".bloque .trapecio-bloq2").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq2").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq2").css({"border-left":"10px"});
    $(".bloque .trapecio5-bloq2").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq2").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq2 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq2 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq2 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq2 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq2 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq2 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq2 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq2 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq2 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq2").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq2").css({"margin-left":"140px"});

    $(".fj-hide2-bottom").click(function(){

        $(".fj-hide2-icon").css({"display": "block"});
        $(".fj-hide2-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq2").css({"display": "block"});

        $(".bloque .trapecio6-bloq2 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq2 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq2 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq2 hr").css({"border": "none"});

        $("#isquierda2").css({"transform": "rotate(-45deg)"});
        $("#isquierda2").css({"margin": "14px 0 0 20px"});

        $("#derecha2").css({"transform": "rotate(-133deg)"})
        $("#derecha2").css({"margin": "-2px 0 0 -62px"})

        $("#arriba2").css({"transform": "rotate(-227.5deg)"})
        $("#arriba2").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba2").css({"width": "41px"})

        $("#abajo2").css({"transform": "rotate(-133deg)"})
        $("#abajo2").css({"margin": "-2px 0 0 19px"})
        $("#abajo2").css({"width": "42px"})

        $(".bloque .trapecio-bloq2").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq2").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq2").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq2").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq2").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq2").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq2").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq2").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq2").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq2").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq2").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq2").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq2 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq2").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq2").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide2-text").css({"display": "none"});
    $(".fj-hide2-icon").mouseenter(function(){
        $(".fj-hide2-text").css({"display": "block"});
    })
    $(".fj-hide2-icon").mouseleave(function(){
        $(".fj-hide2-text").css({"display": "none"});
    })
})

//-----------------------------------------------------------------------



// Bloque 3 -------------------------------------------------------------
$(function(){
    $(".fj-hide3-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq3").css({"display": "none"});
    $(".bloque .trapecio-bloq3").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq3").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq3").css({"border-left":"10px"})
    $(".bloque .trapecio5-bloq3").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq3").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq3 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq3 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq3 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq3 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq3 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq3 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq3 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq3 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq3 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq3").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq3").css({"margin-left":"140px"});

    $(".fj-hide3-bottom").click(function(){

        $(".fj-hide3-icon").css({"display": "block"});
        $(".fj-hide3-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq3").css({"display": "block"});

        $(".bloque .trapecio6-bloq3 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq3 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq3 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq3 hr").css({"border": "none"});

        $("#isquierda3").css({"transform": "rotate(-45deg)"});
        $("#isquierda3").css({"margin": "14px 0 0 20px"});

        $("#derecha3").css({"transform": "rotate(-133deg)"})
        $("#derecha3").css({"margin": "-2px 0 0 -62px"})

        $("#arriba3").css({"transform": "rotate(-227.5deg)"})
        $("#arriba3").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba3").css({"width": "41px"})

        $("#abajo3").css({"transform": "rotate(-133deg)"})
        $("#abajo3").css({"margin": "-2px 0 0 19px"})
        $("#abajo3").css({"width": "42px"})

        $(".bloque .trapecio-bloq3").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq3").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq3").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq3").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq3").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq3").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq3").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq3").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq3").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq3").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq3").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq3").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq3 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq3").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq3").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide3-text").css({"display": "none"});
    $(".fj-hide3-icon").mouseenter(function(){
        $(".fj-hide3-text").css({"display": "block"});
    })
    $(".fj-hide3-icon").mouseleave(function(){
        $(".fj-hide3-text").css({"display": "none"});
    })
})
//-----------------------------------------------------------------------



// Bloque 4 -------------------------------------------------------------
$(function(){
    $(".fj-hide4-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq4").css({"display": "none"});
    $(".bloque .trapecio-bloq4").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq4").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq4").css({"border-left":"10px"})
    $(".bloque .trapecio5-bloq4").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq4").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq4 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq4 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq4 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq4 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq4 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq4 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq4 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq4 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq4 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq4").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq4").css({"margin-left":"140px"});

    $(".fj-hide4-bottom").click(function(){

        $(".fj-hide4-icon").css({"display": "block"});
        $(".fj-hide4-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq4").css({"display": "block"});

        $(".bloque .trapecio6-bloq4 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq4 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq4 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq4 hr").css({"border": "none"});

        $("#isquierda4").css({"transform": "rotate(-45deg)"});
        $("#isquierda4").css({"margin": "14px 0 0 20px"});

        $("#derecha4").css({"transform": "rotate(-133deg)"})
        $("#derecha4").css({"margin": "-2px 0 0 -62px"})

        $("#arriba4").css({"transform": "rotate(-227.5deg)"})
        $("#arriba4").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba4").css({"width": "41px"})

        $("#abajo4").css({"transform": "rotate(-133deg)"})
        $("#abajo4").css({"margin": "-2px 0 0 19px"})
        $("#abajo4").css({"width": "42px"})

        $(".bloque .trapecio-bloq4").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq4").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq4").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq4").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq4").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq4").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq4").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq4").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq4").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq4").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq4").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq4").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq4 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq4").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq4").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide4-text").css({"display": "none"});
    $(".fj-hide4-icon").mouseenter(function(){
        $(".fj-hide4-text").css({"display": "block"});
    })
    $(".fj-hide4-icon").mouseleave(function(){
        $(".fj-hide4-text").css({"display": "none"});
    })
})
//-----------------------------------------------------------------------



// Bloque 5 -------------------------------------------------------------
$(function(){
    $(".fj-hide5-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq5").css({"display": "none"});
    $(".bloque .trapecio-bloq5").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq5").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq5").css({"border-left":"10px"})
    $(".bloque .trapecio5-bloq5").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq5").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq5 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq5 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq5 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq5 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq5 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq5 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq5 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq5 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq5 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq5").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq5").css({"margin-left":"140px"});

    $(".fj-hide5-bottom").click(function(){

        $(".fj-hide5-icon").css({"display": "block"});
        $(".fj-hide5-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq5").css({"display": "block"});

        $(".bloque .trapecio6-bloq5 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq5 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq5 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq5 hr").css({"border": "none"});

        $("#isquierda5").css({"transform": "rotate(-45deg)"});
        $("#isquierda5").css({"margin": "14px 0 0 20px"});

        $("#derecha5").css({"transform": "rotate(-133deg)"})
        $("#derecha5").css({"margin": "-2px 0 0 -62px"})

        $("#arriba5").css({"transform": "rotate(-227.5deg)"})
        $("#arriba5").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba5").css({"width": "41px"})

        $("#abajo5").css({"transform": "rotate(-133deg)"})
        $("#abajo5").css({"margin": "-2px 0 0 19px"})
        $("#abajo5").css({"width": "42px"})

        $(".bloque .trapecio-bloq5").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq5").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq5").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq5").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq5").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq5").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq5").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq5").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq5").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq5").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq5").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq5").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq5 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq5").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq5").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide5-text").css({"display": "none"});
    $(".fj-hide5-icon").mouseenter(function(){
        $(".fj-hide5-text").css({"display": "block"});
    })
    $(".fj-hide5-icon").mouseleave(function(){
        $(".fj-hide5-text").css({"display": "none"});
    })
})
//-----------------------------------------------------------------------



// Bloque 6 -------------------------------------------------------------
$(function(){
    $(".fj-hide6-icon").css({"display": "none"});
    $(".bloque .trapecio6-bloq6").css({"display": "none"});
    $(".bloque .trapecio-bloq6").css({"border-right":"20px"});

    $(".bloque .trapecio5-bloq6").css({"border-right":"20px"});
    $(".bloque .trapecio5-bloq6").css({"border-left":"10px"})
    $(".bloque .trapecio5-bloq6").css({"border-bottom":"60px solid #ff8000"});
    $(".bloque .trapecio5-bloq6").css({"margin-left":"68px"});

    $(".bloque .trapecio5-bloq6 hr").css({"transform":"rotate(90deg)"});
    $(".bloque .trapecio5-bloq6 hr").css({"width":"59px"});
    $(".bloque .trapecio5-bloq6 hr").css({"height":"2.5px"});
    $(".bloque .trapecio5-bloq6 hr").css({"margin-left":"auto"});
    $(".bloque .trapecio5-bloq6 hr").css({"margin-right":"auto"});
    $(".bloque .trapecio5-bloq6 hr").css({"margin-top":"29px"});
    $(".bloque .trapecio5-bloq6 hr").css({"margin-bottom":"auto"});
    $(".bloque .trapecio5-bloq6 hr").css({"background-color":"black"});
    $(".bloque .trapecio5-bloq6 hr").css({"border":"none"});

    $(".bloque .trapecio2-bloq6").css({"border-left":"20px"});
    $(".bloque .trapecio2-bloq6").css({"margin-left":"140px"});

    $(".fj-hide6-bottom").click(function(){

        $(".fj-hide6-icon").css({"display": "block"});
        $(".fj-hide6-text").css({"display": "none"});
        $(".bloque .trapecio6-bloq6").css({"display": "block"});

        $(".bloque .trapecio6-bloq6 hr").css({"background-color": "black"});
        $(".bloque .trapecio6-bloq6 hr").css({"width": "41px"});
        $(".bloque .trapecio6-bloq6 hr").css({"height": "2.5px"});
        $(".bloque .trapecio6-bloq6 hr").css({"border": "none"});

        $("#isquierda6").css({"transform": "rotate(-45deg)"});
        $("#isquierda6").css({"margin": "14px 0 0 20px"});

        $("#derecha6").css({"transform": "rotate(-133deg)"})
        $("#derecha6").css({"margin": "-2px 0 0 -62px"})

        $("#arriba6").css({"transform": "rotate(-227.5deg)"})
        $("#arriba6").css({"margin": "25.5px 0 0 -62.5px"})
        $("#arriba6").css({"width": "41px"})

        $("#abajo6").css({"transform": "rotate(-133deg)"})
        $("#abajo6").css({"margin": "-2px 0 0 19px"})
        $("#abajo6").css({"width": "42px"})

        $(".bloque .trapecio-bloq6").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio-bloq6").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio-bloq6").css({"border-right":"67px solid transparent"});

        $(".bloque .trapecio-bloq6").css({"border-bottom":"60px solid #ff8000"});
        $(".bloque .trapecio2-bloq6").css({"border-left":"63px solid transparent"});
        $(".bloque .trapecio2-bloq6").css({"border-right":"67px solid transparent"});
        $(".bloque .trapecio2-bloq6").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq6").css({"border-right":"55px solid transparent"});
        $(".bloque .trapecio5-bloq6").css({"border-left":"55px solid transparent"});
        $(".bloque .trapecio5-bloq6").css({"border-bottom":"60px solid gray"});
        $(".bloque .trapecio5-bloq6").css({"margin-left":"63px"});
        $(".bloque .trapecio5-bloq6").css({"position":"absolute"});

        $(".bloque .trapecio5-bloq6 hr").css({"display":"none"});
        
        $(".bloque .trapecio2-bloq6").css({"border-left":"20px"});
        $(".bloque .trapecio2-bloq6").css({"margin-left":"140px"});
    })
})

$(function(){
    $(".fj-hide6-text").css({"display": "none"});
    $(".fj-hide6-icon").mouseenter(function(){
        $(".fj-hide6-text").css({"display": "block"});
    })
    $(".fj-hide6-icon").mouseleave(function(){
        $(".fj-hide6-text").css({"display": "none"});
    })
})
//---------------------------------------------------------------------
