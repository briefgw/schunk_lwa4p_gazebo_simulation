// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SensorLevels {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SensorLevels
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SensorLevels
    let tmp;
    let len;
    let data = new SensorLevels();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/SensorLevels';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6322637bee96d5489db6e2127c47602c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message is deprecated, please use driver_base/SensorLevels instead.
    
    byte RECONFIGURE_CLOSE = 3  # Parameters that need a sensor to be stopped completely when changed
    byte RECONFIGURE_STOP = 1  # Parameters that need a sensor to stop streaming when changed
    byte RECONFIGURE_RUNNING = 0 # Parameters that can be changed while a sensor is streaming
    
    `;
  }

};

// Constants for message
SensorLevels.Constants = {
  RECONFIGURE_CLOSE: 3,
  RECONFIGURE_STOP: 1,
  RECONFIGURE_RUNNING: 0,
}

module.exports = SensorLevels;
