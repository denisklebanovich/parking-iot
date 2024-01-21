import json

import paho.mqtt.client as mqtt

from settings import MQTT_BROKER_ADDRESS, MQTT_TOPIC_OUTBOUND, MQTT_TOPIC_INBOUND, PARKING_ID, ENTRY


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
    client.publish(MQTT_TOPIC_INBOUND, message_json)
    print("Message sent!")

def on_message_outbound(client, userdata, msg):
    if msg.topic == MQTT_TOPIC_OUTBOUND:
        message = msg.payload.decode('utf-8')
        
        print(f"Accepted outbound message: {message}")


if __name__ == "__main__":
    client = mqtt.Client()
    client.connect(MQTT_BROKER_ADDRESS, 1883, 60)

    client.loop_start()
    client.subscribe(MQTT_TOPIC_OUTBOUND)
    client.message_callback_add(MQTT_TOPIC_OUTBOUND,  on_message_outbound)

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
        client.loop_stop()
