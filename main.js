// Get the input fields and button
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');

// Calculate BMI function
function calculateBMI() {
	// Get the weight and height values and convert to metric
	const weight = weightInput.value * 0.453592;
	const height = heightInput.value * 0.01;

	// Calculate BMI
	const bmi = weight / (height * height);

	// Display result on page
	document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}

// Add event listener to button
calculateBtn.addEventListener('click', calculateBMI);
