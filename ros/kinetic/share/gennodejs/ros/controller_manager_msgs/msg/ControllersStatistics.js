// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ControllerStatistics = require('./ControllerStatistics.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ControllersStatistics {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.controller = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ControllersStatistics
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [controller]
    bufferInfo = _serializer.uint32(obj.controller.length, bufferInfo);
    // Serialize message field [controller]
    obj.controller.forEach((val) => {
      bufferInfo = ControllerStatistics.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ControllersStatistics
    let tmp;
    let len;
    let data = new ControllersStatistics();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [controller]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [controller]
    data.controller = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ControllerStatistics.deserialize(buffer);
      data.controller[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'controller_manager_msgs/ControllersStatistics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a154c347736773e3700d1719105df29d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    std_msgs/Header header
    controller_manager_msgs/ControllerStatistics[] controller
    
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
    MSG: controller_manager_msgs/ControllerStatistics
    # This message contains the state of one realtime controller
    # that was spawned in the controller manager
    
    # the name of the controller
    string name
    
    # the type of the controller
    string type
    
    # the time at which these controller statistics were measured
    time timestamp
    
    # bool that indicates if the controller is currently
    # in a running or a stopped state
    bool running
    
    # the maximum time the update loop of the controller ever needed to complete
    duration max_time
    
    # the average time the update loop of the controller needs to complete.
    # the average is computed in a sliding time window.
    duration mean_time
    
    # the variance on the time the update loop of the controller needs to complete.
    # the variance applies to a sliding time window.
    duration variance_time
    
    # the number of times this controller broke the realtime loop
    int32 num_control_loop_overruns
    
    # the timestamp of the last time this controller broke the realtime loop
    time time_last_control_loop_overrun
    `;
  }

};

module.exports = ControllersStatistics;
