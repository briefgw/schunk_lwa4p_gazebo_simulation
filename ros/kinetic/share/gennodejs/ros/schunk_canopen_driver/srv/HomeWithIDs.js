// Auto-generated. Do not edit!

// (in-package schunk_canopen_driver.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class HomeWithIDsRequest {
  constructor() {
    this.node_ids = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HomeWithIDsRequest
    // Serialize the length for message field [node_ids]
    bufferInfo = _serializer.uint32(obj.node_ids.length, bufferInfo);
    // Serialize message field [node_ids]
    bufferInfo.buffer.push(obj.node_ids);
    bufferInfo.length += obj.node_ids.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HomeWithIDsRequest
    let tmp;
    let len;
    let data = new HomeWithIDsRequest();
    // Deserialize array length for message field [node_ids]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [node_ids]
    data.node_ids = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'schunk_canopen_driver/HomeWithIDsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '36ef7d6b0fc32d5581b8c1de00e0e4a4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    uint8[] node_ids
    
    `;
  }

};

class HomeWithIDsResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type HomeWithIDsResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type HomeWithIDsResponse
    let tmp;
    let len;
    let data = new HomeWithIDsResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'schunk_canopen_driver/HomeWithIDsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '358e233cde0c8a8bcfea4ce193f8fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    
    
    `;
  }

};

module.exports = {
  Request: HomeWithIDsRequest,
  Response: HomeWithIDsResponse
};
