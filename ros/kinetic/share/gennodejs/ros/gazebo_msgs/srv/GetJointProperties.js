// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetJointPropertiesRequest {
  constructor() {
    this.joint_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetJointPropertiesRequest
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetJointPropertiesRequest
    let tmp;
    let len;
    let data = new GetJointPropertiesRequest();
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
    return 'gazebo_msgs/GetJointPropertiesRequest';
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

class GetJointPropertiesResponse {
  constructor() {
    this.type = 0;
    this.damping = [];
    this.position = [];
    this.rate = [];
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetJointPropertiesResponse
    // Serialize message field [type]
    bufferInfo = _serializer.uint8(obj.type, bufferInfo);
    // Serialize the length for message field [damping]
    bufferInfo = _serializer.uint32(obj.damping.length, bufferInfo);
    // Serialize message field [damping]
    obj.damping.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [position]
    bufferInfo = _serializer.uint32(obj.position.length, bufferInfo);
    // Serialize message field [position]
    obj.position.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [rate]
    bufferInfo = _serializer.uint32(obj.rate.length, bufferInfo);
    // Serialize message field [rate]
    obj.rate.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetJointPropertiesResponse
    let tmp;
    let len;
    let data = new GetJointPropertiesResponse();
    // Deserialize message field [type]
    tmp = _deserializer.uint8(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [damping]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [damping]
    data.damping = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.damping[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [position]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    data.position = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.position[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [rate]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rate]
    data.rate = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.rate[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status_message]
    tmp = _deserializer.string(buffer);
    data.status_message = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetJointPropertiesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cd7b30a39faa372283dc94c5f6457f82';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    uint8 type
    uint8 REVOLUTE    = 0
    uint8 CONTINUOUS  = 1
    uint8 PRISMATIC   = 2
    uint8 FIXED       = 3
    uint8 BALL        = 4
    uint8 UNIVERSAL   = 5
    
    float64[] damping
    
    float64[] position
    float64[] rate
    
    bool success
    string status_message
    
    
    `;
  }

};

// Constants for message
GetJointPropertiesResponse.Constants = {
  REVOLUTE: 0,
  CONTINUOUS: 1,
  PRISMATIC: 2,
  FIXED: 3,
  BALL: 4,
  UNIVERSAL: 5,
}

module.exports = {
  Request: GetJointPropertiesRequest,
  Response: GetJointPropertiesResponse
};
