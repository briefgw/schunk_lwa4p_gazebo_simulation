// Auto-generated. Do not edit!

// (in-package smach_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SmachContainerInitialStatusCmd {
  constructor() {
    this.path = '';
    this.initial_states = [];
    this.local_data = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SmachContainerInitialStatusCmd
    // Serialize message field [path]
    bufferInfo = _serializer.string(obj.path, bufferInfo);
    // Serialize the length for message field [initial_states]
    bufferInfo = _serializer.uint32(obj.initial_states.length, bufferInfo);
    // Serialize message field [initial_states]
    obj.initial_states.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [local_data]
    bufferInfo = _serializer.string(obj.local_data, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SmachContainerInitialStatusCmd
    let tmp;
    let len;
    let data = new SmachContainerInitialStatusCmd();
    // Deserialize message field [path]
    tmp = _deserializer.string(buffer);
    data.path = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [initial_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [initial_states]
    data.initial_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.initial_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [local_data]
    tmp = _deserializer.string(buffer);
    data.local_data = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'smach_msgs/SmachContainerInitialStatusCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '45f8cf31fc29b829db77f23001f788d6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The path to the node in the server
    string path
    
    # The desired initial state(s)
    string[] initial_states
    
    # Initial values for the local user data of the state machine
    # A pickled user data structure
    # i.e. the UserData's internal dictionary
    string local_data
    
    `;
  }

};

module.exports = SmachContainerInitialStatusCmd;
