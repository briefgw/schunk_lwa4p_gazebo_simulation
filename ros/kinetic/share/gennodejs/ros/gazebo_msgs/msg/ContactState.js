// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ContactState {
  constructor() {
    this.info = '';
    this.collision1_name = '';
    this.collision2_name = '';
    this.wrenches = [];
    this.total_wrench = new geometry_msgs.msg.Wrench();
    this.contact_positions = [];
    this.contact_normals = [];
    this.depths = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ContactState
    // Serialize message field [info]
    bufferInfo = _serializer.string(obj.info, bufferInfo);
    // Serialize message field [collision1_name]
    bufferInfo = _serializer.string(obj.collision1_name, bufferInfo);
    // Serialize message field [collision2_name]
    bufferInfo = _serializer.string(obj.collision2_name, bufferInfo);
    // Serialize the length for message field [wrenches]
    bufferInfo = _serializer.uint32(obj.wrenches.length, bufferInfo);
    // Serialize message field [wrenches]
    obj.wrenches.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Wrench.serialize(val, bufferInfo);
    });
    // Serialize message field [total_wrench]
    bufferInfo = geometry_msgs.msg.Wrench.serialize(obj.total_wrench, bufferInfo);
    // Serialize the length for message field [contact_positions]
    bufferInfo = _serializer.uint32(obj.contact_positions.length, bufferInfo);
    // Serialize message field [contact_positions]
    obj.contact_positions.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Vector3.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [contact_normals]
    bufferInfo = _serializer.uint32(obj.contact_normals.length, bufferInfo);
    // Serialize message field [contact_normals]
    obj.contact_normals.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Vector3.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [depths]
    bufferInfo = _serializer.uint32(obj.depths.length, bufferInfo);
    // Serialize message field [depths]
    obj.depths.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ContactState
    let tmp;
    let len;
    let data = new ContactState();
    // Deserialize message field [info]
    tmp = _deserializer.string(buffer);
    data.info = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [collision1_name]
    tmp = _deserializer.string(buffer);
    data.collision1_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [collision2_name]
    tmp = _deserializer.string(buffer);
    data.collision2_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [wrenches]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wrenches]
    data.wrenches = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Wrench.deserialize(buffer);
      data.wrenches[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [total_wrench]
    tmp = geometry_msgs.msg.Wrench.deserialize(buffer);
    data.total_wrench = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [contact_positions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_positions]
    data.contact_positions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
      data.contact_positions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [contact_normals]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_normals]
    data.contact_normals = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
      data.contact_normals[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [depths]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [depths]
    data.depths = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.depths[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/ContactState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '48c0ffb054b8c444f870cecea1ee50d9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string info                                   # text info on this contact
    string collision1_name                        # name of contact collision1
    string collision2_name                        # name of contact collision2
    geometry_msgs/Wrench[] wrenches               # list of forces/torques
    geometry_msgs/Wrench total_wrench             # sum of forces/torques in every DOF
    geometry_msgs/Vector3[] contact_positions     # list of contact position
    geometry_msgs/Vector3[] contact_normals       # list of contact normals
    float64[] depths                              # list of penetration depths
    
    ================================================================================
    MSG: geometry_msgs/Wrench
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

module.exports = ContactState;
