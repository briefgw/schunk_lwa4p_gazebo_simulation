// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Float64 {
  constructor() {
    this.data = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Float64
    // Serialize message field [data]
    bufferInfo = _serializer.float64(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Float64
    let tmp;
    let len;
    let data = new Float64();
    // Deserialize message field [data]
    tmp = _deserializer.float64(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Float64';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fdb28210bfa9d7c91146260178d9a584';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 data
    `;
  }

};

module.exports = Float64;
