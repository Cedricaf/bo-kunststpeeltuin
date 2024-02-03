# bo-kunststpeeltuin

## Code documentatie (Sara)
- Dit is de documentatie van mijn C++ Arduino code. Ik gebruik de code voor een Arduino met een Servomotor en een pushknop.

### Variables
- Mijn variables die ik gebruik in de code. 
```C++
Servo servo;
```
Hier maak ik de variable servo voor mijn Servomotor. Zo weet de Arduino dat ik de Servomotor bedoel wanneer ik de variable servo gebruik. Ik heb bovenaan de code de Servomotor toegevoegd met deze lijn:
```#include <Servo.h>```

```C++ 
int servoPin = 9;
```
Met deze variable zeg ik tegen Arduino dat de Servo is aangesloten aan pin 9 van de Arduino
```C++ 
int buttonPin = 2;
```
Met deze variable zeg ik tegen Arduino dat de pushbutton is aangesloten aan pin 2 van de Arduino
```C++ 
int buttonState = digitalRead(buttonPin);
```
Deze variable zit bovenin de void loop(). Deze variabele leest de status van de pushbutton in.

> Ik gebruik variables zodat ik niet steeds hoef uit te leggen wat bijvoorbeeld pin 9 is. Door een variable te maken zorg ik ervoor dat dat ik met korte, duidelijke woorden de code kan schrijven.

### Void setup()
- De code die in de void setup() zit.
```c++
servo.attach(servoPin);
```
Deze lijn zorgt ervoor dat de Servo wordt aangesloten aan pin 9, servoPin is de variable voor pin 9; Door deze lijn weet de Arduino dat aan pin 9 een Servomotor zit.
```C++
pinMode(buttonPin, INPUT);
```
Deze lijn vertelt de Arduino dat deze pushbutton wordt gebruikt als input.

>Void setup wordt maar 1 keer uitgevoerd tijdens het opstarten van Arduino. Hier kan ik bijvoorbeeld variables zetten of pins instellen.

### Void loop()
- De code die in de void loop() zit.

>Boven in de void loop() zit de ```buttonState``` variabele die ik in het ```Variables``` stuk heb uitgelegd.

```C++
if(buttonState == HIGHT)
```
Dit stuk zorgt ervoor dat de code alleen wordt uitgevoerd als de status van de pushbutton ```HIGH``` is. De status van de pushbutton wordt ```HIGH``` wanneer er op de knop wordt gedrukt. Dus de code wordt alleen uitgevoerd als de knop is ingedrukt.
Na deze lijn is er een ```{``` toegevoegd omdat dit betekent dat dit een functie is en alles wat erna komt tot de ```}``` bij elkaar hoort.

```C++
servo.write(10);
```
Deze lijn zorgt ervoor dat de Servomotor 10 graden gaat draaien.
```C++
delay(1000);
```
Deze lijn zorgt voor een pauze van 1000 milliseconden, oftewel 1 seconde.

```C++
servo.write(180);
```
Deze lijn zorgt ervoor dat de Servomotor 180 graden gaat draaien.
```C++
delay(1000);
```
Deze lijn zorgt opnieuw voor een pauze van 1 seconde (1000 milliseconden).

Deze code wordt hierna nog een keer herhaald maar dan ongedraaid. Dus de eerste ```servo.write``` gaat naar ```180 graden``` en de laatste gaat naar ```10 graden``` met weer een ```delay(1000)``` ertussen.

Na dit stuk wordt de functie afgesloten met een ```}```.

Na deze funtie komt er nog een laatste lijn voor de ```void loop()``` wordt afgesloten met de ```}```.

```C++
delay(100);
```
Deze lijn zorgt ervoor dat er nog een kleine pauze van 100 milliseconden komt na het uitvoeren van de functie. Dit zorgt ervoor dat leesbaarheid en responsiviteit van de functie wordt verbeterd.

> Void loop() wordt de hele tijd herhaald wanneer ```void setup()``` klaar is. De code in de ```void loop()``` is dus eigenlijk een soort van de maincode.


