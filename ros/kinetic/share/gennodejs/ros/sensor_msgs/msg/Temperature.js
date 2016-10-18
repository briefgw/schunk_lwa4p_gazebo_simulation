// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Temperature {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.temperature = 0.0;
    this.variance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Temperature
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [temperature]
    bufferInfo = _serializer.float64(obj.temperature, bufferInfo);
    // Serialize message field [variance]
    bufferInfo = _serializer.float64(obj.variance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Temperature
    let tmp;
    let len;
    let data = new Temperature();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [temperature]
    tmp = _deserializer.float64(buffer);
    data.temperature = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [variance]
    tmp = _deserializer.float64(buffer);
    data.variance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Temperature';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ff71b307acdbe7c871a5a6d7ed359100';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
     # Single temperature reading.
    
     Header header           # timestamp is the time the temperature was measured
                             # frame_id is the location of the temperature reading
    
     float64 temperature     # Measurement of the Temperature in Degrees Celsius
    
     float64 variance        # 0 is interpreted as variance unknown
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

module.exports = Temperature;
