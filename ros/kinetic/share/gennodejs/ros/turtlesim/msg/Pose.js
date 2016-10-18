// Auto-generated. Do not edit!

// (in-package turtlesim.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Pose {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.theta = 0.0;
    this.linear_velocity = 0.0;
    this.angular_velocity = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Pose
    // Serialize message field [x]
    bufferInfo = _serializer.float32(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float32(obj.y, bufferInfo);
    // Serialize message field [theta]
    bufferInfo = _serializer.float32(obj.theta, bufferInfo);
    // Serialize message field [linear_velocity]
    bufferInfo = _serializer.float32(obj.linear_velocity, bufferInfo);
    // Serialize message field [angular_velocity]
    bufferInfo = _serializer.float32(obj.angular_velocity, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Pose
    let tmp;
    let len;
    let data = new Pose();
    // Deserialize message field [x]
    tmp = _deserializer.float32(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float32(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [theta]
    tmp = _deserializer.float32(buffer);
    data.theta = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [linear_velocity]
    tmp = _deserializer.float32(buffer);
    data.linear_velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular_velocity]
    tmp = _deserializer.float32(buffer);
    data.angular_velocity = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'turtlesim/Pose';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '863b248d5016ca62ea2e895ae5265cf9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 x
    float32 y
    float32 theta
    
    float32 linear_velocity
    float32 angular_velocity
    `;
  }

};

module.exports = Pose;
