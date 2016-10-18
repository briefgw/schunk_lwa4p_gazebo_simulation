// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Char {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Char
    // Serialize message field [data]
    bufferInfo = _serializer.char(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Char
    let tmp;
    let len;
    let data = new Char();
    // Deserialize message field [data]
    tmp = _deserializer.char(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Char';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1bf77f25acecdedba0e224b162199717';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    char data
    `;
  }

};

module.exports = Char;
