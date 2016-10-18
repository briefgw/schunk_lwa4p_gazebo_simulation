// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Joy {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.axes = [];
    this.buttons = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Joy
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [axes]
    bufferInfo = _serializer.uint32(obj.axes.length, bufferInfo);
    // Serialize message field [axes]
    obj.axes.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize the length for message field [buttons]
    bufferInfo = _serializer.uint32(obj.buttons.length, bufferInfo);
    // Serialize message field [buttons]
    obj.buttons.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Joy
    let tmp;
    let len;
    let data = new Joy();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [axes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [axes]
    data.axes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.axes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [buttons]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [buttons]
    data.buttons = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.buttons[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Joy';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5a9ea5f83505693b71e785041e67a8bb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Reports the state of a joysticks axes and buttons.
    Header header           # timestamp in the header is the time the data is received from the joystick
    float32[] axes          # the axes measurements from a joystick
    int32[] buttons         # the buttons measurements from a joystick 
    
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

module.exports = Joy;
