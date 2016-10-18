// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Vector3 = require('./Vector3.js');

//-----------------------------------------------------------

class Wrench {
  constructor() {
    this.force = new Vector3();
    this.torque = new Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Wrench
    // Serialize message field [force]
    bufferInfo = Vector3.serialize(obj.force, bufferInfo);
    // Serialize message field [torque]
    bufferInfo = Vector3.serialize(obj.torque, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Wrench
    let tmp;
    let len;
    let data = new Wrench();
    // Deserialize message field [force]
    tmp = Vector3.deserialize(buffer);
    data.force = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [torque]
    tmp = Vector3.deserialize(buffer);
    data.torque = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/Wrench';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4f539cf138b23283b520fd271b567936';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This represents force in free space, separated into
    # its linear and angular parts.
    Vector3  force
    Vector3  torque
    
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

module.exports = Wrench;
