let buttonPlus = document.querySelector('.button-plus')
let buttonMinus = document.querySelector('.button-minus')
let counterPrice = document.getElementById('count')
let ratingInput = document.querySelector('.input-rating')
console.log(ratingInput)

ratingInput.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    let filteredValue = inputValue.replace(/[^1-5]/g, '');
    if (filteredValue !== inputValue)  {
        event.target.value = filteredValue;
    }
})

function counterPlus() {
    if (counterPrice.value < 10) {
        counterPrice.removeAttribute('readonly');
        counterPrice.value ++;
        console.log(counterPrice.value)
        counterPrice.setAttribute('readonly', 'readonly') 
    }
    
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

$(document).ready(function () {
    $('#add-to-cart').submit(function(e) {
        e.preventDefault();
        let data = $(this).serializeArray()
        let form = $(this)
        console.log(data)
        $.ajax({
            type: 'POST',
            url: $('.product').val(),
            data: data,
            success: function() {

            }
        })
    })
})