// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class BoolParameter {
  constructor() {
    this.name = '';
    this.value = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BoolParameter
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [value]
    bufferInfo = _serializer.bool(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BoolParameter
    let tmp;
    let len;
    let data = new BoolParameter();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [value]
    tmp = _deserializer.bool(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/BoolParameter';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '23f05028c1a699fb83e22401228c3a9e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    bool value
    
    `;
  }

};

module.exports = BoolParameter;
