// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Byte {
  constructor() {
    this.data = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Byte
    // Serialize message field [data]
    bufferInfo = _serializer.byte(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Byte
    let tmp;
    let len;
    let data = new Byte();
    // Deserialize message field [data]
    tmp = _deserializer.byte(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Byte';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ad736a2e8818154c487bb80fe42ce43b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    byte data
    
    `;
  }

};

module.exports = Byte;
