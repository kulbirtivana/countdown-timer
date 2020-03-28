let timePassed = 0;
let timeLeft = timeLimit;
let timeInterval = null;

document.querySelector("strong").innerHTML = `
<aside>
`+timeLeft+` secs
</aside>
` ;
// startTimer();
function onTimesUp(){
	clearInterval(timerInterval);
}

	function startTimer(){
		timerInterval = setInterval(()=>{
		timePassed += 1;
		timeLeft = timeLimit - timePassed;
		document.querySelector("strong").innerHTML = formatTime(timeLeft);


		if (timeLeft === 0 ){
			onTimesUp();
		}
	}, 1000);
}

function formatTime(time){
	// const minutes = Math.floor(time /60);
	let seconds = time % 60;
	return seconds;

	}


