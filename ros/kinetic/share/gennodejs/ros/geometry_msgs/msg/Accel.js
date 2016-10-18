// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Vector3 = require('./Vector3.js');

//-----------------------------------------------------------

class Accel {
  constructor() {
    this.linear = new Vector3();
    this.angular = new Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Accel
    // Serialize message field [linear]
    bufferInfo = Vector3.serialize(obj.linear, bufferInfo);
    // Serialize message field [angular]
    bufferInfo = Vector3.serialize(obj.angular, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Accel
    let tmp;
    let len;
    let data = new Accel();
    // Deserialize message field [linear]
    tmp = Vector3.deserialize(buffer);
    data.linear = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angular]
    tmp = Vector3.deserialize(buffer);
    data.angular = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Accel';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9f195f881246fdfa2798d1d3eebca84a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This expresses acceleration in free space broken into its linear and angular parts.
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

module.exports = Accel;
