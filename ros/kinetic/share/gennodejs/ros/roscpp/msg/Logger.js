// Auto-generated. Do not edit!

// (in-package roscpp.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Logger {
  constructor() {
    this.name = '';
    this.level = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Logger
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [level]
    bufferInfo = _serializer.string(obj.level, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Logger
    let tmp;
    let len;
    let data = new Logger();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [level]
    tmp = _deserializer.string(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'roscpp/Logger';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a6069a2ff40db7bd32143dd66e1f408e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string level
    
    `;
  }

};

module.exports = Logger;
