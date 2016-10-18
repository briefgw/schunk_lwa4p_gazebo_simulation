// Auto-generated. Do not edit!

// (in-package controller_manager_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ReloadControllerLibrariesRequest {
  constructor() {
    this.force_kill = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ReloadControllerLibrariesRequest
    // Serialize message field [force_kill]
    bufferInfo = _serializer.bool(obj.force_kill, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ReloadControllerLibrariesRequest
    let tmp;
    let len;
    let data = new ReloadControllerLibrariesRequest();
    // Deserialize message field [force_kill]
    tmp = _deserializer.bool(buffer);
    data.force_kill = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'controller_manager_msgs/ReloadControllerLibrariesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '18442b59be9479097f11c543bddbac62';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    
    
    
    bool force_kill
    
    `;
  }

};

class ReloadControllerLibrariesResponse {
  constructor() {
    this.ok = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ReloadControllerLibrariesResponse
    // Serialize message field [ok]
    bufferInfo = _serializer.bool(obj.ok, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ReloadControllerLibrariesResponse
    let tmp;
    let len;
    let data = new ReloadControllerLibrariesResponse();
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
    return 'controller_manager_msgs/ReloadControllerLibrariesResponse';
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
  Request: ReloadControllerLibrariesRequest,
  Response: ReloadControllerLibrariesResponse
};
