function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if (height === '' || weight === '') {
        alert('Please enter both height and weight.');
        return;
    }

    var heightMeters = height / 100;
    var bmi = weight / (heightMeters * heightMeters);
    var result = '';

    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }

    document.getElementById('result').innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + ' - ' + result;
}
