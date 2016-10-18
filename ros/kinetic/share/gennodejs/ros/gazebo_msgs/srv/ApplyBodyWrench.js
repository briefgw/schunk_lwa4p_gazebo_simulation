// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ApplyBodyWrenchRequest {
  constructor() {
    this.body_name = '';
    this.reference_frame = '';
    this.reference_point = new geometry_msgs.msg.Point();
    this.wrench = new geometry_msgs.msg.Wrench();
    this.start_time = {secs: 0, nsecs: 0};
    this.duration = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ApplyBodyWrenchRequest
    // Serialize message field [body_name]
    bufferInfo = _serializer.string(obj.body_name, bufferInfo);
    // Serialize message field [reference_frame]
    bufferInfo = _serializer.string(obj.reference_frame, bufferInfo);
    // Serialize message field [reference_point]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.reference_point, bufferInfo);
    // Serialize message field [wrench]
    bufferInfo = geometry_msgs.msg.Wrench.serialize(obj.wrench, bufferInfo);
    // Serialize message field [start_time]
    bufferInfo = _serializer.time(obj.start_time, bufferInfo);
    // Serialize message field [duration]
    bufferInfo = _serializer.duration(obj.duration, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ApplyBodyWrenchRequest
    let tmp;
    let len;
    let data = new ApplyBodyWrenchRequest();
    // Deserialize message field [body_name]
    tmp = _deserializer.string(buffer);
    data.body_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reference_frame]
    tmp = _deserializer.string(buffer);
    data.reference_frame = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reference_point]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.reference_point = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wrench]
    tmp = geometry_msgs.msg.Wrench.deserialize(buffer);
    data.wrench = tmp.data;
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
    return 'gazebo_msgs/ApplyBodyWrenchRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e37e6adf97eba5095baa77dffb71e5bd';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    string body_name
    
    
    string reference_frame
    
    
    geometry_msgs/Point  reference_point
    geometry_msgs/Wrench wrench
    time start_time
    
    
    duration duration
    
    
    
    
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
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

class ApplyBodyWrenchResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ApplyBodyWrenchResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ApplyBodyWrenchResponse
    let tmp;
    let len;
    let data = new ApplyBodyWrenchResponse();
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
    return 'gazebo_msgs/ApplyBodyWrenchResponse';
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
  Request: ApplyBodyWrenchRequest,
  Response: ApplyBodyWrenchResponse
};
