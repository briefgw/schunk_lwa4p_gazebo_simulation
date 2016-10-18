// Auto-generated. Do not edit!

// (in-package turtlesim.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Color {
  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Color
    // Serialize message field [r]
    bufferInfo = _serializer.uint8(obj.r, bufferInfo);
    // Serialize message field [g]
    bufferInfo = _serializer.uint8(obj.g, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.uint8(obj.b, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Color
    let tmp;
    let len;
    let data = new Color();
    // Deserialize message field [r]
    tmp = _deserializer.uint8(buffer);
    data.r = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [g]
    tmp = _deserializer.uint8(buffer);
    data.g = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.uint8(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'turtlesim/Color';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '353891e354491c51aabe32df673fb446';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 r
    uint8 g
    uint8 b
    
    `;
  }

};

module.exports = Color;
