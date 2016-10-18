// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ColorRGBA {
  constructor() {
    this.r = 0.0;
    this.g = 0.0;
    this.b = 0.0;
    this.a = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ColorRGBA
    // Serialize message field [r]
    bufferInfo = _serializer.float32(obj.r, bufferInfo);
    // Serialize message field [g]
    bufferInfo = _serializer.float32(obj.g, bufferInfo);
    // Serialize message field [b]
    bufferInfo = _serializer.float32(obj.b, bufferInfo);
    // Serialize message field [a]
    bufferInfo = _serializer.float32(obj.a, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ColorRGBA
    let tmp;
    let len;
    let data = new ColorRGBA();
    // Deserialize message field [r]
    tmp = _deserializer.float32(buffer);
    data.r = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [g]
    tmp = _deserializer.float32(buffer);
    data.g = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [b]
    tmp = _deserializer.float32(buffer);
    data.b = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [a]
    tmp = _deserializer.float32(buffer);
    data.a = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/ColorRGBA';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a29a96539573343b1310c73607334b00';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 r
    float32 g
    float32 b
    float32 a
    
    `;
  }

};

module.exports = ColorRGBA;
