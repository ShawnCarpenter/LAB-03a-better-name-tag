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
    bg.style.backgroundImage = '';
    if (newName.toUpperCase() === 'INIGO MONTOYA') {
        newName = `${newName}. You killed my father. Prepare to die.`;
        bg.style.backgroundImage = 'url("https://www.dictionary.com/e/wp-content/uploads/2018/03/Inigo-Montoya1-300x259.jpg")';
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundRepeat = 'no-repeat';
    }
    if (newName.toUpperCase() === 'SLIM SHADY') {
        newName = `The real ${newName}.`;
        bg.style.backgroundImage = 'url("https://www.eminem.pro/en/wp-content/uploads/2019/09/slim-e1570098725834.jpg")';
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundRepeat = 'no-repeat';
    }
    nameOutput.textContent = newName;
    // console.log(`Name input was ${newName}`);
});

pinkButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'pink';
    bg.style.backgroundImage = '';
});

lightGreenButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'lightGreen';
    bg.style.backgroundImage = '';
});

lightBlueButton.addEventListener('click', () => {
    bg.style.backgroundColor = 'lightBlue';
    bg.style.backgroundImage = '';
});