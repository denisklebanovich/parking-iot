import RPi.GPIO as GPIO
from config import *
from mfrc522 import MFRC522
from datetime import datetime
import paho.mqtt.client as mqtt
from settings import MQTT_BROKER_ADDRESS, MQTT_TOPIC, PARKING_ID, ENTRY
import json


def send_message(rfidNumber):
    # Message content
    message_content = {
        "rfid": rfidNumber,
        "parkingNumber": PARKING_ID,
        "entry": ENTRY
    }

    # Convert message content to JSON
    message_json = json.dumps(message_content)

    if not client.is_connected():
        print("Reconnecting to MQTT broker...")
        client.reconnect()

    # Publish the message to the specified topic
    result = client.publish(MQTT_TOPIC, message_json)
    if result.rc == mqtt.MQTT_ERR_SUCCESS:
        print("Message sent successfully.")
    else:
        print(f"Failed to send message with error code {result.rc}")

class RFIDController:
    def __init__(self):
        self.mfrc522_reader = MFRC522()
        self.last_time = datetime.now()
        self.is_being_used = False

    def read(self):
        (status, TagType) = self.mfrc522_reader.MFRC522_Request(self.mfrc522_reader.PICC_REQIDL)
        if status == self.mfrc522_reader.MI_OK:
            (status, uid) = self.mfrc522_reader.MFRC522_Anticoll()
    
            if status == self.mfrc522_reader.MI_OK:
                num = 0
                for i in range(0, len(uid)):
                    num += uid[i] << (i * 8)

                new_time = datetime.now()
                
                if (new_time - self.last_time).seconds > 0.6:
                    self.last_time = new_time
                    self.is_being_used = True
                    send_message(num)
                    return True
                
                self.last_time = new_time
                self.is_being_used = False
            else:
                self.is_being_used = False
        else:
            self.is_being_used = False
        return False

def buzzer(state):
    GPIO.output(buzzerPin, not state)

def run_rfid_controller(rfid_controller, time_period=0.5):
    was_read_successful = rfid_controller.read()
    if was_read_successful:
        buzzer(True)

    if rfid_controller.last_time is not None:
        diff = datetime.now() - rfid_controller.last_time
        if diff.seconds >= time_period:
            buzzer(False)

    if not rfid_controller.is_being_used:
        buzzer(False)

if __name__ == "__main__":
    # Create an MQTT client instance
    RFIDController = RFIDController()
    client = mqtt.Client()
    # Set the on_connect callback
    client.connect(MQTT_BROKER_ADDRESS, 1883, 60)
    client.loop_start()

    try:
        while True:
            run_rfid_controller(RFIDController)
    except KeyboardInterrupt:
        print("\nExiting the script.")
    finally:
        # Disconnect from the MQTT broker
        client.disconnect()
        client.loop_stop()