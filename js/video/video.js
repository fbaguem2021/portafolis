export class Video {
    videoElement;
    static create(q) {
        const videoElement = $(q);
        if (videoElement && videoElement instanceof HTMLVideoElement) {
            return new Video(videoElement);
        }
        else {
            return null;
        }
    }
    constructor(videoElement) {
        this.videoElement = videoElement;
    }
    PlayPause() {
        if (this.videoElement.paused) {
            this.videoElement.play();
        }
        else {
            this.videoElement.pause();
        }
    }
    Stop() {
        this.videoElement.pause();
        this.videoElement.currentTime = 0;
    }
    Advance() {
        this.videoElement.currentTime += 10;
    }
    Rewind() {
        const curTime = this.videoElement.currentTime;
        if (curTime < 10) {
            this.videoElement.currentTime = 0;
        }
        else if (curTime > 10) {
            this.videoElement.currentTime -= 10;
        }
    }
    goto(identifyer) {
        // Array con los valores de las diferentes posiciones a las que puedes ir en el video
        // los valores que se han de guardar, solo pueden ser segundos
        const moments = [
            0,
            seconds(42, 7),
            seconds(45, 13), 
            seconds(28, 25), 
            seconds(6, 33), 
            seconds(55, 38)
        ];
        this.videoElement.currentTime = moments[identifyer];
        this.videoElement.play();
    }
}
