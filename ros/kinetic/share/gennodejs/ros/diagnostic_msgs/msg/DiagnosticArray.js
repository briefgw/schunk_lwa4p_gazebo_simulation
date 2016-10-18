// Auto-generated. Do not edit!

// (in-package diagnostic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let DiagnosticStatus = require('./DiagnosticStatus.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class DiagnosticArray {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.status = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DiagnosticArray
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [status]
    bufferInfo = _serializer.uint32(obj.status.length, bufferInfo);
    // Serialize message field [status]
    obj.status.forEach((val) => {
      bufferInfo = DiagnosticStatus.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DiagnosticArray
    let tmp;
    let len;
    let data = new DiagnosticArray();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [status]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    data.status = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = DiagnosticStatus.deserialize(buffer);
      data.status[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'diagnostic_msgs/DiagnosticArray';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '60810da900de1dd6ddd437c3503511da';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message is used to send diagnostic information about the state of the robot
    Header header #for timestamp
    DiagnosticStatus[] status # an array of components being reported on
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
    
    ================================================================================
    MSG: diagnostic_msgs/DiagnosticStatus
    # This message holds the status of an individual component of the robot.
    # 
    
    # Possible levels of operations
    byte OK=0
    byte WARN=1
    byte ERROR=2
    byte STALE=3
    
    byte level # level of operation enumerated above 
    string name # a description of the test/component reporting
    string message # a description of the status
    string hardware_id # a hardware unique string
    KeyValue[] values # an array of values associated with the status
    
    
    ================================================================================
    MSG: diagnostic_msgs/KeyValue
    string key # what to label this value when viewing
    string value # a value to track over time
    
    `;
  }

};

module.exports = DiagnosticArray;
