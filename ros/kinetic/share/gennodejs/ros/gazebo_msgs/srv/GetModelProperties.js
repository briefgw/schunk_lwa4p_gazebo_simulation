// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetModelPropertiesRequest {
  constructor() {
    this.model_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelPropertiesRequest
    // Serialize message field [model_name]
    bufferInfo = _serializer.string(obj.model_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelPropertiesRequest
    let tmp;
    let len;
    let data = new GetModelPropertiesRequest();
    // Deserialize message field [model_name]
    tmp = _deserializer.string(buffer);
    data.model_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetModelPropertiesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ea31c8eab6fc401383cf528a7c0984ba';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string model_name
    
    `;
  }

};

class GetModelPropertiesResponse {
  constructor() {
    this.parent_model_name = '';
    this.canonical_body_name = '';
    this.body_names = [];
    this.geom_names = [];
    this.joint_names = [];
    this.child_model_names = [];
    this.is_static = false;
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelPropertiesResponse
    // Serialize message field [parent_model_name]
    bufferInfo = _serializer.string(obj.parent_model_name, bufferInfo);
    // Serialize message field [canonical_body_name]
    bufferInfo = _serializer.string(obj.canonical_body_name, bufferInfo);
    // Serialize the length for message field [body_names]
    bufferInfo = _serializer.uint32(obj.body_names.length, bufferInfo);
    // Serialize message field [body_names]
    obj.body_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [geom_names]
    bufferInfo = _serializer.uint32(obj.geom_names.length, bufferInfo);
    // Serialize message field [geom_names]
    obj.geom_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [joint_names]
    bufferInfo = _serializer.uint32(obj.joint_names.length, bufferInfo);
    // Serialize message field [joint_names]
    obj.joint_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [child_model_names]
    bufferInfo = _serializer.uint32(obj.child_model_names.length, bufferInfo);
    // Serialize message field [child_model_names]
    obj.child_model_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [is_static]
    bufferInfo = _serializer.bool(obj.is_static, bufferInfo);
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelPropertiesResponse
    let tmp;
    let len;
    let data = new GetModelPropertiesResponse();
    // Deserialize message field [parent_model_name]
    tmp = _deserializer.string(buffer);
    data.parent_model_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [canonical_body_name]
    tmp = _deserializer.string(buffer);
    data.canonical_body_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [body_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [body_names]
    data.body_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.body_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [geom_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [geom_names]
    data.geom_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.geom_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [joint_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_names]
    data.joint_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.joint_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [child_model_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [child_model_names]
    data.child_model_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.child_model_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [is_static]
    tmp = _deserializer.bool(buffer);
    data.is_static = tmp.data;
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
    return 'gazebo_msgs/GetModelPropertiesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b7f370938ef77b464b95f1bab3ec5028';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string parent_model_name
    string canonical_body_name
    string[] body_names
    string[] geom_names
    string[] joint_names
    string[] child_model_names
    bool is_static
    bool success
    string status_message
    
    
    `;
  }

};

module.exports = {
  Request: GetModelPropertiesRequest,
  Response: GetModelPropertiesResponse
};
