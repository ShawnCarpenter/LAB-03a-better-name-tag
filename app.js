const updateNameButton = document.getElementById('update-name-button');
const pinkButton = document.getElementById('pink');
const lightGreenButton = document.getElementById('lightGreen');
const lightBlueButton = document.getElementById('lightBlue');
const bg = document.getElementById('nametag');
updateNameButton.addEventListener('click', () => {
    const nameInput = document.getElementById('input-name');
    const nameOutput = document.getElementById('name');
    // console.log(nameOutput);
    // console.log(nameInput);
    let newName = nameInput.value;
    if (newName.toUpperCase() === 'INIGO MONTOYA') {
        newName = `${newName}. You killed my father. Prepare to die.`;
        nameOutput.style.fontSize = '10pt';
        bg.style.backgroundImage = 'url("https://www.dictionary.com/e/wp-content/uploads/2018/03/Inigo-Montoya1-300x259.jpg")';
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundRepeat = 'no-repeat';
    }
    nameOutput.textContent = newName;
    // console.log(`Name input was ${newName}`);
});

pinkButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'pink';
});

lightGreenButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'lightGreen';
});

lightBlueButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'lightBlue';
});