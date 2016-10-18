// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Int8 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Int8
    // Serialize message field [data]
    bufferInfo = _serializer.int8(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Int8
    let tmp;
    let len;
    let data = new Int8();
    // Deserialize message field [data]
    tmp = _deserializer.int8(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Int8';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '27ffa0c9c4b8fb8492252bcad9e5c57b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int8 data
    
    `;
  }

};

module.exports = Int8;
