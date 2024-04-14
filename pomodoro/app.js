  // Timer variables
  let minutes = 25;
  let seconds = 00;
  let interval;
  let reps = 0;
	let prog = 0;
	let cycles = 0;
  let step = "work"; // Initial step is work

// Time Display Variables
	let workTittle = document.getElementById('work');
	let breakTittle = document.getElementById('break');
	let intervalTittle = document.getElementById('interval');

// GIF Variables
	let workGif = document.getElementById('catwork');
	let breakGif = document.getElementById('catbreak');
	let intervalGif = document.getElementById('catinterval');

// Progress Bar Variables
	let stepOne = document.getElementById('stepone');
	let stepTwo = document.getElementById('steptwo');
	let stepThree = document.getElementById('stepthree');
	let stepFour = document.getElementById('stepfour');

  // DOM elements
window.onload = () => {
	document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
	document.getElementById('repeats').innerHTML = 0;
	
	workTittle.classList.add('active');
	workGif.classList.add('active');
}
	
  // Update timer display
  function updateTimer() {
  	document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
		document.getElementById('repeats').innerHTML = cycles;
  }

  // Start timer
  function startTimer() {
    interval = setInterval(() => {
      if (seconds === 00) {
        if (minutes === 00) {
          clearInterval(interval);
          handleStepCompletion();
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      updateTimer();
    }, 1000);
  }

  // Pause timer
  function stopTimer() {
    clearInterval(interval);
  }

  // Proceed to the next step
  function nextStep() {
    stopTimer();
    handleStepCompletion();
  }

  // Reset timer to initial values
  function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 00;
    step = "work";
		breakTittle.classList.remove('active');
		intervalTittle.classList.remove('active');
		workTittle.classList.add('active');
		workGif.classList.add('active');
		breakGif.classList.remove('active');
		intervalGif.classList.remove('active');
		if (prog == 4){
			stepOne.classList.remove('full');
			stepTwo.classList.remove('full');
			stepThree.classList.remove('full');
			stepFour.classList.remove('full');
			prog = 0;
		}
		if (prog == 3){
			stepThree.classList.add('full');
		}
		if (prog == 2){
			stepTwo.classList.add('full');
		}
		if (prog == 1) {
			stepOne.classList.add('full');
		}
    updateTimer();
		startTimer();
  }

  // Handle step completion
  function handleStepCompletion() {
    if (step === "work") {
      step = "break";
      minutes = 10;
			reps += 1;
			prog += 1;
			workTittle.classList.remove('active');
			workGif.classList.remove('active');
			breakTittle.classList.add('active');
			breakGif.classList.add('active');
    } else if (step === "break" && (reps % 4 == 0)) {
      step = "interval";
      minutes = 20;
			breakTittle.classList.remove('active');
			breakGif.classList.remove('active');
			intervalTittle.classList.add('active');
			intervalGif.classList.add('active');
			stepFour.classList.add('full');
			cycles += 1;
    } else {
      step = "work";
			breakTittle.classList.remove('active');
			breakGif.classList.remove('active');
			intervalTittle.classList.remove('active');
			breakGif.classList.remove('active');
			workTittle.classList.add('active');
			workGif.classList.add('active');
      resetTimer();
      return;
    }
    seconds = 00;
    startTimer();
    // Play alarm sound
    new Audio('https://assets.ctfassets.net/v3n26e09qg2r/6BAvlneupPCE2NFwJSIn2X/77cffe4d0988cef30ad207dc37b143ad/SlowMorning.mp3').play();
  }

  function resetButton() {
    stopTimer();
    minutes = 25;
    seconds = 00;
		reps = 0;
		prog = 0;
		cycles = 0;
    step = "work";
		breakTittle.classList.remove('active');
		breakGif.classList.remove('active');
		intervalTittle.classList.remove('active');
		intervalGif.classList.remove('active');
		workTittle.classList.add('active');
		workGif.classList.add('active');
 		stepOne.classList.remove('full');
		stepTwo.classList.remove('full');
		stepThree.classList.remove('full');
		stepFour.classList.remove('full');
    updateTimer();
  }
  // Initial timer display
  updateTimer();