// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ControllerStatistics {
  constructor() {
    this.name = '';
    this.type = '';
    this.timestamp = {secs: 0, nsecs: 0};
    this.running = false;
    this.max_time = {secs: 0, nsecs: 0};
    this.mean_time = {secs: 0, nsecs: 0};
    this.variance_time = {secs: 0, nsecs: 0};
    this.num_control_loop_overruns = 0;
    this.time_last_control_loop_overrun = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ControllerStatistics
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize message field [timestamp]
    bufferInfo = _serializer.time(obj.timestamp, bufferInfo);
    // Serialize message field [running]
    bufferInfo = _serializer.bool(obj.running, bufferInfo);
    // Serialize message field [max_time]
    bufferInfo = _serializer.duration(obj.max_time, bufferInfo);
    // Serialize message field [mean_time]
    bufferInfo = _serializer.duration(obj.mean_time, bufferInfo);
    // Serialize message field [variance_time]
    bufferInfo = _serializer.duration(obj.variance_time, bufferInfo);
    // Serialize message field [num_control_loop_overruns]
    bufferInfo = _serializer.int32(obj.num_control_loop_overruns, bufferInfo);
    // Serialize message field [time_last_control_loop_overrun]
    bufferInfo = _serializer.time(obj.time_last_control_loop_overrun, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ControllerStatistics
    let tmp;
    let len;
    let data = new ControllerStatistics();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timestamp]
    tmp = _deserializer.time(buffer);
    data.timestamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [running]
    tmp = _deserializer.bool(buffer);
    data.running = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_time]
    tmp = _deserializer.duration(buffer);
    data.max_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mean_time]
    tmp = _deserializer.duration(buffer);
    data.mean_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [variance_time]
    tmp = _deserializer.duration(buffer);
    data.variance_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [num_control_loop_overruns]
    tmp = _deserializer.int32(buffer);
    data.num_control_loop_overruns = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_last_control_loop_overrun]
    tmp = _deserializer.time(buffer);
    data.time_last_control_loop_overrun = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'controller_manager_msgs/ControllerStatistics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '697780c372c8d8597a1436d0e2ad3ba8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = ControllerStatistics;
