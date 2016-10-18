// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class BodyRequestRequest {
  constructor() {
    this.body_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BodyRequestRequest
    // Serialize message field [body_name]
    bufferInfo = _serializer.string(obj.body_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BodyRequestRequest
    let tmp;
    let len;
    let data = new BodyRequestRequest();
    // Deserialize message field [body_name]
    tmp = _deserializer.string(buffer);
    data.body_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/BodyRequestRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5eade9afe7f232d78005bd0cafeab755';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string body_name
    
    `;
  }

};

class BodyRequestResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BodyRequestResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BodyRequestResponse
    let tmp;
    let len;
    let data = new BodyRequestResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/BodyRequestResponse';
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
  Request: BodyRequestRequest,
  Response: BodyRequestResponse
};
