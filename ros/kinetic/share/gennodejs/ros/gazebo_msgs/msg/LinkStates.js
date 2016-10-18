// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class LinkStates {
  constructor() {
    this.name = [];
    this.pose = [];
    this.twist = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LinkStates
    // Serialize the length for message field [name]
    bufferInfo = _serializer.uint32(obj.name.length, bufferInfo);
    // Serialize message field [name]
    obj.name.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [pose]
    bufferInfo = _serializer.uint32(obj.pose.length, bufferInfo);
    // Serialize message field [pose]
    obj.pose.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Pose.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [twist]
    bufferInfo = _serializer.uint32(obj.twist.length, bufferInfo);
    // Serialize message field [twist]
    obj.twist.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Twist.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LinkStates
    let tmp;
    let len;
    let data = new LinkStates();
    // Deserialize array length for message field [name]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [name]
    data.name = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.name[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [pose]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    data.pose = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Pose.deserialize(buffer);
      data.pose[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [twist]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [twist]
    data.twist = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Twist.deserialize(buffer);
      data.twist[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/LinkStates';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '48c080191eb15c41858319b4d8a609c2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # broadcast all link states in world frame
    string[] name                 # link names
    geometry_msgs/Pose[] pose     # desired pose in world frame
    geometry_msgs/Twist[] twist   # desired twist in world frame
    
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
    
    ================================================================================
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
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
    `;
  }

};

module.exports = LinkStates;
