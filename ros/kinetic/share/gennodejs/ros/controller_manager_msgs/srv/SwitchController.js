// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SwitchControllerRequest {
  constructor() {
    this.start_controllers = [];
    this.stop_controllers = [];
    this.strictness = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SwitchControllerRequest
    // Serialize the length for message field [start_controllers]
    bufferInfo = _serializer.uint32(obj.start_controllers.length, bufferInfo);
    // Serialize message field [start_controllers]
    obj.start_controllers.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [stop_controllers]
    bufferInfo = _serializer.uint32(obj.stop_controllers.length, bufferInfo);
    // Serialize message field [stop_controllers]
    obj.stop_controllers.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [strictness]
    bufferInfo = _serializer.int32(obj.strictness, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SwitchControllerRequest
    let tmp;
    let len;
    let data = new SwitchControllerRequest();
    // Deserialize array length for message field [start_controllers]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [start_controllers]
    data.start_controllers = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.start_controllers[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [stop_controllers]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stop_controllers]
    data.stop_controllers = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.stop_controllers[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [strictness]
    tmp = _deserializer.int32(buffer);
    data.strictness = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/SwitchControllerRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '434da54adc434a5af5743ed711fd6ba1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    string[] start_controllers
    string[] stop_controllers
    int32 strictness
    int32 BEST_EFFORT=1
    int32 STRICT=2
    
    `;
  }

};

// Constants for message
SwitchControllerRequest.Constants = {
  BEST_EFFORT: 1,
  STRICT: 2,
}

class SwitchControllerResponse {
  constructor() {
    this.ok = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SwitchControllerResponse
    // Serialize message field [ok]
    bufferInfo = _serializer.bool(obj.ok, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SwitchControllerResponse
    let tmp;
    let len;
    let data = new SwitchControllerResponse();
    // Deserialize message field [ok]
    tmp = _deserializer.bool(buffer);
    data.ok = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/SwitchControllerResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6f6da3883749771fac40d6deb24a8c02';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool ok
    
    `;
  }

};

module.exports = {
  Request: SwitchControllerRequest,
  Response: SwitchControllerResponse
};
