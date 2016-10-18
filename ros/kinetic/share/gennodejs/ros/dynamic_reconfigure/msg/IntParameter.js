// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class IntParameter {
  constructor() {
    this.name = '';
    this.value = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type IntParameter
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [value]
    bufferInfo = _serializer.int32(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type IntParameter
    let tmp;
    let len;
    let data = new IntParameter();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [value]
    tmp = _deserializer.int32(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/IntParameter';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '65fedc7a0cbfb8db035e46194a350bf1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    int32 value
    
    `;
  }

};

module.exports = IntParameter;
