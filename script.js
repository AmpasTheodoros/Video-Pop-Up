document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{

        let cross = document.querySelector('.container .video-container .video');

        if (window.getComputedStyle(cross).height === "250px"){
            document.querySelector('.container .video-container .video').style.height ='800px';
            document.querySelector('.container .video-container .video').style.width ='500px';
            document.querySelector('.container .video-container .video').style.transition ='.2s linear';
            document.querySelector('.container .video-container span').style.bottom ='780px';
            document.querySelector('.popup-video video').src = vid.getAttribute('src')
        }else {
            document.querySelector('.container .video-container .video').style.height ='250px';
            document.querySelector('.container .video-container .video').style.width ='180px';
            document.querySelector('.container .video-container .video').style.transition ='.2s linear';
            document.querySelector('.container .video-container span').style.transition ='.2s linear';
            document.querySelector('.container .video-container span').style.bottom ='231px';
            document.querySelector('.popup-video video').src = vid.getAttribute('src')
        }

    }
})
document.querySelector('.video-container span').onclick = () =>{
    document.querySelector('.video-container').style.display ='none';
}