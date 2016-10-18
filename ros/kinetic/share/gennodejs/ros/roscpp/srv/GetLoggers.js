// Auto-generated. Do not edit!

// (in-package roscpp.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let Logger = require('../msg/Logger.js');

//-----------------------------------------------------------

class GetLoggersRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLoggersRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLoggersRequest
    let tmp;
    let len;
    let data = new GetLoggersRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/GetLoggersRequest';
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

class GetLoggersResponse {
  constructor() {
    this.loggers = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLoggersResponse
    // Serialize the length for message field [loggers]
    bufferInfo = _serializer.uint32(obj.loggers.length, bufferInfo);
    // Serialize message field [loggers]
    obj.loggers.forEach((val) => {
      bufferInfo = Logger.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLoggersResponse
    let tmp;
    let len;
    let data = new GetLoggersResponse();
    // Deserialize array length for message field [loggers]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [loggers]
    data.loggers = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Logger.deserialize(buffer);
      data.loggers[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/GetLoggersResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '32e97e85527d4678a8f9279894bb64b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Logger[] loggers
    
    ================================================================================
    MSG: roscpp/Logger
    string name
    string level
    
    `;
  }

};

module.exports = {
  Request: GetLoggersRequest,
  Response: GetLoggersResponse
};
