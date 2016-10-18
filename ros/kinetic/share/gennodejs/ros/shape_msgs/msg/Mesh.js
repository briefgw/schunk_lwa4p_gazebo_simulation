// Auto-generated. Do not edit!

// (in-package shape_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MeshTriangle = require('./MeshTriangle.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Mesh {
  constructor() {
    this.triangles = [];
    this.vertices = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Mesh
    // Serialize the length for message field [triangles]
    bufferInfo = _serializer.uint32(obj.triangles.length, bufferInfo);
    // Serialize message field [triangles]
    obj.triangles.forEach((val) => {
      bufferInfo = MeshTriangle.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [vertices]
    bufferInfo = _serializer.uint32(obj.vertices.length, bufferInfo);
    // Serialize message field [vertices]
    obj.vertices.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Point.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Mesh
    let tmp;
    let len;
    let data = new Mesh();
    // Deserialize array length for message field [triangles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [triangles]
    data.triangles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = MeshTriangle.deserialize(buffer);
      data.triangles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [vertices]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vertices]
    data.vertices = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Point.deserialize(buffer);
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
    return 'shape_msgs/Mesh';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1ffdae9486cd3316a121c578b47a85cc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Definition of a mesh
    
    # list of triangles; the index values refer to positions in vertices[]
    MeshTriangle[] triangles
    
    # the actual vertices that make up the mesh
    geometry_msgs/Point[] vertices
    
    ================================================================================
    MSG: shape_msgs/MeshTriangle
    # Definition of a triangle's vertices
    uint32[3] vertex_indices
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

module.exports = Mesh;
