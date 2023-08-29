document.addEventListener("DOMContentLoaded", function () {
    const PLAY = document.querySelector('#play');
    const PAUSE = document.querySelector('#pause');
    var progress = document.querySelector('.progress-range')

    let video;
    let display;
    PAUSE.classList.add("--hidden");
    video = document.querySelector('#video-player');
    range = document.querySelector('input[type="range"]');
    let currenttime = document.querySelector('#currenttime');
    let duration = document.querySelector('#duration');

    video.addEventListener('loadedmetadata', initializeVideo);
    video.addEventListener('timeupdate', updateTimeElapsed);

    PLAY.onclick = play;
    PAUSE.onclick = pause;

    function play() {
        video.play();
        PLAY.classList.add("--hidden");
        PAUSE.classList.remove("--hidden");
    }
    function pause() {
        video.pause();
        PLAY.classList.remove("--hidden");
        PAUSE.classList.add("--hidden");
    }
    video.addEventListener('timeupdate', function () {
        var progressPos = video.currentTime / video.duration;
        progress.style.width = progressPos * 100 + '%';
        if (video.ended) {
            video.pause();
            PLAY.classList.remove("--hidden");
            PAUSE.classList.add("--hidden");
        }
    })
    progress.addEventListener("mousemove", e => {
        let timelineWidth = progress.clientWidth;
        let offsetX = e.offsetX;
        let percent = Math.floor((offsetX > timelineWidth - 20) * video.duration);
        offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
        progress.style.width = `${offsetX} + '%'`;
        })
    function formatTime(timeInSeconds) {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

        return {
            minutes: result.substr(3, 2),
            seconds: result.substr(6, 2),
        };
    };
    function initializeVideo() {
        const videoDuration = Math.round(video.duration);
        const time = formatTime(videoDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    }
    function updateTimeElapsed() {
        const time = formatTime(Math.round(video.currentTime));
        currenttime.innerText = `${time.minutes}:${time.seconds}`;
        currenttime.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
    }
})

