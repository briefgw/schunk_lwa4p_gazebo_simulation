// Auto-generated. Do not edit!

// (in-package smach_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class SmachContainerStatus {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.path = '';
    this.initial_states = [];
    this.active_states = [];
    this.local_data = '';
    this.info = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SmachContainerStatus
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [path]
    bufferInfo = _serializer.string(obj.path, bufferInfo);
    // Serialize the length for message field [initial_states]
    bufferInfo = _serializer.uint32(obj.initial_states.length, bufferInfo);
    // Serialize message field [initial_states]
    obj.initial_states.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [active_states]
    bufferInfo = _serializer.uint32(obj.active_states.length, bufferInfo);
    // Serialize message field [active_states]
    obj.active_states.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [local_data]
    bufferInfo = _serializer.string(obj.local_data, bufferInfo);
    // Serialize message field [info]
    bufferInfo = _serializer.string(obj.info, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SmachContainerStatus
    let tmp;
    let len;
    let data = new SmachContainerStatus();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
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
    // Deserialize array length for message field [active_states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [active_states]
    data.active_states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.active_states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [local_data]
    tmp = _deserializer.string(buffer);
    data.local_data = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [info]
    tmp = _deserializer.string(buffer);
    data.info = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'smach_msgs/SmachContainerStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5ba2bb79ac19e3842d562a191f2a675b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    # The path to this node in the server
    string path
    
    # The initial state description
    # Effects an arc from the top state to each one
    string[] initial_states
    
    # The current state description
    string[] active_states
    
    # A pickled user data structure
    # i.e. the UserData's internal dictionary
    string local_data
    
    # Debugging info string
    string info
    
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

module.exports = SmachContainerStatus;
