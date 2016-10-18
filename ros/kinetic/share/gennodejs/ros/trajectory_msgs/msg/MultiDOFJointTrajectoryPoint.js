// Auto-generated. Do not edit!

// (in-package trajectory_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class MultiDOFJointTrajectoryPoint {
  constructor() {
    this.transforms = [];
    this.velocities = [];
    this.accelerations = [];
    this.time_from_start = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultiDOFJointTrajectoryPoint
    // Serialize the length for message field [transforms]
    bufferInfo = _serializer.uint32(obj.transforms.length, bufferInfo);
    // Serialize message field [transforms]
    obj.transforms.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Transform.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [velocities]
    bufferInfo = _serializer.uint32(obj.velocities.length, bufferInfo);
    // Serialize message field [velocities]
    obj.velocities.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Twist.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [accelerations]
    bufferInfo = _serializer.uint32(obj.accelerations.length, bufferInfo);
    // Serialize message field [accelerations]
    obj.accelerations.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Twist.serialize(val, bufferInfo);
    });
    // Serialize message field [time_from_start]
    bufferInfo = _serializer.duration(obj.time_from_start, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MultiDOFJointTrajectoryPoint
    let tmp;
    let len;
    let data = new MultiDOFJointTrajectoryPoint();
    // Deserialize array length for message field [transforms]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [transforms]
    data.transforms = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Transform.deserialize(buffer);
      data.transforms[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [velocities]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocities]
    data.velocities = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Twist.deserialize(buffer);
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
      tmp = geometry_msgs.msg.Twist.deserialize(buffer);
      data.accelerations[i] = tmp.data;
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
    return 'trajectory_msgs/MultiDOFJointTrajectoryPoint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3ebe08d1abd5b65862d50e09430db776';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Each multi-dof joint can specify a transform (up to 6 DOF)
    geometry_msgs/Transform[] transforms
    
    # There can be a velocity specified for the origin of the joint 
    geometry_msgs/Twist[] velocities
    
    # There can be an acceleration specified for the origin of the joint 
    geometry_msgs/Twist[] accelerations
    
    duration time_from_start
    
    ================================================================================
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
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
    
    ================================================================================
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
    `;
  }

};

module.exports = MultiDOFJointTrajectoryPoint;
