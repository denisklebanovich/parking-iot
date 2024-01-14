import json

import paho.mqtt.client as mqtt

from settings import MQTT_BROKER_ADDRESS, MQTT_TOPIC, PARKING_ID, ENTRY


def send_message():
    # Message content
    message_content = {
        "parkingId": PARKING_ID,
        "rfid": 123456789,
        "entry": ENTRY
    }

    # Convert message content to JSON
    message_json = json.dumps(message_content)

    # Publish the message to the specified topic
    client.publish(MQTT_TOPIC, message_json)
    print("Message sent!")


if __name__ == "__main__":
    # Create an MQTT client instance
    client = mqtt.Client()
    # Set the on_connect callback
    client.connect(MQTT_BROKER_ADDRESS, 1883, 60)

    try:
        while True:
            user_input = input("Type '1' to send a message, or press Ctrl+C to exit: ")
            if user_input == '1':
                send_message()

    except KeyboardInterrupt:
        print("\nExiting the script.")
    finally:
        # Disconnect from the MQTT broker
        client.disconnect()
