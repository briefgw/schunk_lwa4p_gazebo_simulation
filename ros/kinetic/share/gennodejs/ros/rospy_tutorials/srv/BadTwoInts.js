// Auto-generated. Do not edit!

// (in-package rospy_tutorials.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class BadTwoIntsRequest {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BadTwoIntsRequest
    // Serialize message field [a]
    bufferInfo = _serializer.int64(obj.a, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.int32(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BadTwoIntsRequest
    let tmp;
    let len;
    let data = new BadTwoIntsRequest();
    // Deserialize message field [a]
    tmp = _deserializer.int64(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.int32(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'rospy_tutorials/BadTwoIntsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '29bb5c7dea8bf822f53e94b0ee5a3a56';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    int64 a
    int32 b
    
    `;
  }

};

class BadTwoIntsResponse {
  constructor() {
    this.sum = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BadTwoIntsResponse
    // Serialize message field [sum]
    bufferInfo = _serializer.int32(obj.sum, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BadTwoIntsResponse
    let tmp;
    let len;
    let data = new BadTwoIntsResponse();
    // Deserialize message field [sum]
    tmp = _deserializer.int32(buffer);
    data.sum = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'rospy_tutorials/BadTwoIntsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0ba699c25c9418c0366f3595c0c8e8ec';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 sum
    
    
    `;
  }

};

module.exports = {
  Request: BadTwoIntsRequest,
  Response: BadTwoIntsResponse
};
