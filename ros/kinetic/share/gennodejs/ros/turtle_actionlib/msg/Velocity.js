// Auto-generated. Do not edit!

// (in-package turtle_actionlib.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Velocity {
  constructor() {
    this.linear = 0.0;
    this.angular = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Velocity
    // Serialize message field [linear]
    bufferInfo = _serializer.float32(obj.linear, bufferInfo);
    // Serialize message field [angular]
    bufferInfo = _serializer.float32(obj.angular, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Velocity
    let tmp;
    let len;
    let data = new Velocity();
    // Deserialize message field [linear]
    tmp = _deserializer.float32(buffer);
    data.linear = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular]
    tmp = _deserializer.float32(buffer);
    data.angular = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'turtle_actionlib/Velocity';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9d5c2dcd348ac8f76ce2a4307bd63a13';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Copied from turtlesim https://github.com/ros/ros_tutorials/blob/f7da7779e82dcc3977b2c220a843cd86dd269832/turtlesim/msg/Velocity.msg. We had to copy this into this package since it has been replaced with geometry_msgs/Twist there and comforming to Twist requires to change code, which I doubt worth time it takes. So if you think it is, please go ahead make a patch.
    
    float32 linear
    float32 angular
    
    `;
  }

};

module.exports = Velocity;
