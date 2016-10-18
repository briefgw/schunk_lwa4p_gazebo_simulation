// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Vector3 = require('./Vector3.js');
let Quaternion = require('./Quaternion.js');

//-----------------------------------------------------------

class Transform {
  constructor() {
    this.translation = new Vector3();
    this.rotation = new Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Transform
    // Serialize message field [translation]
    bufferInfo = Vector3.serialize(obj.translation, bufferInfo);
    // Serialize message field [rotation]
    bufferInfo = Quaternion.serialize(obj.rotation, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Transform
    let tmp;
    let len;
    let data = new Transform();
    // Deserialize message field [translation]
    tmp = Vector3.deserialize(buffer);
    data.translation = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [rotation]
    tmp = Quaternion.deserialize(buffer);
    data.rotation = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Transform';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ac9eff44abf714214112b05d54a3cf9b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    
    `;
  }

};

module.exports = Transform;
