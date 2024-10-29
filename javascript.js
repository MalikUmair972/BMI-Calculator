function calculate() {
    let age = parseFloat(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let gender = document.getElementById('male').selected ? 'male' : 'female';

    if (age < 18 || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid data. Age must be greater than 18 and valid weight/height should be provided.");
        return;
    }
  
    let agee = age * 3.6666;

    let heightInMeters = height * 0.3048;
    
    if (weight > 66) {
        document.getElementById('result').style.color = 'red'
        alert('you need to lose weight')
    } else {
        alert('you need to gain weight')
    }

    let bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById('result').textContent = bmi.toFixed(2);
}
