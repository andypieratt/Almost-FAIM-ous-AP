var str_pathToImageFolder = "./public/images/";

var arr_banana = ["Unavailable_FRAME01.png", "Unavailable_FRAME02.png", "Unavailable_FRAME03.png", "Unavailable_FRAME04.png", "Unavailable_FRAME05.png", "Unavailable_FRAME06.png", "Unavailable_FRAME07.png", "Unavailable_FRAME08.png", "Unavailable_FRAME09.png", "Unavailable_FRAME010.png", "Unavailable_FRAME011.png", "Unavailable_FRAME012.png", "Unavailable_FRAME013.png", "Unavailable_FRAME014.png", "Unavailable_FRAME015.png"];

var arr_dino = ["Dino_FRAME01.png", "Dino_FRAME02.png", "Dino_FRAME03.png", "Dino_FRAME04.png", "Dino_FRAME05.png", "Dino_FRAME06.png", "Dino_FRAME07.png", "Dino_FRAME08.png", "Dino_FRAME09.png", "Dino_FRAME010.png", "Dino_FRAME011.png", "Dino_FRAME012.png", "Dino_FRAME013.png"];

var arr_hand = ["TextSelect.png"];

var arr_horse = ["Horse_Frame01.png", "Horse_Frame02.png", "Horse_Frame03.png", "Horse_Frame04.png", "Horse_Frame05.png", "Horse_Frame06.png", "Horse_Frame07.png", "Horse_Frame08.png", "Horse_Frame09.png", "Horse_Frame10.png", "Horse_Frame11.png", "Horse_Frame12.png", "Horse_Frame13.png", "Horse_Frame14.png", "Horse_Frame15.png", "Horse_Frame16.png", "Horse_Frame17.png", "Horse_Frame18.png", "Horse_Frame19.png", "Horse_Frame20.png", "Horse_Frame21.png", "Horse_Frame22.png", "Horse_Frame23.png", "Horse_Frame24.png",];


var int_cursorAnimationInterval;//animation interval id
var num_cursorAnimationFrame = 0;//the animation frame (counts through arrays)
var num_animationSpeed = 100;

function animateCursor(arr_animation) {
    //restart first
    num_cursorAnimationFrame = 0;
    clearInterval(int_cursorAnimationInterval);

    int_cursorAnimationInterval = setInterval(function () { animateCursorDefault(arr_animation, "body"); }, num_animationSpeed);
}

function animateCursorForElement(arr_animation, str_tagName) {

    num_cursorAnimationFrame = 0;
    clearInterval(window["int_cursorAnimationInterval_" + str_tagName]);
    var arr = arr_animation;

    window["num_cursorAnimationFrame_" + str_tagName] = 0;

    window["int_cursorAnimationInterval_" + str_tagName] = setInterval(function () { animatedCursorForElement(arr, str_tagName, "num_cursorAnimationFrame_" + str_tagName); }, num_animationSpeed);
}


function animatedCursorForElement(arr_animation, str_tagName, str_frameVar) {

    window[str_frameVar] += 1;

    if (window[str_frameVar] > arr_animation.length - 1) {
        window[str_frameVar] = 0;
    }

    setCursorToTag(arr_animation[window[str_frameVar]], str_tagName)
}

function animateCursorDefault(arr_animation) {

    num_cursorAnimationFrame += 1;

    if (num_cursorAnimationFrame > arr_animation.length - 1) {
        num_cursorAnimationFrame = 0;
    }

    setCursor(arr_animation[num_cursorAnimationFrame]);
    //
}


function setCursor(str_image) {
    document.documentElement.style.cursor = 'url(' + str_pathToImageFolder + str_image + '), auto';

}

function setCursorToTag(str_image, str_tagName) {

    var _element = document.getElementsByTagName(str_tagName);
    for (var i = 0; i < _element.length; ++i) {
        _element[i].style.cursor = 'url(' + str_pathToImageFolder + str_image + '), auto';
    }
}


function banana() {
    animateCursor(arr_banana);
}

function dino(str_tag) {
    animateCursorForElement(arr_dino, str_tag);
}

function hand(str_tag) {
    animateCursorForElement(arr_hand, str_tag);
}

function horse(str_tag) {
    animateCursorForElement(arr_horse, str_tag);
}










window.addEventListener("load", function () {



    //default cursor
    banana();

    dino("img");
    hand("input");
    horse("button");

});