### Conclusie
De bedoeling is dat er een bloem wordt aangesloten aan de Arduino en dat deze open en dicht gaat met behulp van de Servomotor en dit gebeurd wanneer de pushknop wordt ingedrukt.
Wanneer de pushknop wordt ingedrukt veranderd de status van de variable ```buttonState``` naar ```HIGH```. Dit zorgt ervoor dat de Arduino weet dat deze knop is ingedrukt, wat betekent dat de Arduino nu een functie mag uitvoeren.
De functie zorgt ervoor dat de Servomotor steeds een stukje gaat draaien met steeds een delay van 1 seconde ertussen.
Wanneer de functie is uitgevoerd is er een pauze van 100 milliseconden zodat de functie beter wordt uitgevoerd.

##




## Code documentatie (Cedric)

- Hier is de documentatie van de Javascript die ik heb gebruikt om de webcam video feed te krijgen en de xbox controller werkend te krijgen.

## Const en Variables

- hiermee roep ik het canvas aan en voeg ik een geluid toe.
- Ook zet ik het volume op 0.7 en zet ik video op null en de isSetup functie op false.

```js
const width = 800, height = 600,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    photoSound = new Audio('sound/camera-13695.mp3');

photoSound.volume = 0.7;

let video = null, isSetup = false;
```


## Functions

- Hierbij maak ik een functie aan die een setup voor de webcam doet.
- Ik geef het canvas een hoogte, breedte en ik voeg een clickevent toe zodat wanneer er geklikt wordt, de functie TakePhoto uitgevoert wordt.
- Daarna wil ik toegang tot de webcam krijgen door getUsermedia API te gebruiken.
  
```js
Setup();

function Setup() {
    // Check if setup has already been performed
    if (!isSetup) {
        // Set up canvas properties
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        canvas.style.background = 'lightblue';

        // Access video element and set up click event listener
        video = document.getElementById("camera");
        document.addEventListener('click', TakePhoto);

        // Access webcam using getUserMedia API
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((error) => {
                console.error(`There was an error: ${error}`);
            });

        isSetup = true; // Set isSetup flag to true
    }
}
```

- Ik maak een functie aan die een video frame op het canvas tekent en daar nog een geluid bij afspeelt.
- Met window.addEventListener maak ik een event listener aan die de xbox connectie detecteert.

```js
function TakePhoto(e) {
    e.preventDefault();
    
    // Draw the current video frame on the canvas and play the shutter sound
    ctx.drawImage(video, 0, 0, width, height);
    photoSound.play();
}

// Event listener for detecting Xbox controller connection
window.addEventListener("gamepadconnected", (e) => {
    console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length,
    );
});

```
- Met deze functie wordt er gekeken op de Gamepad API wordt ondersteund in de browser als dat ook zo is, wordt er een interval ingesteld om de checkController functie uit te voeren.

```js
function initControllerListener() {
    // Check if the Gamepad API is supported
    if ("getGamepads" in navigator) {
        setInterval(checkController, 100); // Set up interval to check controller input
    } else {
        console.error("Gamepad API not supported");
    }
}

```
- Bij deze functie wordt gekeken naar of er een knop wordt ingedrukt op de controller.
- Als dit zo is, wordt uiteindelijk de TakePhoto functie uitgevoerd en wordt er een foto gemaakt.

```js
function checkController() {
    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
        if (gamepad) {
            // Find pressed buttons on the controller
            const pressedButtons = gamepad.buttons
                .map((button, i) => ({ pressed: button.pressed, index: i }))
                .filter(button => button.pressed);

            if (pressedButtons.length > 0) {
                // Get the index of the first pressed button and its name
                const buttonIndex = pressedButtons[0].index;
                const buttonName = getButtonName(buttonIndex);

                console.log(`${buttonName} button pressed on the Xbox controller!`);
                TakePhoto(new Event('click')); // Simulate a click event to capture a photo
            }
        }
    }
}

```
- Ik wilde in console laten zien welke van de 4 knopen waren ingedrukt, dus heb ik hier een switch aangemaakt, die verschillende cases kan behandelen en de buttons andere waarden geeft.

```js
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
```

