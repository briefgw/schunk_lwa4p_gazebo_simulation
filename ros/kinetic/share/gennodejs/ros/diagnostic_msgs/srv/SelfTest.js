// Auto-generated. Do not edit!

// (in-package diagnostic_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DiagnosticStatus = require('../msg/DiagnosticStatus.js');

//-----------------------------------------------------------

class SelfTestRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SelfTestRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SelfTestRequest
    let tmp;
    let len;
    let data = new SelfTestRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'diagnostic_msgs/SelfTestRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

class SelfTestResponse {
  constructor() {
    this.id = '';
    this.passed = 0;
    this.status = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SelfTestResponse
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [passed]
    bufferInfo = _serializer.byte(obj.passed, bufferInfo);
    // Serialize the length for message field [status]
    bufferInfo = _serializer.uint32(obj.status.length, bufferInfo);
    // Serialize message field [status]
    obj.status.forEach((val) => {
      bufferInfo = DiagnosticStatus.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SelfTestResponse
    let tmp;
    let len;
    let data = new SelfTestResponse();
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [passed]
    tmp = _deserializer.byte(buffer);
    data.passed = tmp.data;
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
    // Returns string type for a service object
    return 'diagnostic_msgs/SelfTestResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ac21b1bab7ab17546986536c22eb34e9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string id
    byte passed
    DiagnosticStatus[] status
    
    
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

module.exports = {
  Request: SelfTestRequest,
  Response: SelfTestResponse
};
