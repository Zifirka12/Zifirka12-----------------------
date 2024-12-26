// music.js
const music = document.getElementById('backgroundMusic');

function playMusic() {
    music.play();
    localStorage.setItem('musicPlaying', 'true');
}

function pauseMusic() {
    music.pause();
    localStorage.setItem('musicPlaying', 'false');
}

// Проверяем состояние музыки при загрузке страницы
window.onload = function() {
    const isPlaying = localStorage.getItem('musicPlaying') === 'true';
    if (isPlaying) {
        music.play();
    }
};