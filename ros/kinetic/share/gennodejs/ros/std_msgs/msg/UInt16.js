// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class UInt16 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UInt16
    // Serialize message field [data]
    bufferInfo = _serializer.uint16(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UInt16
    let tmp;
    let len;
    let data = new UInt16();
    // Deserialize message field [data]
    tmp = _deserializer.uint16(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/UInt16';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1df79edf208b629fe6b81923a544552d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint16 data
    
    `;
  }

};

module.exports = UInt16;
