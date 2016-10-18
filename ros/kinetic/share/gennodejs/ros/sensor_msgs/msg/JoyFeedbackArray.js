// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let JoyFeedback = require('./JoyFeedback.js');

//-----------------------------------------------------------

class JoyFeedbackArray {
  constructor() {
    this.array = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JoyFeedbackArray
    // Serialize the length for message field [array]
    bufferInfo = _serializer.uint32(obj.array.length, bufferInfo);
    // Serialize message field [array]
    obj.array.forEach((val) => {
      bufferInfo = JoyFeedback.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JoyFeedbackArray
    let tmp;
    let len;
    let data = new JoyFeedbackArray();
    // Deserialize array length for message field [array]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [array]
    data.array = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = JoyFeedback.deserialize(buffer);
      data.array[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/JoyFeedbackArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cde5730a895b1fc4dee6f91b754b213d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message publishes values for multiple feedback at once. 
    JoyFeedback[] array
    ================================================================================
    MSG: sensor_msgs/JoyFeedback
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

module.exports = JoyFeedbackArray;
