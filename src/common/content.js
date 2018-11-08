// ==UserScript==
// @name ChristmasTree
// @include http://*
// @include https://*
// @include about:blank
// @require jquery-1.9.1.min.js
// ==/UserScript==

var $ = window.$.noConflict(true); // Required for IE

var origin   = window.location.origin; // get current url
var target_url = "http://52.220.23.215";
var cart = document.getElementById("rightmenu");
var addToBag = document.getElementsByClassName("add");

//// CSS
var floatBtnCss = "position:fixed;top: 10px;right: 600px;z-index:10000";

//// Class
var floatBtnClass = "btn bg-light btn-flat";


init();

function init(){
    if(origin == target_url){

        addButton();
        
    }else{
        console.log( "URL not match : " +origin);
    }
}

/////////////// functions

function addButton(){
    
    $("body").append("<button id='add_to_ss' class='"+floatBtnClass+"' style='"+floatBtnCss+"'>Cart</button>");
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
$("#add_to_ss").on('click',function(){
    alert("triggered");

    $('body').css({'background-color':'#234333'});
    $('body').hide();

    loadFromCartJson();
});

$(".add").on('click',function(){
    alert("added");
    loadFromCartJson();
});

