import { Video } from './video.js';
const video = Video.create('#mi-video');
const toggler = document.querySelector('#video-toggler')
const closer  = document.querySelector('.video-modal-close')
const buttons = document.querySelectorAll('.video-buttons > button');

video.addEventListener("loadedmetadata", function() {
    // Customize video controls to hide fullscreen button
    var controls = video.controls;
    controls.setAttribute("disablePictureInPicture", true);
    controls.removeAttribute("mozRequestFullScreen");

    // Manually handle the fullscreen functionality
    controls.addEventListener("click", function() {
        if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        }
    });
});

toggler?.addEventListener('click',() => {
    let modal = document.querySelector('.video-modal')
    modal.classList.add('show')
})
closer?.addEventListener('click', () => {
    let modal = document.querySelector('.video-modal')
    modal.classList.remove('show')
    video.Stop()
})
buttons?.forEach(btn => {
    if (btn instanceof HTMLElement) {
        btn.addEventListener('click', () => {
            const moment = btn.dataset.videoMoment;
            video?.goto(Number(moment));
        });
    }
});
toggler.click()