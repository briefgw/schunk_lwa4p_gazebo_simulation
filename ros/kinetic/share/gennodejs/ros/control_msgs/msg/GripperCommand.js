// Auto-generated. Do not edit!

// (in-package control_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GripperCommand {
  constructor() {
    this.position = 0.0;
    this.max_effort = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GripperCommand
    // Serialize message field [position]
    bufferInfo = _serializer.float64(obj.position, bufferInfo);
    // Serialize message field [max_effort]
    bufferInfo = _serializer.float64(obj.max_effort, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GripperCommand
    let tmp;
    let len;
    let data = new GripperCommand();
    // Deserialize message field [position]
    tmp = _deserializer.float64(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_effort]
    tmp = _deserializer.float64(buffer);
    data.max_effort = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'control_msgs/GripperCommand';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '680acaff79486f017132a7f198d40f08';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 position
    float64 max_effort
    
    `;
  }

};

module.exports = GripperCommand;
