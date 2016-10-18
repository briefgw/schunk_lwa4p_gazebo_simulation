// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ListControllerTypesRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListControllerTypesRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListControllerTypesRequest
    let tmp;
    let len;
    let data = new ListControllerTypesRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/ListControllerTypesRequest';
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

class ListControllerTypesResponse {
  constructor() {
    this.types = [];
    this.base_classes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListControllerTypesResponse
    // Serialize the length for message field [types]
    bufferInfo = _serializer.uint32(obj.types.length, bufferInfo);
    // Serialize message field [types]
    obj.types.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [base_classes]
    bufferInfo = _serializer.uint32(obj.base_classes.length, bufferInfo);
    // Serialize message field [base_classes]
    obj.base_classes.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListControllerTypesResponse
    let tmp;
    let len;
    let data = new ListControllerTypesResponse();
    // Deserialize array length for message field [types]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [types]
    data.types = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.types[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [base_classes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [base_classes]
    data.base_classes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.base_classes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/ListControllerTypesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c1d4cd11aefa9f97ba4aeb5b33987f4e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[] types
    string[] base_classes
    
    
    `;
  }

};

module.exports = {
  Request: ListControllerTypesRequest,
  Response: ListControllerTypesResponse
};
