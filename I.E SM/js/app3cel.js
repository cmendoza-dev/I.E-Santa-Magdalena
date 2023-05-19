$(function(){
    $(".menu").css({"display": "none"});
    $(".submenu-cel").css({"display": "none"});

    $(".icono-menu-cel").click(function(){
        $(".menu").fadeIn({"display": "block"});
        $(".submenu-cel").css({"display": "none"});
    })
    $(".icono-menu-cel").dblclick(function(){
        $(".menu").css({"display": "none"});
    })
})

$(function(){
    $(".submenu-cel").css({"display": "none"});

    $(".jq-submenu").click(function(){
        $(".submenu-cel").css({"display": "block"});
    })
    $(".jq-submenu").dblclick(function(){
        $(".submenu-cel").css({"display": "none"});
    })
})