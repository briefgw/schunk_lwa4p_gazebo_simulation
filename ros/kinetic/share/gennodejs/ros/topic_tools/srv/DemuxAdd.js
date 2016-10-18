// Auto-generated. Do not edit!

// (in-package topic_tools.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class DemuxAddRequest {
  constructor() {
    this.topic = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DemuxAddRequest
    // Serialize message field [topic]
    bufferInfo = _serializer.string(obj.topic, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DemuxAddRequest
    let tmp;
    let len;
    let data = new DemuxAddRequest();
    // Deserialize message field [topic]
    tmp = _deserializer.string(buffer);
    data.topic = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'topic_tools/DemuxAddRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd8f94bae31b356b24d0427f80426d0c3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string topic
    
    `;
  }

};

class DemuxAddResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DemuxAddResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DemuxAddResponse
    let tmp;
    let len;
    let data = new DemuxAddResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'topic_tools/DemuxAddResponse';
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
  Request: DemuxAddRequest,
  Response: DemuxAddResponse
};
