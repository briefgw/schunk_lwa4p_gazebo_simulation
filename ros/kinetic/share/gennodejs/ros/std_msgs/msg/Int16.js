// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Int16 {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Int16
    // Serialize message field [data]
    bufferInfo = _serializer.int16(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Int16
    let tmp;
    let len;
    let data = new Int16();
    // Deserialize message field [data]
    tmp = _deserializer.int16(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Int16';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8524586e34fbd7cb1c08c5f5f1ca0e57';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int16 data
    
    `;
  }

};

module.exports = Int16;
