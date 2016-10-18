// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let ControllerState = require('../msg/ControllerState.js');

//-----------------------------------------------------------

class ListControllersRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListControllersRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListControllersRequest
    let tmp;
    let len;
    let data = new ListControllersRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/ListControllersRequest';
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

class ListControllersResponse {
  constructor() {
    this.controller = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListControllersResponse
    // Serialize the length for message field [controller]
    bufferInfo = _serializer.uint32(obj.controller.length, bufferInfo);
    // Serialize message field [controller]
    obj.controller.forEach((val) => {
      bufferInfo = ControllerState.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListControllersResponse
    let tmp;
    let len;
    let data = new ListControllersResponse();
    // Deserialize array length for message field [controller]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [controller]
    data.controller = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ControllerState.deserialize(buffer);
      data.controller[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/ListControllersResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1341feb2e63fa791f855565d0da950d8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    ControllerState[] controller
    
    
    ================================================================================
    MSG: controller_manager_msgs/ControllerState
    string name
    string state
    string type
    controller_manager_msgs/HardwareInterfaceResources[] claimed_resources
    
    ================================================================================
    MSG: controller_manager_msgs/HardwareInterfaceResources
    # Type of hardware interface
    string hardware_interface
    # List of resources belonging to the hardware interface
    string[] resources
    
    `;
  }

};

module.exports = {
  Request: ListControllersRequest,
  Response: ListControllersResponse
};
