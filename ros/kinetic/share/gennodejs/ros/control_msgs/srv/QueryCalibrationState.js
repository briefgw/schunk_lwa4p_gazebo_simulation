// Auto-generated. Do not edit!

// (in-package control_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class QueryCalibrationStateRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryCalibrationStateRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryCalibrationStateRequest
    let tmp;
    let len;
    let data = new QueryCalibrationStateRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_msgs/QueryCalibrationStateRequest';
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

class QueryCalibrationStateResponse {
  constructor() {
    this.is_calibrated = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryCalibrationStateResponse
    // Serialize message field [is_calibrated]
    bufferInfo = _serializer.bool(obj.is_calibrated, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryCalibrationStateResponse
    let tmp;
    let len;
    let data = new QueryCalibrationStateResponse();
    // Deserialize message field [is_calibrated]
    tmp = _deserializer.bool(buffer);
    data.is_calibrated = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_msgs/QueryCalibrationStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28af3beedcb84986b8e470dc5470507d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool is_calibrated
    
    `;
  }

};

module.exports = {
  Request: QueryCalibrationStateRequest,
  Response: QueryCalibrationStateResponse
};
