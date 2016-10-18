// Auto-generated. Do not edit!

// (in-package bond.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Constants {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Constants
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Constants
    let tmp;
    let len;
    let data = new Constants();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bond/Constants';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6fc594dc1d7bd7919077042712f8c8b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float32 DEAD_PUBLISH_PERIOD = 0.05
    float32 DEFAULT_CONNECT_TIMEOUT = 10.0
    float32 DEFAULT_HEARTBEAT_TIMEOUT = 4.0
    float32 DEFAULT_DISCONNECT_TIMEOUT = 2.0
    float32 DEFAULT_HEARTBEAT_PERIOD = 1.0
    
    string DISABLE_HEARTBEAT_TIMEOUT_PARAM=/bond_disable_heartbeat_timeout
    `;
  }

};

// Constants for message
Constants.Constants = {
  DEAD_PUBLISH_PERIOD: 0.05,
  DEFAULT_CONNECT_TIMEOUT: 10.0,
  DEFAULT_HEARTBEAT_TIMEOUT: 4.0,
  DEFAULT_DISCONNECT_TIMEOUT: 2.0,
  DEFAULT_HEARTBEAT_PERIOD: 1.0,
  DISABLE_HEARTBEAT_TIMEOUT_PARAM: '/bond_disable_heartbeat_timeout',
}

module.exports = Constants;
