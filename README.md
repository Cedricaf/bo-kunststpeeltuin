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