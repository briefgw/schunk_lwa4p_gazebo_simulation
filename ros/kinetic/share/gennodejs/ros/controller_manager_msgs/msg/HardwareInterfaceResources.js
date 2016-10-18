// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class HardwareInterfaceResources {
  constructor() {
    this.hardware_interface = '';
    this.resources = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HardwareInterfaceResources
    // Serialize message field [hardware_interface]
    bufferInfo = _serializer.string(obj.hardware_interface, bufferInfo);
    // Serialize the length for message field [resources]
    bufferInfo = _serializer.uint32(obj.resources.length, bufferInfo);
    // Serialize message field [resources]
    obj.resources.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HardwareInterfaceResources
    let tmp;
    let len;
    let data = new HardwareInterfaceResources();
    // Deserialize message field [hardware_interface]
    tmp = _deserializer.string(buffer);
    data.hardware_interface = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [resources]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [resources]
    data.resources = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.resources[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'controller_manager_msgs/HardwareInterfaceResources';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f25b55cbf1d1f76e82e5ec9e83f76258';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Type of hardware interface
    string hardware_interface
    # List of resources belonging to the hardware interface
    string[] resources
    
    `;
  }

};

module.exports = HardwareInterfaceResources;
