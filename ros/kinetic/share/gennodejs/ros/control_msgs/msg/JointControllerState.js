// Auto-generated. Do not edit!

// (in-package control_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class JointControllerState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.set_point = 0.0;
    this.process_value = 0.0;
    this.process_value_dot = 0.0;
    this.error = 0.0;
    this.time_step = 0.0;
    this.command = 0.0;
    this.p = 0.0;
    this.i = 0.0;
    this.d = 0.0;
    this.i_clamp = 0.0;
    this.antiwindup = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointControllerState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [set_point]
    bufferInfo = _serializer.float64(obj.set_point, bufferInfo);
    // Serialize message field [process_value]
    bufferInfo = _serializer.float64(obj.process_value, bufferInfo);
    // Serialize message field [process_value_dot]
    bufferInfo = _serializer.float64(obj.process_value_dot, bufferInfo);
    // Serialize message field [error]
    bufferInfo = _serializer.float64(obj.error, bufferInfo);
    // Serialize message field [time_step]
    bufferInfo = _serializer.float64(obj.time_step, bufferInfo);
    // Serialize message field [command]
    bufferInfo = _serializer.float64(obj.command, bufferInfo);
    // Serialize message field [p]
    bufferInfo = _serializer.float64(obj.p, bufferInfo);
    // Serialize message field [i]
    bufferInfo = _serializer.float64(obj.i, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.float64(obj.d, bufferInfo);
    // Serialize message field [i_clamp]
    bufferInfo = _serializer.float64(obj.i_clamp, bufferInfo);
    // Serialize message field [antiwindup]
    bufferInfo = _serializer.bool(obj.antiwindup, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointControllerState
    let tmp;
    let len;
    let data = new JointControllerState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [set_point]
    tmp = _deserializer.float64(buffer);
    data.set_point = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [process_value]
    tmp = _deserializer.float64(buffer);
    data.process_value = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [process_value_dot]
    tmp = _deserializer.float64(buffer);
    data.process_value_dot = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error]
    tmp = _deserializer.float64(buffer);
    data.error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_step]
    tmp = _deserializer.float64(buffer);
    data.time_step = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [command]
    tmp = _deserializer.float64(buffer);
    data.command = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [p]
    tmp = _deserializer.float64(buffer);
    data.p = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i]
    tmp = _deserializer.float64(buffer);
    data.i = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.float64(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_clamp]
    tmp = _deserializer.float64(buffer);
    data.i_clamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [antiwindup]
    tmp = _deserializer.bool(buffer);
    data.antiwindup = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'control_msgs/JointControllerState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '987ad85e4756f3aef7f1e5e7fe0595d1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float64 set_point
    float64 process_value
    float64 process_value_dot
    float64 error
    float64 time_step
    float64 command
    float64 p
    float64 i
    float64 d
    float64 i_clamp
    bool antiwindup
    
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

module.exports = JointControllerState;
