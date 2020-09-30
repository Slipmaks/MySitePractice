let siteHeader = document.querySelector('.h1-header');
siteHeader.textContent = "Lyrics list of Meshuggah songs"

let lyricBox = document.querySelector('.lyric');
let list = document.querySelector('li');

list.onclick = function () {
    lyricBox.textContent = 'text';
}