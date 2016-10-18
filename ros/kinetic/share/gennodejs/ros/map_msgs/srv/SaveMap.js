// Auto-generated. Do not edit!

// (in-package map_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SaveMapRequest {
  constructor() {
    this.filename = new std_msgs.msg.String();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SaveMapRequest
    // Serialize message field [filename]
    bufferInfo = std_msgs.msg.String.serialize(obj.filename, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SaveMapRequest
    let tmp;
    let len;
    let data = new SaveMapRequest();
    // Deserialize message field [filename]
    tmp = std_msgs.msg.String.deserialize(buffer);
    data.filename = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/SaveMapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '716e25f9d9dc76ceba197f93cbf05dc7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    std_msgs/String filename
    
    
    ================================================================================
    MSG: std_msgs/String
    string data
    
    `;
  }

};

class SaveMapResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SaveMapResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SaveMapResponse
    let tmp;
    let len;
    let data = new SaveMapResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/SaveMapResponse';
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

module.exports = {
  Request: SaveMapRequest,
  Response: SaveMapResponse
};
