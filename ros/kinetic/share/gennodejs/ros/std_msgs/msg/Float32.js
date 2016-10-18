// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Float32 {
  constructor() {
    this.data = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Float32
    // Serialize message field [data]
    bufferInfo = _serializer.float32(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Float32
    let tmp;
    let len;
    let data = new Float32();
    // Deserialize message field [data]
    tmp = _deserializer.float32(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Float32';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '73fcbf46b49191e672908e50842a83d4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 data
    `;
  }

};

module.exports = Float32;
