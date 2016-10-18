// Auto-generated. Do not edit!

// (in-package topic_tools.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class DemuxListRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DemuxListRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DemuxListRequest
    let tmp;
    let len;
    let data = new DemuxListRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'topic_tools/DemuxListRequest';
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

class DemuxListResponse {
  constructor() {
    this.topics = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DemuxListResponse
    // Serialize the length for message field [topics]
    bufferInfo = _serializer.uint32(obj.topics.length, bufferInfo);
    // Serialize message field [topics]
    obj.topics.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DemuxListResponse
    let tmp;
    let len;
    let data = new DemuxListResponse();
    // Deserialize array length for message field [topics]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [topics]
    data.topics = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.topics[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'topic_tools/DemuxListResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b0eef9a05d4e829092fc2f2c3c2aad3d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[] topics
    
    
    `;
  }

};

module.exports = {
  Request: DemuxListRequest,
  Response: DemuxListResponse
};
