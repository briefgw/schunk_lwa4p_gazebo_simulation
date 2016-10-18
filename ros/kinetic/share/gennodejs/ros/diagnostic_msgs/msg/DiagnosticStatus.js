// Auto-generated. Do not edit!

// (in-package diagnostic_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let KeyValue = require('./KeyValue.js');

//-----------------------------------------------------------

class DiagnosticStatus {
  constructor() {
    this.level = 0;
    this.name = '';
    this.message = '';
    this.hardware_id = '';
    this.values = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DiagnosticStatus
    // Serialize message field [level]
    bufferInfo = _serializer.byte(obj.level, bufferInfo);
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    // Serialize message field [hardware_id]
    bufferInfo = _serializer.string(obj.hardware_id, bufferInfo);
    // Serialize the length for message field [values]
    bufferInfo = _serializer.uint32(obj.values.length, bufferInfo);
    // Serialize message field [values]
    obj.values.forEach((val) => {
      bufferInfo = KeyValue.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DiagnosticStatus
    let tmp;
    let len;
    let data = new DiagnosticStatus();
    // Deserialize message field [level]
    tmp = _deserializer.byte(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [message]
    tmp = _deserializer.string(buffer);
    data.message = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hardware_id]
    tmp = _deserializer.string(buffer);
    data.hardware_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [values]
    data.values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = KeyValue.deserialize(buffer);
      data.values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'diagnostic_msgs/DiagnosticStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd0ce08bc6e5ba34c7754f563a9cabaf1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

// Constants for message
DiagnosticStatus.Constants = {
  OK: 0,
  WARN: 1,
  ERROR: 2,
  STALE: 3,
}

module.exports = DiagnosticStatus;
