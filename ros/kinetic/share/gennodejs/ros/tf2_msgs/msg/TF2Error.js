// Auto-generated. Do not edit!

// (in-package tf2_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TF2Error {
  constructor() {
    this.error = 0;
    this.error_string = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TF2Error
    // Serialize message field [error]
    bufferInfo = _serializer.uint8(obj.error, bufferInfo);
    // Serialize message field [error_string]
    bufferInfo = _serializer.string(obj.error_string, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TF2Error
    let tmp;
    let len;
    let data = new TF2Error();
    // Deserialize message field [error]
    tmp = _deserializer.uint8(buffer);
    data.error = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [error_string]
    tmp = _deserializer.string(buffer);
    data.error_string = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'tf2_msgs/TF2Error';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bc6848fd6fd750c92e38575618a4917d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 NO_ERROR = 0
    uint8 LOOKUP_ERROR = 1
    uint8 CONNECTIVITY_ERROR = 2
    uint8 EXTRAPOLATION_ERROR = 3
    uint8 INVALID_ARGUMENT_ERROR = 4
    uint8 TIMEOUT_ERROR = 5
    uint8 TRANSFORM_ERROR = 6
    
    uint8 error
    string error_string
    
    `;
  }

};

// Constants for message
TF2Error.Constants = {
  NO_ERROR: 0,
  LOOKUP_ERROR: 1,
  CONNECTIVITY_ERROR: 2,
  EXTRAPOLATION_ERROR: 3,
  INVALID_ARGUMENT_ERROR: 4,
  TIMEOUT_ERROR: 5,
  TRANSFORM_ERROR: 6,
}

module.exports = TF2Error;
