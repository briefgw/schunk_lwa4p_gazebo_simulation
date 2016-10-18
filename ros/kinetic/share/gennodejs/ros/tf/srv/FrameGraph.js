// Auto-generated. Do not edit!

// (in-package tf.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class FrameGraphRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FrameGraphRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FrameGraphRequest
    let tmp;
    let len;
    let data = new FrameGraphRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'tf/FrameGraphRequest';
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

class FrameGraphResponse {
  constructor() {
    this.dot_graph = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type FrameGraphResponse
    // Serialize message field [dot_graph]
    bufferInfo = _serializer.string(obj.dot_graph, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type FrameGraphResponse
    let tmp;
    let len;
    let data = new FrameGraphResponse();
    // Deserialize message field [dot_graph]
    tmp = _deserializer.string(buffer);
    data.dot_graph = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'tf/FrameGraphResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c4af9ac907e58e906eb0b6e3c58478c0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string dot_graph
    
    
    `;
  }

};

module.exports = {
  Request: FrameGraphRequest,
  Response: FrameGraphResponse
};
