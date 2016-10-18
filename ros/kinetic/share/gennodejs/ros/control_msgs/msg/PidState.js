// Auto-generated. Do not edit!

// (in-package control_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PidState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.timestep = {secs: 0, nsecs: 0};
    this.error = 0.0;
    this.error_dot = 0.0;
    this.p_error = 0.0;
    this.i_error = 0.0;
    this.d_error = 0.0;
    this.p_term = 0.0;
    this.i_term = 0.0;
    this.d_term = 0.0;
    this.i_max = 0.0;
    this.i_min = 0.0;
    this.output = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PidState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [timestep]
    bufferInfo = _serializer.duration(obj.timestep, bufferInfo);
    // Serialize message field [error]
    bufferInfo = _serializer.float64(obj.error, bufferInfo);
    // Serialize message field [error_dot]
    bufferInfo = _serializer.float64(obj.error_dot, bufferInfo);
    // Serialize message field [p_error]
    bufferInfo = _serializer.float64(obj.p_error, bufferInfo);
    // Serialize message field [i_error]
    bufferInfo = _serializer.float64(obj.i_error, bufferInfo);
    // Serialize message field [d_error]
    bufferInfo = _serializer.float64(obj.d_error, bufferInfo);
    // Serialize message field [p_term]
    bufferInfo = _serializer.float64(obj.p_term, bufferInfo);
    // Serialize message field [i_term]
    bufferInfo = _serializer.float64(obj.i_term, bufferInfo);
    // Serialize message field [d_term]
    bufferInfo = _serializer.float64(obj.d_term, bufferInfo);
    // Serialize message field [i_max]
    bufferInfo = _serializer.float64(obj.i_max, bufferInfo);
    // Serialize message field [i_min]
    bufferInfo = _serializer.float64(obj.i_min, bufferInfo);
    // Serialize message field [output]
    bufferInfo = _serializer.float64(obj.output, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PidState
    let tmp;
    let len;
    let data = new PidState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timestep]
    tmp = _deserializer.duration(buffer);
    data.timestep = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error]
    tmp = _deserializer.float64(buffer);
    data.error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_dot]
    tmp = _deserializer.float64(buffer);
    data.error_dot = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [p_error]
    tmp = _deserializer.float64(buffer);
    data.p_error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_error]
    tmp = _deserializer.float64(buffer);
    data.i_error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d_error]
    tmp = _deserializer.float64(buffer);
    data.d_error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [p_term]
    tmp = _deserializer.float64(buffer);
    data.p_term = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_term]
    tmp = _deserializer.float64(buffer);
    data.i_term = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d_term]
    tmp = _deserializer.float64(buffer);
    data.d_term = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_max]
    tmp = _deserializer.float64(buffer);
    data.i_max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_min]
    tmp = _deserializer.float64(buffer);
    data.i_min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [output]
    tmp = _deserializer.float64(buffer);
    data.output = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'control_msgs/PidState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b138ec00e886c10e73f27e8712252ea6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    duration timestep
    float64 error
    float64 error_dot
    float64 p_error
    float64 i_error
    float64 d_error
    float64 p_term
    float64 i_term
    float64 d_term
    float64 i_max
    float64 i_min
    float64 output
    
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

module.exports = PidState;
