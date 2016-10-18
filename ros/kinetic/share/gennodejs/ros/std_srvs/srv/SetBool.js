// Auto-generated. Do not edit!

// (in-package std_srvs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetBoolRequest {
  constructor() {
    this.data = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetBoolRequest
    // Serialize message field [data]
    bufferInfo = _serializer.bool(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetBoolRequest
    let tmp;
    let len;
    let data = new SetBoolRequest();
    // Deserialize message field [data]
    tmp = _deserializer.bool(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'std_srvs/SetBoolRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8b94c1b53db61fb6aed406028ad6332a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool data
    
    `;
  }

};

class SetBoolResponse {
  constructor() {
    this.success = false;
    this.message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetBoolResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [message]
    bufferInfo = _serializer.string(obj.message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetBoolResponse
    let tmp;
    let len;
    let data = new SetBoolResponse();
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
    return 'std_srvs/SetBoolResponse';
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
  Request: SetBoolRequest,
  Response: SetBoolResponse
};
