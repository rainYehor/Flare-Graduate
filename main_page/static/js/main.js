let firstBlock = document.getElementById('first-block')
let secondBlock = document.getElementById('second-block')
let thirdBlock = document.getElementById('third-block')
let fourthBlock = document.getElementById('fourth-block')
let fifthBlock = document.getElementById('fifth-block')
let sixthBlock = document.getElementById('sixth-block')
// let btnDown = document.querySelector('.btn-down');
// console.log(btnDown)
let btnSection1 = document.querySelector('.navbar-btn-1')
let btnSection2 = document.querySelector('.navbar-btn-2')
let btnSection3 = document.querySelector('.navbar-btn-3')
let btnSection4 = document.querySelector('.navbar-btn-4')
let btnSection5 = document.querySelector('.navbar-btn-5')
let btnSection6 = document.querySelector('.navbar-btn-6')
console.log(fifthBlock)
console.log(btnSection3)

function scrollSmooth(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

btnSection1.addEventListener('click', function() {
    scrollSmooth(firstBlock)
})

btnSection2.addEventListener('click', function() {
    scrollSmooth(secondBlock)
})

btnSection3.addEventListener('click', function() {
    scrollSmooth(thirdBlock)
})

btnSection4.addEventListener('click', function() {
    scrollSmooth(fourthBlock)
})

btnSection5.addEventListener('click', function() {
    scrollSmooth(fifthBlock)
})

btnSection6.addEventListener('click', function() {
    scrollSmooth(sixthBlock)
})
// btnDown.addEventListener('click', function() {
//     scrollSmooth(secondBlock);
// });