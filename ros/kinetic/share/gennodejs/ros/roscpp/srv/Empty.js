// Auto-generated. Do not edit!

// (in-package roscpp.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class EmptyRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptyRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptyRequest
    let tmp;
    let len;
    let data = new EmptyRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/EmptyRequest';
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

class EmptyResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type EmptyResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type EmptyResponse
    let tmp;
    let len;
    let data = new EmptyResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'roscpp/EmptyResponse';
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
  Request: EmptyRequest,
  Response: EmptyResponse
};
