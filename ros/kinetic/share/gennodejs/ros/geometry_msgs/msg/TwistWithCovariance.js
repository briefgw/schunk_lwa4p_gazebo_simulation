// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Twist = require('./Twist.js');

//-----------------------------------------------------------

class TwistWithCovariance {
  constructor() {
    this.twist = new Twist();
    this.covariance = new Array(36).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TwistWithCovariance
    // Serialize message field [twist]
    bufferInfo = Twist.serialize(obj.twist, bufferInfo);
    // Serialize message field [covariance]
    obj.covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TwistWithCovariance
    let tmp;
    let len;
    let data = new TwistWithCovariance();
    // Deserialize message field [twist]
    tmp = Twist.deserialize(buffer);
    data.twist = tmp.data;
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
    return 'geometry_msgs/TwistWithCovariance';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1fe8a28e6890a4cc3ae4c3ca5c7d82e6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This expresses velocity in free space with uncertainty.
    
    Twist twist
    
    # Row-major representation of the 6x6 covariance matrix
    # The orientation parameters use a fixed-axis representation.
    # In order, the parameters are:
    # (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    float64[36] covariance
    
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

module.exports = TwistWithCovariance;
