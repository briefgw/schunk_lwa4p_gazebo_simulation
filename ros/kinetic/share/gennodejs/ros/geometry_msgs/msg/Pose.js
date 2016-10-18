// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Point = require('./Point.js');
let Quaternion = require('./Quaternion.js');

//-----------------------------------------------------------

class Pose {
  constructor() {
    this.position = new Point();
    this.orientation = new Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Pose
    // Serialize message field [position]
    bufferInfo = Point.serialize(obj.position, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = Quaternion.serialize(obj.orientation, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Pose
    let tmp;
    let len;
    let data = new Pose();
    // Deserialize message field [position]
    tmp = Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = Quaternion.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Pose';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e45d45a5a1ce597b249e23fb30fc871f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = Pose;
