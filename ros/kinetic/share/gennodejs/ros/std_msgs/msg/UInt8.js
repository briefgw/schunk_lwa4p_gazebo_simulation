// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class UInt8 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UInt8
    // Serialize message field [data]
    bufferInfo = _serializer.uint8(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UInt8
    let tmp;
    let len;
    let data = new UInt8();
    // Deserialize message field [data]
    tmp = _deserializer.uint8(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/UInt8';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7c8164229e7d2c17eb95e9231617fdee';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 data
    
    `;
  }

};

module.exports = UInt8;
