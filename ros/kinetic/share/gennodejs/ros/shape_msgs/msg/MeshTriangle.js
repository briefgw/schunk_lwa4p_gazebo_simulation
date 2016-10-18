// Auto-generated. Do not edit!

// (in-package shape_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MeshTriangle {
  constructor() {
    this.vertex_indices = new Array(3).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MeshTriangle
    // Serialize message field [vertex_indices]
    obj.vertex_indices.forEach((val) => {
      bufferInfo = _serializer.uint32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MeshTriangle
    let tmp;
    let len;
    let data = new MeshTriangle();
    len = 3;
    // Deserialize message field [vertex_indices]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.uint32(buffer);
      data.vertex_indices[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'shape_msgs/MeshTriangle';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '23688b2e6d2de3d32fe8af104a903253';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Definition of a triangle's vertices
    uint32[3] vertex_indices
    
    `;
  }

};

module.exports = MeshTriangle;
