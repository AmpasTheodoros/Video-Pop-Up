function showStuff() {
	document.getElementById("some-button").style.display = "inline";
}
document.getElementById("some-button").style.display = "none";
document.querySelectorAll('.video-container video').forEach(vid => {
	vid.onclick = () =>{
		let myTimeout;
		let cross = document.querySelector('.container .video-container .video');
		if (window.getComputedStyle(cross).height === "250px"){
			myTimeout = setTimeout(
				function() {
					document.getElementById("some-button").style.display = "inline";
				}, 3000);
		}else{
			clearTimeout(myTimeout);
			document.getElementById("some-button").style.display = "none";
		}
		if (window.getComputedStyle(cross).height != "250px"){
			clearTimeout(myTimeout);
		}
		
		if (window.getComputedStyle(cross).height === "250px"){
			document.querySelector('.container .video-container .video').style.height ='800px';
			document.querySelector('.container .video-container .video').style.width ='500px';
			document.querySelector('.container .video-container .video').style.transition ='.2s linear';
			document.querySelector('.container .video-container span').style.bottom ='780px';
		}else {
			document.querySelector('.container .video-container .video').style.height ='250px';
			document.querySelector('.container .video-container .video').style.width ='180px';
			document.querySelector('.container .video-container .video').style.transition ='.2s linear';
			document.querySelector('.container .video-container span').style.transition ='.2s linear';
			document.querySelector('.container .video-container span').style.bottom ='231px';
		}
	}
})
document.querySelector('.video-container span').onclick = () =>{
	document.querySelector('.video-container').style.display ='none';
	var vid = document.getElementById("myVideo");
	vid.muted = true;
}