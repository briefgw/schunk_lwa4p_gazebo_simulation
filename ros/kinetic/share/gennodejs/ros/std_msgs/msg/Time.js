// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Time {
  constructor() {
    this.data = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Time
    // Serialize message field [data]
    bufferInfo = _serializer.time(obj.data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Time
    let tmp;
    let len;
    let data = new Time();
    // Deserialize message field [data]
    tmp = _deserializer.time(buffer);
    data.data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Time';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cd7166c74c552c311fbcc2fe5a7bc289';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time data
    
    `;
  }

};

module.exports = Time;
