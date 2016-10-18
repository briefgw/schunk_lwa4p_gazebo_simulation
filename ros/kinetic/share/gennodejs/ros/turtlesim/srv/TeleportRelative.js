// Auto-generated. Do not edit!

// (in-package turtlesim.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class TeleportRelativeRequest {
  constructor() {
    this.linear = 0.0;
    this.angular = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TeleportRelativeRequest
    // Serialize message field [linear]
    bufferInfo = _serializer.float32(obj.linear, bufferInfo);
    // Serialize message field [angular]
    bufferInfo = _serializer.float32(obj.angular, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TeleportRelativeRequest
    let tmp;
    let len;
    let data = new TeleportRelativeRequest();
    // Deserialize message field [linear]
    tmp = _deserializer.float32(buffer);
    data.linear = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular]
    tmp = _deserializer.float32(buffer);
    data.angular = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/TeleportRelativeRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9d5c2dcd348ac8f76ce2a4307bd63a13';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 linear
    float32 angular
    
    `;
  }

};

class TeleportRelativeResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TeleportRelativeResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TeleportRelativeResponse
    let tmp;
    let len;
    let data = new TeleportRelativeResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/TeleportRelativeResponse';
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
  Request: TeleportRelativeRequest,
  Response: TeleportRelativeResponse
};
