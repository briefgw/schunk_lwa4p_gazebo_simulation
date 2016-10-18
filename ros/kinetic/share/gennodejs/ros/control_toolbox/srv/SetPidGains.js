// Auto-generated. Do not edit!

// (in-package control_toolbox.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetPidGainsRequest {
  constructor() {
    this.p = 0.0;
    this.i = 0.0;
    this.d = 0.0;
    this.i_clamp = 0.0;
    this.antiwindup = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPidGainsRequest
    // Serialize message field [p]
    bufferInfo = _serializer.float64(obj.p, bufferInfo);
    // Serialize message field [i]
    bufferInfo = _serializer.float64(obj.i, bufferInfo);
    // Serialize message field [d]
    bufferInfo = _serializer.float64(obj.d, bufferInfo);
    // Serialize message field [i_clamp]
    bufferInfo = _serializer.float64(obj.i_clamp, bufferInfo);
    // Serialize message field [antiwindup]
    bufferInfo = _serializer.bool(obj.antiwindup, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPidGainsRequest
    let tmp;
    let len;
    let data = new SetPidGainsRequest();
    // Deserialize message field [p]
    tmp = _deserializer.float64(buffer);
    data.p = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i]
    tmp = _deserializer.float64(buffer);
    data.i = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [d]
    tmp = _deserializer.float64(buffer);
    data.d = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [i_clamp]
    tmp = _deserializer.float64(buffer);
    data.i_clamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [antiwindup]
    tmp = _deserializer.bool(buffer);
    data.antiwindup = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_toolbox/SetPidGainsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4a43159879643e60937bf2893b633607';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 p
    float64 i
    float64 d
    float64 i_clamp
    bool antiwindup
    
    `;
  }

};

class SetPidGainsResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPidGainsResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPidGainsResponse
    let tmp;
    let len;
    let data = new SetPidGainsResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_toolbox/SetPidGainsResponse';
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
  Request: SetPidGainsRequest,
  Response: SetPidGainsResponse
};
