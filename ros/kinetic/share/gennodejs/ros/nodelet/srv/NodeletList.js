// Auto-generated. Do not edit!

// (in-package nodelet.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class NodeletListRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NodeletListRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NodeletListRequest
    let tmp;
    let len;
    let data = new NodeletListRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nodelet/NodeletListRequest';
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

class NodeletListResponse {
  constructor() {
    this.nodelets = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NodeletListResponse
    // Serialize the length for message field [nodelets]
    bufferInfo = _serializer.uint32(obj.nodelets.length, bufferInfo);
    // Serialize message field [nodelets]
    obj.nodelets.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NodeletListResponse
    let tmp;
    let len;
    let data = new NodeletListResponse();
    // Deserialize array length for message field [nodelets]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [nodelets]
    data.nodelets = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.nodelets[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nodelet/NodeletListResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '99c7b10e794f5600b8030e697e946ca7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[] nodelets
    
    
    `;
  }

};

module.exports = {
  Request: NodeletListRequest,
  Response: NodeletListResponse
};
