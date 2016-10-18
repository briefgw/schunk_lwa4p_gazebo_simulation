// Auto-generated. Do not edit!

// (in-package diagnostic_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class AddDiagnosticsRequest {
  constructor() {
    this.load_namespace = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddDiagnosticsRequest
    // Serialize message field [load_namespace]
    bufferInfo = _serializer.string(obj.load_namespace, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddDiagnosticsRequest
    let tmp;
    let len;
    let data = new AddDiagnosticsRequest();
    // Deserialize message field [load_namespace]
    tmp = _deserializer.string(buffer);
    data.load_namespace = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'diagnostic_msgs/AddDiagnosticsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c26cf6e164288fbc6050d74f838bcdf0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    string load_namespace
    
    `;
  }

};

class AddDiagnosticsResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AddDiagnosticsResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AddDiagnosticsResponse
    let tmp;
    let len;
    let data = new AddDiagnosticsResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [message]
    tmp = _deserializer.string(buffer);
    data.message = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'diagnostic_msgs/AddDiagnosticsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '937c9679a518e3a18d831e57125ea522';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    bool success
    
    
    string message
    
    
    `;
  }

};

module.exports = {
  Request: AddDiagnosticsRequest,
  Response: AddDiagnosticsResponse
};
