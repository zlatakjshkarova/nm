const nameInput = document.querySelector("#name");
const myBtn = document.querySelector('#myBtn');
const gs = document.querySelector('#gs');




myBtn.addEventListener('click', () => {
    i++;
    let num = nameInput.value
    if (num == random) {
        gs.textContent = 'ты угодал'
    } else {
        gs.textContent = 'ты не угодал'
    }
})

let random = getRandomInt(1, 20)
console.log(random);
let i = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}



