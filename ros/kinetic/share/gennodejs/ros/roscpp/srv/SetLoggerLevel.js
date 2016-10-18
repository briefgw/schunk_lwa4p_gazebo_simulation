// Auto-generated. Do not edit!

// (in-package roscpp.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetLoggerLevelRequest {
  constructor() {
    this.logger = '';
    this.level = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetLoggerLevelRequest
    // Serialize message field [logger]
    bufferInfo = _serializer.string(obj.logger, bufferInfo);
    // Serialize message field [level]
    bufferInfo = _serializer.string(obj.level, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetLoggerLevelRequest
    let tmp;
    let len;
    let data = new SetLoggerLevelRequest();
    // Deserialize message field [logger]
    tmp = _deserializer.string(buffer);
    data.logger = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [level]
    tmp = _deserializer.string(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/SetLoggerLevelRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '51da076440d78ca1684d36c868df61ea';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string logger
    string level
    
    `;
  }

};

class SetLoggerLevelResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetLoggerLevelResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetLoggerLevelResponse
    let tmp;
    let len;
    let data = new SetLoggerLevelResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/SetLoggerLevelResponse';
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
  Request: SetLoggerLevelRequest,
  Response: SetLoggerLevelResponse
};
