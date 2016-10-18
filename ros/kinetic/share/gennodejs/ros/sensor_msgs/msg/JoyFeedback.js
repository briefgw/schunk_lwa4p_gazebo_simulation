// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class JoyFeedback {
  constructor() {
    this.type = 0;
    this.id = 0;
    this.intensity = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JoyFeedback
    // Serialize message field [type]
    bufferInfo = _serializer.uint8(obj.type, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.uint8(obj.id, bufferInfo);
    // Serialize message field [intensity]
    bufferInfo = _serializer.float32(obj.intensity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JoyFeedback
    let tmp;
    let len;
    let data = new JoyFeedback();
    // Deserialize message field [type]
    tmp = _deserializer.uint8(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.uint8(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [intensity]
    tmp = _deserializer.float32(buffer);
    data.intensity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/JoyFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f4dcd73460360d98f36e55ee7f2e46f1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Declare of the type of feedback
    uint8 TYPE_LED    = 0
    uint8 TYPE_RUMBLE = 1
    uint8 TYPE_BUZZER = 2
    
    uint8 type
    
    # This will hold an id number for each type of each feedback.
    # Example, the first led would be id=0, the second would be id=1
    uint8 id
    
    # Intensity of the feedback, from 0.0 to 1.0, inclusive.  If device is
    # actually binary, driver should treat 0<=x<0.5 as off, 0.5<=x<=1 as on.
    float32 intensity
    
    
    `;
  }

};

// Constants for message
JoyFeedback.Constants = {
  TYPE_LED: 0,
  TYPE_RUMBLE: 1,
  TYPE_BUZZER: 2,
}

module.exports = JoyFeedback;
