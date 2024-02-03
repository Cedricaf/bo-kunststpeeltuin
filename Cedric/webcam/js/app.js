const width = 800, height = 600,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    photoSound = new Audio('sound/camera-13695.mp3');

    photoSound.volume = 0.7;

let video = null, isSetup = false;

Setup();

function Setup() {
    if (!isSetup) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.background = 'lightblue';

        video = document.getElementById("camera");
        document.addEventListener('click', TakePhoto);

        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((error) => {
                console.error(`There was an error: ${error}`);
            });

        isSetup = true;
    }
}

function TakePhoto(e) {
    e.preventDefault();
    
    ctx.drawImage(video, 0, 0, width, height)
    photoSound.play();
}

window.addEventListener("gamepadconnected", (e) => {
    console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length,
    );
});

function initControllerListener() {
    if ("getGamepads" in navigator) {
        setInterval(checkController, 100);
    } else {
        console.error("Gamepad API not supported");
    }
}

function checkController() {
    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
        if (gamepad) {
            const pressedButtons = gamepad.buttons
                .map((button, i) => ({ pressed: button.pressed, index: i }))
                .filter(button => button.pressed);

            if (pressedButtons.length > 0) {
                const buttonIndex = pressedButtons[0].index;
                const buttonName = getButtonName(buttonIndex);

                console.log(`${buttonName} button pressed on the Xbox controller!`);
                TakePhoto(new Event('click'));
            }
        }
    }
}

function getButtonName(buttonIndex) {
    switch (buttonIndex) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "X";
        case 3:
            return "Y";

        default:
            return `Button ${buttonIndex}`;
    }
}

initControllerListener();
