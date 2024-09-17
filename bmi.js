let form = document.querySelector('form');

form.addEventListener('submit', function (ent){
    ent.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if ( height < 0 || isNaN(height)) {
        result.innerHTML = `please enter valid height in number`;
        result.style.color = "red";
    } else if ( weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter valid weight in number`;
        result.style.color = "red";
    } 
    else{
       let bmi = (weight / ((height * height) / 10000)).toFixed(2);
       result.innerHTML = `<span> ${bmi} </span>`;

       if (bmi < 18.6) {
        result.innerHTML = `<span> ${bmi} under weight </span>`;
        result.style.color = "orange";
       } else if (bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `<span> ${bmi} normal weight </span>`;
        result.style.color = "greenyellow";
       } else if (bmi > 24.9){
        result.innerHTML = `<span> ${bmi} over weight </span>`;
        result.style.color = "red";
       }
}
})
