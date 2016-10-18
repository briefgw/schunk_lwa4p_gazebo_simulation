// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Duration {
  constructor() {
    this.data = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Duration
    // Serialize message field [data]
    bufferInfo = _serializer.duration(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Duration
    let tmp;
    let len;
    let data = new Duration();
    // Deserialize message field [data]
    tmp = _deserializer.duration(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Duration';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3e286caf4241d664e55f3ad380e2ae46';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    duration data
    
    `;
  }

};

module.exports = Duration;
