// Auto-generated. Do not edit!

// (in-package tf2_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class FrameGraphRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FrameGraphRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FrameGraphRequest
    let tmp;
    let len;
    let data = new FrameGraphRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'tf2_msgs/FrameGraphRequest';
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

class FrameGraphResponse {
  constructor() {
    this.frame_yaml = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FrameGraphResponse
    // Serialize message field [frame_yaml]
    bufferInfo = _serializer.string(obj.frame_yaml, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FrameGraphResponse
    let tmp;
    let len;
    let data = new FrameGraphResponse();
    // Deserialize message field [frame_yaml]
    tmp = _deserializer.string(buffer);
    data.frame_yaml = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'tf2_msgs/FrameGraphResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '437ea58e9463815a0d511c7326b686b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string frame_yaml
    
    
    `;
  }

};

module.exports = {
  Request: FrameGraphRequest,
  Response: FrameGraphResponse
};
