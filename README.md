# bo-kunststpeeltuin

## Code documentatie (Sara)
- Dit is de documentatie van mijn C++ Arduino code. Ik gebruik de code voor een Arduino met een Servomotor en een pushknop.

### Variables
- Mijn variables die ik gebruik in de code
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
Deze variable zit bovenin de void loop(). Deze variable leest de status van de pushbutton in.

### Conclusie
- De bedoeling is dat er een bloem wordt aangesloten aan de Arduino en dat deze open en dicht gaat met behulp van de Servomotor en dit gebeurd wanneer de pushknop wordt ingedrukt.
