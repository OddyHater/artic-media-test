const video = document.querySelector('.company__video');
const videoOverlay = document.querySelector('.company__video-overlay');
const playButton = document.querySelector('.company__overlay-button');

const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

const handleClick = () => {
  if (isVideoPlaying(video)) {
    video.pause();
    playButton.classList.remove('company__overlay-button_active');
    return;
  }

  video.play();
  playButton.classList.add('company__overlay-button_active');
}

export function addVideoListeners() {
  videoOverlay.addEventListener('click', handleClick);
}

