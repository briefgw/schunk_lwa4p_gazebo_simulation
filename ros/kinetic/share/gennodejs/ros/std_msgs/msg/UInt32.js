// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class UInt32 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UInt32
    // Serialize message field [data]
    bufferInfo = _serializer.uint32(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UInt32
    let tmp;
    let len;
    let data = new UInt32();
    // Deserialize message field [data]
    tmp = _deserializer.uint32(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/UInt32';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '304a39449588c7f8ce2df6e8001c5fce';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 data
    `;
  }

};

module.exports = UInt32;
