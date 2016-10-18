// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ContactState = require('./ContactState.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ContactsState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.states = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ContactsState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [states]
    bufferInfo = _serializer.uint32(obj.states.length, bufferInfo);
    // Serialize message field [states]
    obj.states.forEach((val) => {
      bufferInfo = ContactState.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ContactsState
    let tmp;
    let len;
    let data = new ContactsState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [states]
    data.states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ContactState.deserialize(buffer);
      data.states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/ContactsState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'acbcb1601a8e525bf72509f18e6f668d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header                                   # stamp
    gazebo_msgs/ContactState[] states            # array of geom pairs in contact
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: gazebo_msgs/ContactState
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

module.exports = ContactsState;
