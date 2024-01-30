#define REDPIN 5
#define GREENPIN 6
#define BLUEPIN 3
const int LIGHT_SENSOR_PIN = A0;

int analogValue;

void setup() {
  pinMode(REDPIN, OUTPUT);
  pinMode(GREENPIN, OUTPUT);
  pinMode(BLUEPIN, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  // Set the RGB values to create a steady light  // Set red to maximum intensity 255
               // Wait for 1 second        
  analogValue = analogRead(LIGHT_SENSOR_PIN); // read the input on analog pin
  Serial.print("Analog Value: ");
  Serial.println(analogValue);  
    delay(1000); 
   if(analogValue > 400){
     analogWrite(REDPIN, 0);   // Set red to maximum intensity 255
    }


    else 
    analogWrite(REDPIN, 255);
}
