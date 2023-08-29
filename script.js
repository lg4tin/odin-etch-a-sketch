const container = document.querySelector('.container');
const button = document.querySelector('.prompt');
const rgbButton = document.querySelector('.rgb');

function createDivs(num) {
    let firstNum = num;
    num *= num;

    for (let i = 1; i <= num; i++) {
        let div = document.createElement('div');
        div.style = `flex: auto; background-color: white; width: ${800 / firstNum}px; height: ${800 / firstNum}px;`;
        div.classList.add('divs');
        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

button.addEventListener('click', function() {
    let num = prompt('How many rows and columns? Max: 100');
    if (num > 100) {
        num = 100;
    } 
    container.innerHTML = '';
    createDivs(num)
})

rgbButton.addEventListener('click', function() {

    let divs = document.querySelectorAll('.divs');

    divs.forEach(div => {
        div.addEventListener('mouseenter', function() {
            let randomNumber1 = Math.floor((Math.random() * 255));
            let randomNumber2 = Math.floor((Math.random() * 255));
            let randomNumber3 = Math.floor((Math.random() * 255));
            div.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
        })
    })
})

