// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class JointRequestRequest {
  constructor() {
    this.joint_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointRequestRequest
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointRequestRequest
    let tmp;
    let len;
    let data = new JointRequestRequest();
    // Deserialize message field [joint_name]
    tmp = _deserializer.string(buffer);
    data.joint_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/JointRequestRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0be1351618e1dc030eb7959d9a4902de';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string joint_name
    
    `;
  }

};

class JointRequestResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointRequestResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointRequestResponse
    let tmp;
    let len;
    let data = new JointRequestResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/JointRequestResponse';
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
  Request: JointRequestRequest,
  Response: JointRequestResponse
};
