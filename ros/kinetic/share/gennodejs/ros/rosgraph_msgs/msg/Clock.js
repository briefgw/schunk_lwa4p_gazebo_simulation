// Auto-generated. Do not edit!

// (in-package rosgraph_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Clock {
  constructor() {
    this.clock = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Clock
    // Serialize message field [clock]
    bufferInfo = _serializer.time(obj.clock, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Clock
    let tmp;
    let len;
    let data = new Clock();
    // Deserialize message field [clock]
    tmp = _deserializer.time(buffer);
    data.clock = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'rosgraph_msgs/Clock';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a9c97c1d230cfc112e270351a944ee47';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # roslib/Clock is used for publishing simulated time in ROS. 
    # This message simply communicates the current time.
    # For more information, see http://www.ros.org/wiki/Clock
    time clock
    
    `;
  }

};

module.exports = Clock;
