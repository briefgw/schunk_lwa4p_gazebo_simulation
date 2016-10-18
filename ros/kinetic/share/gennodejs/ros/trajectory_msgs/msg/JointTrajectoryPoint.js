// Auto-generated. Do not edit!

// (in-package trajectory_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class JointTrajectoryPoint {
  constructor() {
    this.positions = [];
    this.velocities = [];
    this.accelerations = [];
    this.effort = [];
    this.time_from_start = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointTrajectoryPoint
    // Serialize the length for message field [positions]
    bufferInfo = _serializer.uint32(obj.positions.length, bufferInfo);
    // Serialize message field [positions]
    obj.positions.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [velocities]
    bufferInfo = _serializer.uint32(obj.velocities.length, bufferInfo);
    // Serialize message field [velocities]
    obj.velocities.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [accelerations]
    bufferInfo = _serializer.uint32(obj.accelerations.length, bufferInfo);
    // Serialize message field [accelerations]
    obj.accelerations.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [effort]
    bufferInfo = _serializer.uint32(obj.effort.length, bufferInfo);
    // Serialize message field [effort]
    obj.effort.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [time_from_start]
    bufferInfo = _serializer.duration(obj.time_from_start, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointTrajectoryPoint
    let tmp;
    let len;
    let data = new JointTrajectoryPoint();
    // Deserialize array length for message field [positions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [positions]
    data.positions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.positions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [velocities]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocities]
    data.velocities = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.velocities[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [accelerations]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [accelerations]
    data.accelerations = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.accelerations[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [effort]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [effort]
    data.effort = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.effort[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [time_from_start]
    tmp = _deserializer.duration(buffer);
    data.time_from_start = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'trajectory_msgs/JointTrajectoryPoint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f3cd1e1c4d320c79d6985c904ae5dcd3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Each trajectory point specifies either positions[, velocities[, accelerations]]
    # or positions[, effort] for the trajectory to be executed.
    # All specified values are in the same order as the joint names in JointTrajectory.msg
    
    float64[] positions
    float64[] velocities
    float64[] accelerations
    float64[] effort
    duration time_from_start
    
    `;
  }

};

module.exports = JointTrajectoryPoint;
