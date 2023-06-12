function getVideo() {
    return document.querySelector('video')
}
function playPause() {
    const video = getVideo()
    if (video.paused)
        video.play()
    else
        video.pause()
}
function stopVideo(){
    const video = getVideo()
    video.pause()
    video.currentTime = 0
}
function skip(value) {
    const video = getVideo()
    video.currentTime += value
}