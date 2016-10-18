// Auto-generated. Do not edit!

// (in-package turtlesim.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetPenRequest {
  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.width = 0;
    this.off = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPenRequest
    // Serialize message field [r]
    bufferInfo = _serializer.uint8(obj.r, bufferInfo);
    // Serialize message field [g]
    bufferInfo = _serializer.uint8(obj.g, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.uint8(obj.b, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint8(obj.width, bufferInfo);
    // Serialize message field [off]
    bufferInfo = _serializer.uint8(obj.off, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPenRequest
    let tmp;
    let len;
    let data = new SetPenRequest();
    // Deserialize message field [r]
    tmp = _deserializer.uint8(buffer);
    data.r = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [g]
    tmp = _deserializer.uint8(buffer);
    data.g = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.uint8(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.uint8(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [off]
    tmp = _deserializer.uint8(buffer);
    data.off = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/SetPenRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9f452acce566bf0c0954594f69a8e41b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 r
    uint8 g
    uint8 b
    uint8 width
    uint8 off
    
    `;
  }

};

class SetPenResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPenResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPenResponse
    let tmp;
    let len;
    let data = new SetPenResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/SetPenResponse';
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

module.exports = {
  Request: SetPenRequest,
  Response: SetPenResponse
};
