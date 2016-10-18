// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Accel = require('./Accel.js');

//-----------------------------------------------------------

class AccelWithCovariance {
  constructor() {
    this.accel = new Accel();
    this.covariance = new Array(36).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AccelWithCovariance
    // Serialize message field [accel]
    bufferInfo = Accel.serialize(obj.accel, bufferInfo);
    // Serialize message field [covariance]
    obj.covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AccelWithCovariance
    let tmp;
    let len;
    let data = new AccelWithCovariance();
    // Deserialize message field [accel]
    tmp = Accel.deserialize(buffer);
    data.accel = tmp.data;
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
    return 'geometry_msgs/AccelWithCovariance';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ad5a718d699c6be72a02b8d6a139f334';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This expresses acceleration in free space with uncertainty.
    
    Accel accel
    
    # Row-major representation of the 6x6 covariance matrix
    # The orientation parameters use a fixed-axis representation.
    # In order, the parameters are:
    # (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
    float64[36] covariance
    
    ================================================================================
    MSG: geometry_msgs/Accel
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

module.exports = AccelWithCovariance;
