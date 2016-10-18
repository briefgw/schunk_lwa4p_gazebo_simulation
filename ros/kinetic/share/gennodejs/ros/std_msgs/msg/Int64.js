// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Int64 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Int64
    // Serialize message field [data]
    bufferInfo = _serializer.int64(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Int64
    let tmp;
    let len;
    let data = new Int64();
    // Deserialize message field [data]
    tmp = _deserializer.int64(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Int64';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '34add168574510e6e17f5d23ecc077ef';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int64 data
    `;
  }

};

module.exports = Int64;
