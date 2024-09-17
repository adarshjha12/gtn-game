let buttons = document.querySelectorAll('.button')
console.log(buttons);

let body = document.querySelector('body')

buttons.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "goldenrod") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id
        }
    })
})

// new script 


//new script

