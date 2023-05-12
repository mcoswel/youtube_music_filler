chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action == 'video_paused') {
    // Do something when video is paused
	alert("yt pausssee.")

  }
});