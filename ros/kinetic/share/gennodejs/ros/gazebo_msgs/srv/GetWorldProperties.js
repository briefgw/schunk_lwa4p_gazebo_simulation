// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetWorldPropertiesRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetWorldPropertiesRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetWorldPropertiesRequest
    let tmp;
    let len;
    let data = new GetWorldPropertiesRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetWorldPropertiesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    `;
  }

};

class GetWorldPropertiesResponse {
  constructor() {
    this.sim_time = 0.0;
    this.model_names = [];
    this.rendering_enabled = false;
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetWorldPropertiesResponse
    // Serialize message field [sim_time]
    bufferInfo = _serializer.float64(obj.sim_time, bufferInfo);
    // Serialize the length for message field [model_names]
    bufferInfo = _serializer.uint32(obj.model_names.length, bufferInfo);
    // Serialize message field [model_names]
    obj.model_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [rendering_enabled]
    bufferInfo = _serializer.bool(obj.rendering_enabled, bufferInfo);
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetWorldPropertiesResponse
    let tmp;
    let len;
    let data = new GetWorldPropertiesResponse();
    // Deserialize message field [sim_time]
    tmp = _deserializer.float64(buffer);
    data.sim_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [model_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [model_names]
    data.model_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.model_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [rendering_enabled]
    tmp = _deserializer.bool(buffer);
    data.rendering_enabled = tmp.data;
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
    return 'gazebo_msgs/GetWorldPropertiesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '36bb0f2eccf4d8be971410c22818ba3f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 sim_time
    string[] model_names
    bool rendering_enabled
    bool success
    string status_message
    
    
    `;
  }

};

module.exports = {
  Request: GetWorldPropertiesRequest,
  Response: GetWorldPropertiesResponse
};
