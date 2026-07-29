const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === '' || isNaN(height) || weight === '' || isNaN(weight)) {
        results.innerHTML = 'Please enter valid numbers';
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;

    if(bmi < 18.6){
        results.innerHTML += `<span> and you are underweight</span>`;
    }else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML += `<span> and you are normal</span>`;
    }else{
        results.innerHTML += `<span> and you are overweight</span>`;
    }
    }
})