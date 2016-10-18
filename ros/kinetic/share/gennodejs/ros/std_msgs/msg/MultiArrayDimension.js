// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MultiArrayDimension {
  constructor() {
    this.label = '';
    this.size = 0;
    this.stride = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultiArrayDimension
    // Serialize message field [label]
    bufferInfo = _serializer.string(obj.label, bufferInfo);
    // Serialize message field [size]
    bufferInfo = _serializer.uint32(obj.size, bufferInfo);
    // Serialize message field [stride]
    bufferInfo = _serializer.uint32(obj.stride, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MultiArrayDimension
    let tmp;
    let len;
    let data = new MultiArrayDimension();
    // Deserialize message field [label]
    tmp = _deserializer.string(buffer);
    data.label = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [size]
    tmp = _deserializer.uint32(buffer);
    data.size = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stride]
    tmp = _deserializer.uint32(buffer);
    data.stride = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/MultiArrayDimension';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4cd0c83a8683deae40ecdac60e53bfa8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    `;
  }

};

module.exports = MultiArrayDimension;
