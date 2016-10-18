// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ParamDescription {
  constructor() {
    this.name = '';
    this.type = '';
    this.level = 0;
    this.description = '';
    this.edit_method = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ParamDescription
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize message field [level]
    bufferInfo = _serializer.uint32(obj.level, bufferInfo);
    // Serialize message field [description]
    bufferInfo = _serializer.string(obj.description, bufferInfo);
    // Serialize message field [edit_method]
    bufferInfo = _serializer.string(obj.edit_method, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ParamDescription
    let tmp;
    let len;
    let data = new ParamDescription();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [level]
    tmp = _deserializer.uint32(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [description]
    tmp = _deserializer.string(buffer);
    data.description = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [edit_method]
    tmp = _deserializer.string(buffer);
    data.edit_method = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/ParamDescription';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7434fcb9348c13054e0c3b267c8cb34d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string type
    uint32 level
    string description
    string edit_method
    
    `;
  }

};

module.exports = ParamDescription;
