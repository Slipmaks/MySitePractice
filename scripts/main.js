//set Header text
let siteHeader = document.querySelector('.h1-header');
siteHeader.textContent = "Lyrics list of Meshuggah songs"

//add from txt file 
let lyricBox = document.querySelector('.lyric');
let list = document.querySelector('li');

list.onclick = function () {
    lyricBox.textContent = '/media/text.txt';
}

//resize frame element by content
var iframe = document.getElementById("frame");

iframe.onload = function () {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
}

//set user name
var myButton = document.querySelector('button');
var myText = document.querySelector('.h1-text');

function setUserName(){
    var myName = prompt('Enter your name');
    localStorage.setItem('name', myName);
    myText.textContent = "Test name, your name: " + myName; 
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myText.textContent = "Test name, your name: " + storedName; 
}

myButton.onclick = function() {
    setUserName();
}