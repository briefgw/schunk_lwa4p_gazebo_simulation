// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ApplyJointEffortRequest {
  constructor() {
    this.joint_name = '';
    this.effort = 0.0;
    this.start_time = {secs: 0, nsecs: 0};
    this.duration = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ApplyJointEffortRequest
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    // Serialize message field [effort]
    bufferInfo = _serializer.float64(obj.effort, bufferInfo);
    // Serialize message field [start_time]
    bufferInfo = _serializer.time(obj.start_time, bufferInfo);
    // Serialize message field [duration]
    bufferInfo = _serializer.duration(obj.duration, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ApplyJointEffortRequest
    let tmp;
    let len;
    let data = new ApplyJointEffortRequest();
    // Deserialize message field [joint_name]
    tmp = _deserializer.string(buffer);
    data.joint_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [effort]
    tmp = _deserializer.float64(buffer);
    data.effort = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [start_time]
    tmp = _deserializer.time(buffer);
    data.start_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [duration]
    tmp = _deserializer.duration(buffer);
    data.duration = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/ApplyJointEffortRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2c3396ab9af67a509ecd2167a8fe41a2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string joint_name
    float64 effort
    time start_time
    
    duration duration
    
    
    
    
    
    `;
  }

};

class ApplyJointEffortResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ApplyJointEffortResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ApplyJointEffortResponse
    let tmp;
    let len;
    let data = new ApplyJointEffortResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status_message]
    tmp = _deserializer.string(buffer);
    data.status_message = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/ApplyJointEffortResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2ec6f3eff0161f4257b808b12bc830c2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    string status_message
    
    
    `;
  }

};

module.exports = {
  Request: ApplyJointEffortRequest,
  Response: ApplyJointEffortResponse
};
