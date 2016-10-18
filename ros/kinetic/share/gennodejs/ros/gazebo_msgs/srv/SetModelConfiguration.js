// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetModelConfigurationRequest {
  constructor() {
    this.model_name = '';
    this.urdf_param_name = '';
    this.joint_names = [];
    this.joint_positions = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetModelConfigurationRequest
    // Serialize message field [model_name]
    bufferInfo = _serializer.string(obj.model_name, bufferInfo);
    // Serialize message field [urdf_param_name]
    bufferInfo = _serializer.string(obj.urdf_param_name, bufferInfo);
    // Serialize the length for message field [joint_names]
    bufferInfo = _serializer.uint32(obj.joint_names.length, bufferInfo);
    // Serialize message field [joint_names]
    obj.joint_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [joint_positions]
    bufferInfo = _serializer.uint32(obj.joint_positions.length, bufferInfo);
    // Serialize message field [joint_positions]
    obj.joint_positions.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetModelConfigurationRequest
    let tmp;
    let len;
    let data = new SetModelConfigurationRequest();
    // Deserialize message field [model_name]
    tmp = _deserializer.string(buffer);
    data.model_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [urdf_param_name]
    tmp = _deserializer.string(buffer);
    data.urdf_param_name = tmp.data;
    buffer = tmp.buffer;
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
    // Deserialize array length for message field [joint_positions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_positions]
    data.joint_positions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.joint_positions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SetModelConfigurationRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '160eae60f51fabff255480c70afa289f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string model_name
    string urdf_param_name
    
    string[] joint_names
    float64[] joint_positions
    
    `;
  }

};

class SetModelConfigurationResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetModelConfigurationResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetModelConfigurationResponse
    let tmp;
    let len;
    let data = new SetModelConfigurationResponse();
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
    return 'gazebo_msgs/SetModelConfigurationResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2ec6f3eff0161f4257b808b12bc830c2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    string status_message
    
    
    `;
  }

};

module.exports = {
  Request: SetModelConfigurationRequest,
  Response: SetModelConfigurationResponse
};
