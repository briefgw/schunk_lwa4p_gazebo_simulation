// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Vector3 = require('./Vector3.js');

//-----------------------------------------------------------

class Inertia {
  constructor() {
    this.m = 0.0;
    this.com = new Vector3();
    this.ixx = 0.0;
    this.ixy = 0.0;
    this.ixz = 0.0;
    this.iyy = 0.0;
    this.iyz = 0.0;
    this.izz = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Inertia
    // Serialize message field [m]
    bufferInfo = _serializer.float64(obj.m, bufferInfo);
    // Serialize message field [com]
    bufferInfo = Vector3.serialize(obj.com, bufferInfo);
    // Serialize message field [ixx]
    bufferInfo = _serializer.float64(obj.ixx, bufferInfo);
    // Serialize message field [ixy]
    bufferInfo = _serializer.float64(obj.ixy, bufferInfo);
    // Serialize message field [ixz]
    bufferInfo = _serializer.float64(obj.ixz, bufferInfo);
    // Serialize message field [iyy]
    bufferInfo = _serializer.float64(obj.iyy, bufferInfo);
    // Serialize message field [iyz]
    bufferInfo = _serializer.float64(obj.iyz, bufferInfo);
    // Serialize message field [izz]
    bufferInfo = _serializer.float64(obj.izz, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Inertia
    let tmp;
    let len;
    let data = new Inertia();
    // Deserialize message field [m]
    tmp = _deserializer.float64(buffer);
    data.m = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [com]
    tmp = Vector3.deserialize(buffer);
    data.com = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixx]
    tmp = _deserializer.float64(buffer);
    data.ixx = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixy]
    tmp = _deserializer.float64(buffer);
    data.ixy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixz]
    tmp = _deserializer.float64(buffer);
    data.ixz = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iyy]
    tmp = _deserializer.float64(buffer);
    data.iyy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iyz]
    tmp = _deserializer.float64(buffer);
    data.iyz = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [izz]
    tmp = _deserializer.float64(buffer);
    data.izz = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Inertia';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1d26e4bb6c83ff141c5cf0d883c2b0fe';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Mass [kg]
    float64 m
    
    # Center of mass [m]
    geometry_msgs/Vector3 com
    
    # Inertia Tensor [kg-m^2]
    #     | ixx ixy ixz |
    # I = | ixy iyy iyz |
    #     | ixz iyz izz |
    float64 ixx
    float64 ixy
    float64 ixz
    float64 iyy
    float64 iyz
    float64 izz
    
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

module.exports = Inertia;
