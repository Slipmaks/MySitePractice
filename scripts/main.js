let siteHeader = document.querySelector('.h1-header');
siteHeader.textContent = "Lyrics list of Meshuggah songs"

let lyricBox = document.querySelector('.lyric');
let list = document.querySelector('li');

list.onclick = function () {
    lyricBox.textContent = '/media/text.txt';
}

var iframe = document.getElementById("frame");

iframe.onload = function () {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
}