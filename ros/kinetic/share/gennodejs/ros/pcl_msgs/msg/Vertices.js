// Auto-generated. Do not edit!

// (in-package pcl_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Vertices {
  constructor() {
    this.vertices = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Vertices
    // Serialize the length for message field [vertices]
    bufferInfo = _serializer.uint32(obj.vertices.length, bufferInfo);
    // Serialize message field [vertices]
    obj.vertices.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Vertices
    let tmp;
    let len;
    let data = new Vertices();
    // Deserialize array length for message field [vertices]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vertices]
    data.vertices = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.vertices[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'pcl_msgs/Vertices';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '39bd7b1c23763ddd1b882b97cb7cfe11';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # List of point indices
    uint32[] vertices
    
    `;
  }

};

module.exports = Vertices;
