// Auto-generated. Do not edit!

// (in-package turtlesim.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class TeleportAbsoluteRequest {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.theta = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TeleportAbsoluteRequest
    // Serialize message field [x]
    bufferInfo = _serializer.float32(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float32(obj.y, bufferInfo);
    // Serialize message field [theta]
    bufferInfo = _serializer.float32(obj.theta, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TeleportAbsoluteRequest
    let tmp;
    let len;
    let data = new TeleportAbsoluteRequest();
    // Deserialize message field [x]
    tmp = _deserializer.float32(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float32(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [theta]
    tmp = _deserializer.float32(buffer);
    data.theta = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/TeleportAbsoluteRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a130bc60ee6513855dc62ea83fcc5b20';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 x
    float32 y
    float32 theta
    
    `;
  }

};

class TeleportAbsoluteResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TeleportAbsoluteResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TeleportAbsoluteResponse
    let tmp;
    let len;
    let data = new TeleportAbsoluteResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'turtlesim/TeleportAbsoluteResponse';
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
  Request: TeleportAbsoluteRequest,
  Response: TeleportAbsoluteResponse
};
