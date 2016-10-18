// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GetLinkPropertiesRequest {
  constructor() {
    this.link_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLinkPropertiesRequest
    // Serialize message field [link_name]
    bufferInfo = _serializer.string(obj.link_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLinkPropertiesRequest
    let tmp;
    let len;
    let data = new GetLinkPropertiesRequest();
    // Deserialize message field [link_name]
    tmp = _deserializer.string(buffer);
    data.link_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetLinkPropertiesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7d82d60381f1b66a30f2157f60884345';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string link_name
    
    
    `;
  }

};

class GetLinkPropertiesResponse {
  constructor() {
    this.com = new geometry_msgs.msg.Pose();
    this.gravity_mode = false;
    this.mass = 0.0;
    this.ixx = 0.0;
    this.ixy = 0.0;
    this.ixz = 0.0;
    this.iyy = 0.0;
    this.iyz = 0.0;
    this.izz = 0.0;
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLinkPropertiesResponse
    // Serialize message field [com]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.com, bufferInfo);
    // Serialize message field [gravity_mode]
    bufferInfo = _serializer.bool(obj.gravity_mode, bufferInfo);
    // Serialize message field [mass]
    bufferInfo = _serializer.float64(obj.mass, bufferInfo);
    // Serialize message field [ixx]
    bufferInfo = _serializer.float64(obj.ixx, bufferInfo);
    // Serialize message field [ixy]
    bufferInfo = _serializer.float64(obj.ixy, bufferInfo);
    // Serialize message field [ixz]
    bufferInfo = _serializer.float64(obj.ixz, bufferInfo);
    // Serialize message field [iyy]
    bufferInfo = _serializer.float64(obj.iyy, bufferInfo);
    // Serialize message field [iyz]
    bufferInfo = _serializer.float64(obj.iyz, bufferInfo);
    // Serialize message field [izz]
    bufferInfo = _serializer.float64(obj.izz, bufferInfo);
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLinkPropertiesResponse
    let tmp;
    let len;
    let data = new GetLinkPropertiesResponse();
    // Deserialize message field [com]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.com = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gravity_mode]
    tmp = _deserializer.bool(buffer);
    data.gravity_mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mass]
    tmp = _deserializer.float64(buffer);
    data.mass = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixx]
    tmp = _deserializer.float64(buffer);
    data.ixx = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixy]
    tmp = _deserializer.float64(buffer);
    data.ixy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ixz]
    tmp = _deserializer.float64(buffer);
    data.ixz = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iyy]
    tmp = _deserializer.float64(buffer);
    data.iyy = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [iyz]
    tmp = _deserializer.float64(buffer);
    data.iyz = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [izz]
    tmp = _deserializer.float64(buffer);
    data.izz = tmp.data;
    buffer = tmp.buffer;
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
    return 'gazebo_msgs/GetLinkPropertiesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a8619f92d17cfcc3958c0fd13299443d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Pose com
    
    
    bool gravity_mode
    float64 mass
    float64 ixx
    float64 ixy
    float64 ixz
    float64 iyy
    float64 iyz
    float64 izz
    bool success
    string status_message
    
    
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

module.exports = {
  Request: GetLinkPropertiesRequest,
  Response: GetLinkPropertiesResponse
};
