// Selects all elements with the class "drum" and stores them in the drumButtons array
const drumButtons = document.querySelectorAll(".drum");


// Adds a click event listener to each button in the drumButtons array
for (let i = 0; i < drumButtons.length; i++) {

    // When a button is clicked, calls playSound function and passes in the text content of the button
    // Also calls animateButton function and passes in the text content of the button
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        // Retrieves the text content of the clicked button and stores it in a variable
        let buttonText = this.textContent;

        playSound(buttonText);
        animateButton(buttonText);
    });
}


// Adds a key press event listener to the entire document
document.addEventListener('keypress', function (event) {

    // When a key is pressed, call playSound function and pass in the key that was pressed
    // Also call animateButton function and pass in the key that was pressed
    playSound(event.key);
    animateButton(event.key);
});


// Takes in a key (either the text content of the button or the key that was pressed) and plays a sound corresponding to that key
function playSound(key) {

    let track = ''; //Initializes the variable track to an empty string that will later hold the file path of the sound to be played

    // Uses a switch statement to determine which sound to play based on the key that was pressed or button that was clicked
    switch (key) {
        case "w":
            track = "sounds/tom-1.mp3";
            break;

        case "a":
            track = "sounds/tom-2.mp3";
            break;

        case "s":
            track = "sounds/tom-3.mp3";
            break;

        case "d":
            track = "sounds/tom-4.mp3";
            break;

        case "j":
            track = "sounds/snare.mp3";
            break;

        case "k":
            track = "sounds/crash.mp3";
            break;

        case "l":
            track = "sounds/kick-bass.mp3";
            break;

        default:
            // If an invalid key was pressed or an invalid button was clicked, log the key to the console
            console.log(key);
    }

    // Creates a new Audio object with the track to be played and calls the play method
    let audio = new Audio(track);
    audio.play();
}


// Takes in a key (either the text content of the button or the key that was pressed) and adds a visual effect to the corresponding button
function animateButton(key) {

    // Select the button with the class that matches the key that was pressed or button that was clicked
    let activeButton = document.querySelector("." + key);

    // Add the class "pressed" to the selected button to animate it
    activeButton.classList.add('pressed');

    // Remove the "pressed" class from the selected button after 100 milliseconds to stop the animation
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}