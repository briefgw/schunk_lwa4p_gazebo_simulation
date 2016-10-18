// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LaserEcho {
  constructor() {
    this.echoes = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LaserEcho
    // Serialize the length for message field [echoes]
    bufferInfo = _serializer.uint32(obj.echoes.length, bufferInfo);
    // Serialize message field [echoes]
    obj.echoes.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LaserEcho
    let tmp;
    let len;
    let data = new LaserEcho();
    // Deserialize array length for message field [echoes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [echoes]
    data.echoes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.echoes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/LaserEcho';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8bc5ae449b200fba4d552b4225586696';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message is a submessage of MultiEchoLaserScan and is not intended
    # to be used separately.
    
    float32[] echoes  # Multiple values of ranges or intensities.
                      # Each array represents data from the same angle increment.
    `;
  }

};

module.exports = LaserEcho;
