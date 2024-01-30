#include <Servo.h>

Servo servo;
int servoPin = 9;
int buttonPin = 2;
void setup() {
  servo.attach(servoPin);
  pinMode(buttonPin, INPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == HIGH) {
    servo.write(10);
    delay(1000);
    servo.write(180);
    delay(1000);
    servo.write(180);
    delay(1000);
    servo.write(10);
  }

  delay(100);
}
