var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let url = chrome.runtime.getURL('gg.mp3');
	

  const playlist = [ chrome.runtime.getURL('1.mp3')
  , chrome.runtime.getURL('2.mp3')
  , chrome.runtime.getURL('3.mp3')
  , chrome.runtime.getURL('4.mp3')
  , chrome.runtime.getURL('5.mp3')
  , chrome.runtime.getURL('6.mp3')
, chrome.runtime.getURL('7.mp3')
  , chrome.runtime.getURL('8.mp3')
  , chrome.runtime.getURL('9.mp3')
  , chrome.runtime.getURL('10.mp3')];
let player;
let currentTrack = 0;
let a = new Audio(playlist[currentTrack]);
a.addEventListener("ended", playNext);

 function playNext() {
	 currentTrack++;
	  if (currentTrack >= playlist.length) {
      currentTrack = 0;
    }
	a.src = playlist[currentTrack];
	a.play();
 }
 
  function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
		
			

      }

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PAUSED) {
	a.pause();
  }
}

window.onload = function() {
  const video = document.querySelector('video');
  if (video) {
    video.addEventListener('pause', function() {
			a.muted = false;
			a.volume = 0;
			a.play();
			const fadeDuration = 10000; 
			const fadeInInterval = 100; 
			const fadeInStep = fadeInInterval / fadeDuration; 
			let currentVolume = 0;
			const fadeIn = setInterval(() => {
				currentVolume += fadeInStep;
				if (currentVolume >= (0.3)) {
					clearInterval(fadeIn);
						}
				if (currentVolume<1){
					a.volume = currentVolume;
						}
			}, fadeInInterval);	 });
 
	video.addEventListener('play', function() {
		a.muted = true;
    });
	
  }
   
}
