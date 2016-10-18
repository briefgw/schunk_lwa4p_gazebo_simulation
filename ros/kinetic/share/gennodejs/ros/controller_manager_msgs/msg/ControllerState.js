// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let HardwareInterfaceResources = require('./HardwareInterfaceResources.js');

//-----------------------------------------------------------

class ControllerState {
  constructor() {
    this.name = '';
    this.state = '';
    this.type = '';
    this.claimed_resources = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ControllerState
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.string(obj.state, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize the length for message field [claimed_resources]
    bufferInfo = _serializer.uint32(obj.claimed_resources.length, bufferInfo);
    // Serialize message field [claimed_resources]
    obj.claimed_resources.forEach((val) => {
      bufferInfo = HardwareInterfaceResources.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ControllerState
    let tmp;
    let len;
    let data = new ControllerState();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = _deserializer.string(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [claimed_resources]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [claimed_resources]
    data.claimed_resources = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = HardwareInterfaceResources.deserialize(buffer);
      data.claimed_resources[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'controller_manager_msgs/ControllerState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'aeb6b261d97793ab74099a3740245272';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = ControllerState;
