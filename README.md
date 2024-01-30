# bo-kunststpeeltuin

## Code documentatie (Sara)
- Dit is de documentatie van mijn C++ Arduino code. Ik gebruik de code voor een Arduino met een Servomotor en een pushknop.

### Variables
- Mijn variables die ik gebruik in de code. 
```C++
Servo servo;
```
> Hier maak ik de variable servo voor mijn Servomotor. Zo weet de Arduino dat ik de Servomotor bedoel wanneer ik de variable servo gebruik. Ik heb bovenaan de code de Servomotor toegevoegd met deze lijn:
```C++
#include <Servo.h>
```

```C++ 
int servoPin = 9;
```
> Met deze variable zeg ik tegen Arduino dat de Servo is aangesloten aan pin 9 van de Arduino
```C++ 
int buttonPin = 2;
```
> Met deze variable zeg ik tegen Arduino dat de pushbutton is aangesloten aan pin 2 van de Arduino
```C++ 
int buttonState = digitalRead(buttonPin);
```
> Deze variable zit bovenin de void loop(). Deze variable leest de status van de pushbutton in.

> Ik gebruik variables zodat ik niet steeds hoef uit te leggen wat bijvoorbeeld pin 9 is. Door een variable te maken zorg ik ervoor dat dat ik met korte, duidelijke woorden de code kan schrijven.

### Void setup()
- De code die in de void setup() zit.
```c++
servo.attach(servoPin);
```
> Deze lijn zorgt ervoor dat de Servo wordt aangesloten aan pin 9, servoPin is de variable voor pin 9; Door deze lijn weet de Arduino dat aan pin 9 een Servomotor zit.
```c++
pinMode(buttonPin, INPUT);
```
> Deze lijn vertelt de Arduino dat deze pushbutton wordt gebruikt als input.

>Void setup wordt maar 1 keer uitgevoerd tijdens het opstarten van Arduino. Hier kan ik bijvoorbeeld variables zetten of pins instellen.

### Conclusie
- De bedoeling is dat er een bloem wordt aangesloten aan de Arduino en dat deze open en dicht gaat met behulp van de Servomotor en dit gebeurd wanneer de pushknop wordt ingedrukt.
