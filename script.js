//your JS code here. If required.
const sounds=['applause','boo','gasp','tada','victory','wrong','stop'];
sounds.forEach(sound =>{
	const btn=document.createElement('button');
	btn.classList.add('btn');
	btn.innerText=sound;
	btn.addEventListener('click',()=>{
		stopSongs();
		document.getElementById(sound).play();
	});
	document.getElementById('buttons').appendChild(btn);
	const audio=document.createElement('audio');
	audio.id=sound;
	audio.src=`sounds/${sound}.mp3`;
	 document.body.appendChild(audio);
});
	const stopBtn=document.createElement('button');
	stopBtn.classList.add('stop');
	stopBtn.innerText='stop';
 stopBtn.addEventListener('click',()=>{
		stopSongs();
 });
document.getElementById('buttons').appendChild(stopBtn);
	function stopSongs(){
	sounds.forEach(sound =>{	
		const song=document.getElementById(sound);
		if (song) {
		song.pause();
		song.currentTime=0;
		}
	});
	}
	