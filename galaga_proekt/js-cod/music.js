// Создаем глобальный объект Audio
const music = new Audio('ms.mp3');

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
    const currentTime = localStorage.getItem('timemusic') || 0;
    const isPlaying = localStorage.getItem('musicPlaying') === 'true';

    music.currentTime = currentTime;
    if (isPlaying) {
        music.play();
    }
};

// Сохраняем текущее время музыки
music.addEventListener('timeupdate', () => {
    localStorage.setItem('timemusic', music.currentTime);
});

