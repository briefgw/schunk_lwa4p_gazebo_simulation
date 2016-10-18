// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Bool {
  constructor() {
    this.data = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Bool
    // Serialize message field [data]
    bufferInfo = _serializer.bool(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Bool
    let tmp;
    let len;
    let data = new Bool();
    // Deserialize message field [data]
    tmp = _deserializer.bool(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Bool';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8b94c1b53db61fb6aed406028ad6332a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool data
    `;
  }

};

module.exports = Bool;
