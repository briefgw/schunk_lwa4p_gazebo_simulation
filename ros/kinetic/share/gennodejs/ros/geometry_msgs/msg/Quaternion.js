// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Quaternion {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.w = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Quaternion
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [z]
    bufferInfo = _serializer.float64(obj.z, bufferInfo);
    // Serialize message field [w]
    bufferInfo = _serializer.float64(obj.w, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Quaternion
    let tmp;
    let len;
    let data = new Quaternion();
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [z]
    tmp = _deserializer.float64(buffer);
    data.z = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [w]
    tmp = _deserializer.float64(buffer);
    data.w = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Quaternion';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a779879fadf0160734f906b8c19c7004';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = Quaternion;
