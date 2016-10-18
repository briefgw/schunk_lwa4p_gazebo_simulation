// Auto-generated. Do not edit!

// (in-package smach_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class SmachContainerStructure {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.path = '';
    this.children = [];
    this.internal_outcomes = [];
    this.outcomes_from = [];
    this.outcomes_to = [];
    this.container_outcomes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SmachContainerStructure
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [path]
    bufferInfo = _serializer.string(obj.path, bufferInfo);
    // Serialize the length for message field [children]
    bufferInfo = _serializer.uint32(obj.children.length, bufferInfo);
    // Serialize message field [children]
    obj.children.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [internal_outcomes]
    bufferInfo = _serializer.uint32(obj.internal_outcomes.length, bufferInfo);
    // Serialize message field [internal_outcomes]
    obj.internal_outcomes.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [outcomes_from]
    bufferInfo = _serializer.uint32(obj.outcomes_from.length, bufferInfo);
    // Serialize message field [outcomes_from]
    obj.outcomes_from.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [outcomes_to]
    bufferInfo = _serializer.uint32(obj.outcomes_to.length, bufferInfo);
    // Serialize message field [outcomes_to]
    obj.outcomes_to.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [container_outcomes]
    bufferInfo = _serializer.uint32(obj.container_outcomes.length, bufferInfo);
    // Serialize message field [container_outcomes]
    obj.container_outcomes.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SmachContainerStructure
    let tmp;
    let len;
    let data = new SmachContainerStructure();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [path]
    tmp = _deserializer.string(buffer);
    data.path = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [children]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [children]
    data.children = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.children[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [internal_outcomes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [internal_outcomes]
    data.internal_outcomes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.internal_outcomes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [outcomes_from]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outcomes_from]
    data.outcomes_from = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.outcomes_from[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [outcomes_to]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outcomes_to]
    data.outcomes_to = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.outcomes_to[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [container_outcomes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [container_outcomes]
    data.container_outcomes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.container_outcomes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'smach_msgs/SmachContainerStructure';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3d3d1e0d0f99779ee9e58101a5dcf7ea';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    # The path to this node in the server
    string path
    
    # The children of this node
    string[] children
    
    # The outcome edges
    # Each index across these arrays denote one edge
    string[] internal_outcomes
    string[] outcomes_from
    string[] outcomes_to
    
    # The potential outcomes from this container
    string[] container_outcomes
    
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
    
    `;
  }

};

module.exports = SmachContainerStructure;
