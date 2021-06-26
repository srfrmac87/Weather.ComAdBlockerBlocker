// ==UserScript==
// @name         Weather.com adblock blocker blocker
// @namespace    http://tampermonkey.net/
// @version      0.10001
// @description  try to take over the world!
// @author       You
// @match        https://weather.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/srfrmac87/Weather.ComAdBlockerBlocker/blob/main/Weather-Ad-Block-Blocker.user.js
// @updateURL    https://github.com/srfrmac87/Weather.ComAdBlockerBlocker/blob/main/Weather-Ad-Block-Blocker.user.js
// ==/UserScript==

(function() {
    'use strict';

    // remove class="tp-modal-open" on body (body.tp-modal-open)?
    //        this might be easier to just modify the style on body.tp-modal-open and do overflow: scroll !important
    // remove div with class tp-modal (div.tp-modal)
    //        this might be easier to div.tp-modal {display:none}
    // remove div with class tp-backdrop & tp-active (div.tp-backdrop.tp-active)
    //        this might be easier to div.tp-backdrop.tp-active {display:none}

    var $ = window.jQuery;
    // This was original event listener:
    //     window.addEventListener ("load", timeOutFunction, false);
    //     function timeOutFunction () {
    //         setTimeout(Greasemonkey_main, 1500);
    //     }

    var timerVar = setInterval (function() {Greasemonkey_main (); }, 250);
    var trueA = false;
    var trueB = false;
    var trueC = false;
    var counter = 0;

    function Greasemonkey_main () {
        if($('body.tp-modal-open').length){
            $('.tp-modal-open').removeClass( "tp-modal-open" );
            trueA=true;
            //alert("A length = " + $('body.tp-modal-open').length);
        }
        if($('.tp-modal').length){
            $('.tp-modal').removeAttr('style');
            trueB=true;
        }
        if($('.tp-backdrop.tp-active').length){
            $('.tp-backdrop.tp-active').removeAttr('style');
            trueC=true;
        }
        //alert("counter = " + counter);
        counter++;
        if(trueA==true&&trueB==true&&trueC==true){ // sets clearInterval for when it completes sucessfully
            clearInterval (timerVar);
            timerVar = "";
            //alert("complete, all true = " + counter);
        }
        if (counter==240){ // sets clearInterval time out for this number in seconds * 4 (for above 250 ms refresh)
            clearInterval (timerVar);
            timerVar = "";
            //alert("timerVar counter done");
        }
        //cant get javascript natural to work.
        //         document.getElementsByClassName('tp-modal-open')[0].style.overflow = "scroll !important";
        //         document.querySelectorAll("body.tp-modal-open")[0].style.overflow = "scroll !important";
        //         document.querySelectorAll("body.tp-modal-open")[0].classList.remove(".tp-modal-open");
        //         document.getElementsByClassName('tp-modal')[0].style.display = "none !important";
        //         document.getElementsByClassName('tp-backdrop tp-active')[0].style.display = "none !important";
        //         alert("test");

    }




})();
