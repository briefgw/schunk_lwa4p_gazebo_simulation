// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Pose = require('./Pose.js');

//-----------------------------------------------------------

class PoseWithCovariance {
  constructor() {
    this.pose = new Pose();
    this.covariance = new Array(36).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PoseWithCovariance
    // Serialize message field [pose]
    bufferInfo = Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [covariance]
    obj.covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PoseWithCovariance
    let tmp;
    let len;
    let data = new PoseWithCovariance();
    // Deserialize message field [pose]
    tmp = Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    len = 36;
    // Deserialize message field [covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/PoseWithCovariance';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c23e848cf1b7533a8d7c259073a97e6f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This represents a pose in free space with uncertainty.
    
    Pose pose
    
    # Row-major representation of the 6x6 covariance matrix
    # The orientation parameters use a fixed-axis representation.
    # In order, the parameters are:
    # (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    float64[36] covariance
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = PoseWithCovariance;
