let buttonPlus = document.querySelector('.button-plus')
let buttonMinus = document.querySelector('.button-minus')
console.log(buttonMinus)
let counterPrice = document.getElementById('count')

function counterPlus() {
    counterPrice.removeAttribute('readonly');
    counterPrice.value ++;
    console.log(counterPrice.value)
    counterPrice.setAttribute('readonly', 'readonly')
}

function counterMinus() {
    if (counterPrice.value > 1) {
        counterPrice.removeAttribute('readonly')
        counterPrice.value --;
        console.log(counterPrice.value)
        counterPrice.setAttribute('readonly', 'readonly')
    }
}


buttonPlus.addEventListener('click', counterPlus)
buttonMinus.addEventListener('click', counterMinus)