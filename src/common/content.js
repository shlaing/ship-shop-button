// ==UserScript==
// @name ChristmasTree
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// ==/UserScript==

var $ = window.$.noConflict(true); // Required for IE

console.log(window.location);

var host   = window.location.host; // get current url
var href   = window.location.href;
var target_url = "colourpop.com";
var cart = document.getElementById("rightmenu");
var addToBag = document.getElementsByClassName("add");
var colour_pop_checkout = "checkouts";

//// CSS
var floatBtnCss = `position:fixed;bottom: 10px;left: 30px;z-index:60000;
                   background-color:#ffffff;border:1px #333 dotted; border-radius: 5px;
                   width:300px;height:auto;padding-top:5px;`;

//// Class
var floatBtnClass = "btn bg-light btn-flat";


init();

function init(){
    if(host == target_url){
       
        if(!href.includes(colour_pop_checkout)){
            modifySite();
            addButton();
        }else{
            window.location = "https://colourpop.com/cart";
        }
    }else{
        console.log( "URL not match : " + host);
    }
}

/////////////// functions
function modifySite(){
    // $("body").css({'margin-top':'80px'});
    // $("header").css({'margin-top':'80px'});
    // $("#checkoutButton").attr({'disabled':'disabled'});

    const cssFile = `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">`;

    $("head").append(cssFile);
}

function addButton(){

    const html = `<div  style='`+floatBtnCss+`' >
                    <center>
                        <img class="gold" width="120" src="https://cdn.shopify.com/s/files/1/1338/0835/files/COLOURPOP_logo-gold.png?8688191005979491265" alt="ColourPop" style="border: 0;">
                        <h5 style='text-align:center;'><i class="fas fa-check-circle"></i> Activated</h5>
                    </center>
                    
                 </div>`;
    
    $("body").append(html);
    // <ul style='list-style:none;'>
    // <li>by Shwe Hlaing</li>
    // </ul>
    // <button style='width:100%;background-color: #55acee;border-radius: 5px;border:none;padding: 5px 5px;font-size: 15px;text-decoration: none;color: #fff;position: relative;display: inline-block;'>Checkout</button>
    // <button style='width:100%;background-color: #e74c3c;margin-top:3px;border:none;border-radius: 5px;padding: 5px 5px;font-size: 15px;text-decoration: none;color: #fff;position: relative;display: inline-block;'>Go to Cart</button>

}

// Call to api to get cart.json
function loadFromCartJson(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://colourpop.com/cart?view=json",
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }

    $.ajax(settings).done(function (response) {
        
        console.log(response);
    });
}

/////////////// Listeners
$("#checkout").on('click',function(){
    alert("triggered");

    // $('body').css({'background-color':'#234333'});
    // $('body').hide();

    //loadFromCartJson();
});

