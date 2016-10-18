// Auto-generated. Do not edit!

// (in-package schunk_canopen_driver.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class HomeWithJointNamesRequest {
  constructor() {
    this.joint_names = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HomeWithJointNamesRequest
    // Serialize the length for message field [joint_names]
    bufferInfo = _serializer.uint32(obj.joint_names.length, bufferInfo);
    // Serialize message field [joint_names]
    obj.joint_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HomeWithJointNamesRequest
    let tmp;
    let len;
    let data = new HomeWithJointNamesRequest();
    // Deserialize array length for message field [joint_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_names]
    data.joint_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.joint_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'schunk_canopen_driver/HomeWithJointNamesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '587f4b1b8847cbdf153605e9cf8ebaed';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string[] joint_names
    
    `;
  }

};

class HomeWithJointNamesResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HomeWithJointNamesResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HomeWithJointNamesResponse
    let tmp;
    let len;
    let data = new HomeWithJointNamesResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'schunk_canopen_driver/HomeWithJointNamesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '358e233cde0c8a8bcfea4ce193f8fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    
    
    `;
  }

};

module.exports = {
  Request: HomeWithJointNamesRequest,
  Response: HomeWithJointNamesResponse
};
