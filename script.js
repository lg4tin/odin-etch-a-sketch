const container = document.querySelector('.container');

function createDivs(num) {
    num *= num;

    for (let i = 1; i <= num; i++) {
        let div = document.createElement('div');
        div.style = 'flex: auto; background-color: red; width: 50px; height: 50px;';
        div.innerText = i;
        div.addEventListener('mouseenter', function() {
            div.style.backgroundColor = 'blue';
            setTimeout(() => {
                div.style.backgroundColor = 'red';
            }, 1000)
        });
        container.appendChild(div);
    }
}

createDivs(16)