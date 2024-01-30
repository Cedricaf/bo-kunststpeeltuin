
// constants won't change
const int LIGHT_SENSOR_PIN = A0; // Arduino pin connected to light sensor's  pin
const int LED_PIN     = 3;
const int LED_PIN_2   = 4;


// variables will change:
int analogValue;


void setup() {
  pinMode(LED_PIN, OUTPUT); 
  Serial.begin(115200);
}

void loop() {
  analogValue = analogRead(LIGHT_SENSOR_PIN); // read the input on analog pin
  Serial.print("Analog Value: ");
  Serial.println(analogValue);
  if(analogValue < 1000){
    digitalWrite(LED_PIN, HIGH); 
    digitalWrite(LED_PIN_2, HIGH);
    }
  
   
  else
    digitalWrite(LED_PIN, LOW);  
    digitalWrite(LED_PIN_2, LOW);
}
