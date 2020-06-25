/* eslint-disable no-fallthrough */
const updateNameButton = document.getElementById('update-name-button');
const pinkButton = document.getElementById('pink');
const lightGreenButton = document.getElementById('lightGreen');
const lightBlueButton = document.getElementById('lightBlue');
const bg = document.getElementById('nametag');
const nameInput = document.getElementById('input-name');


nameInput.addEventListener('keyup', (event) => {
    //13 is the keycode for the enter key
    if (event.keyCode === 13) updateNameButton.click();
});

updateNameButton.addEventListener('click', () => {
    const nameOutput = document.getElementById('name');
    const intro = document.getElementById('intro');
    let newName = nameInput.value;
    bg.style.backgroundImage = '';
    intro.textContent = 'my name is';

    switch (newName.toUpperCase()) {
        case 'INIGO MONTOYA' :
            newName = `${newName}. You killed my father. Prepare to die.`;
            bg.style.backgroundImage = 'url("https://www.dictionary.com/e/wp-content/uploads/2018/03/Inigo-Montoya1-300x259.jpg")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
            break;
        case 'SLIM SHADY' :
            intro.textContent = "I'm";
            newName = `The real ${newName}.`;
            bg.style.backgroundImage = 'url("https://static.hiphopdx.com/2019/04/190423-eminem-getty-800x600.jpg")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
            break;
        case 'JOHNNY CASH' :
            intro.textContent = "I'm";
            bg.style.backgroundImage = 'url("https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNTc2MTE2NDg3ODI2/i-went-with-johnny-cash-to-folsom-prisons-featured-photo.jpg")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
            break;
        case 'BOB ROSS' :
            intro.textContent = "I'm";
            bg.style.backgroundImage = 'url("https://live.staticflickr.com/1068/549347271_528d0a8c25_w.jpg")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
            break;
        case 'NICK CAGE' :
            //no break statement because we want to catch both Nick and Nicholas
        case 'NICHOLAS CAGE' :
            bg.style.backgroundImage = 'url("https://www.placecage.com/450/350")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
            break;
        case 'CAT' :
        case 'KITTY' :
        case 'KITTEN' :
            bg.style.backgroundImage = 'url("http://placekitten.com/450/350")';
            bg.style.backgroundSize = 'cover';
            bg.style.backgroundRepeat = 'no-repeat';
        default :
            break;            

    }
    nameOutput.textContent = newName;
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