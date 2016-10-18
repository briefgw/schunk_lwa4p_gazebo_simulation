// Auto-generated. Do not edit!

// (in-package actionlib_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GoalID {
  constructor() {
    this.stamp = {secs: 0, nsecs: 0};
    this.id = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GoalID
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GoalID
    let tmp;
    let len;
    let data = new GoalID();
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'actionlib_msgs/GoalID';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '302881f31927c1df708a2dbab0e80ee8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    `;
  }

};

module.exports = GoalID;
