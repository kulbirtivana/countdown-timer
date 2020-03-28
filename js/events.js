

const myForm = document.querySelector('form');
const myInput = document.querySelector(['#app']);
const myStrong = document.querySelector('strong');

let timeLimit = myInput.value;



myForm.addEventListener('submit', function(e){
	e.preventDefault();
	timeLimit = myInput.value;
	console.log(timeLimit);
	myStrong.textContent = timeLimit;
	startTimer();
})

