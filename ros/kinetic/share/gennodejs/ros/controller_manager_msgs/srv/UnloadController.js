// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class UnloadControllerRequest {
  constructor() {
    this.name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UnloadControllerRequest
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UnloadControllerRequest
    let tmp;
    let len;
    let data = new UnloadControllerRequest();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/UnloadControllerRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c1f3d28f1b044c871e6eff2e9fc3c667';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    
    string name
    
    `;
  }

};

class UnloadControllerResponse {
  constructor() {
    this.ok = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type UnloadControllerResponse
    // Serialize message field [ok]
    bufferInfo = _serializer.bool(obj.ok, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type UnloadControllerResponse
    let tmp;
    let len;
    let data = new UnloadControllerResponse();
    // Deserialize message field [ok]
    tmp = _deserializer.bool(buffer);
    data.ok = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/UnloadControllerResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6f6da3883749771fac40d6deb24a8c02';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool ok
    
    `;
  }

};

module.exports = {
  Request: UnloadControllerRequest,
  Response: UnloadControllerResponse
};
