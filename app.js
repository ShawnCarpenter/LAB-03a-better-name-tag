const updateNameButton = document.getElementById('update-name-button');
const pinkButton = document.getElementById('pink');
const lightGreenButton = document.getElementById('lightGreen');
const lightBlueButton = document.getElementById('lightBlue');

updateNameButton.addEventListener('click', () => {
    const nameInput = document.getElementById('input-name');
    const nameOutput = document.getElementById('name');
    console.log(nameOutput);
    // console.log(nameInput);
    const newName = nameInput.value;
    nameOutput.textContent = newName;
    // console.log(`Name input was ${newName}`);
});

pinkButton.addEventListener('click', () => {
    const bg = document.getElementById('nametag');
    bg.style.backgroundColor = 'pink';
    // console.log(bg);
});

lightGreenButton.addEventListener('click', () => {
    const bg = document.getElementById('nametag');
    bg.style.backgroundColor = 'lightGreen';
    // console.log(bg);
});

lightBlueButton.addEventListener('click', () => {
    const bg = document.getElementById('nametag');
    bg.style.backgroundColor = 'lightBlue';
    // console.log(bg);
})