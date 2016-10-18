// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DoubleParameter {
  constructor() {
    this.name = '';
    this.value = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DoubleParameter
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [value]
    bufferInfo = _serializer.float64(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DoubleParameter
    let tmp;
    let len;
    let data = new DoubleParameter();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [value]
    tmp = _deserializer.float64(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/DoubleParameter';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd8512f27253c0f65f928a67c329cd658';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    float64 value
    
    `;
  }

};

module.exports = DoubleParameter;
