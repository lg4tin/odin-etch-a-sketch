const container = document.querySelector('.container');
const button = document.querySelector('.prompt');

function createDivs(num) {
    let firstNum = num;
    num *= num;

    for (let i = 1; i <= num; i++) {
        let div = document.createElement('div');
        div.style = `flex: auto; background-color: grey; width: ${800 / firstNum}px; height: ${800 / firstNum}px;`;
        //div.innerText = i;
        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = 'black';
            setTimeout(() => {
                div.style.backgroundColor = 'grey';
            }, 2000)
        });
        container.appendChild(div);
    }
}

button.addEventListener('click', function() {
    let num = prompt('How many rows and columns?');
    container.innerHTML = '';
    createDivs(num)
})