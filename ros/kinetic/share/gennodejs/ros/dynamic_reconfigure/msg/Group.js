// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ParamDescription = require('./ParamDescription.js');

//-----------------------------------------------------------

class Group {
  constructor() {
    this.name = '';
    this.type = '';
    this.parameters = [];
    this.parent = 0;
    this.id = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Group
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize the length for message field [parameters]
    bufferInfo = _serializer.uint32(obj.parameters.length, bufferInfo);
    // Serialize message field [parameters]
    obj.parameters.forEach((val) => {
      bufferInfo = ParamDescription.serialize(val, bufferInfo);
    });
    // Serialize message field [parent]
    bufferInfo = _serializer.int32(obj.parent, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.int32(obj.id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Group
    let tmp;
    let len;
    let data = new Group();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [parameters]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parameters]
    data.parameters = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ParamDescription.deserialize(buffer);
      data.parameters[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [parent]
    tmp = _deserializer.int32(buffer);
    data.parent = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.int32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/Group';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9e8cd9e9423c94823db3614dd8b1cf7a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string type
    ParamDescription[] parameters
    int32 parent 
    int32 id
    
    ================================================================================
    MSG: dynamic_reconfigure/ParamDescription
    string name
    string type
    uint32 level
    string description
    string edit_method
    
    `;
  }

};

module.exports = Group;
