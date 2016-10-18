// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SpawnModelRequest {
  constructor() {
    this.model_name = '';
    this.model_xml = '';
    this.robot_namespace = '';
    this.initial_pose = new geometry_msgs.msg.Pose();
    this.reference_frame = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SpawnModelRequest
    // Serialize message field [model_name]
    bufferInfo = _serializer.string(obj.model_name, bufferInfo);
    // Serialize message field [model_xml]
    bufferInfo = _serializer.string(obj.model_xml, bufferInfo);
    // Serialize message field [robot_namespace]
    bufferInfo = _serializer.string(obj.robot_namespace, bufferInfo);
    // Serialize message field [initial_pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.initial_pose, bufferInfo);
    // Serialize message field [reference_frame]
    bufferInfo = _serializer.string(obj.reference_frame, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SpawnModelRequest
    let tmp;
    let len;
    let data = new SpawnModelRequest();
    // Deserialize message field [model_name]
    tmp = _deserializer.string(buffer);
    data.model_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [model_xml]
    tmp = _deserializer.string(buffer);
    data.model_xml = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robot_namespace]
    tmp = _deserializer.string(buffer);
    data.robot_namespace = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [initial_pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.initial_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reference_frame]
    tmp = _deserializer.string(buffer);
    data.reference_frame = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SpawnModelRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6d0eba5753761cd57e6263a056b79930';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string model_name
    string model_xml
    string robot_namespace
    geometry_msgs/Pose initial_pose
    string reference_frame
    
    
    
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

class SpawnModelResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SpawnModelResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SpawnModelResponse
    let tmp;
    let len;
    let data = new SpawnModelResponse();
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
    return 'gazebo_msgs/SpawnModelResponse';
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
  Request: SpawnModelRequest,
  Response: SpawnModelResponse
};
