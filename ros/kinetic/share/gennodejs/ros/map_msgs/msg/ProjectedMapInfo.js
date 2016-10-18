// Auto-generated. Do not edit!

// (in-package map_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ProjectedMapInfo {
  constructor() {
    this.frame_id = '';
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
    this.min_z = 0.0;
    this.max_z = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ProjectedMapInfo
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.float64(obj.width, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.float64(obj.height, bufferInfo);
    // Serialize message field [min_z]
    bufferInfo = _serializer.float64(obj.min_z, bufferInfo);
    // Serialize message field [max_z]
    bufferInfo = _serializer.float64(obj.max_z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ProjectedMapInfo
    let tmp;
    let len;
    let data = new ProjectedMapInfo();
    // Deserialize message field [frame_id]
    tmp = _deserializer.string(buffer);
    data.frame_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.float64(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.float64(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_z]
    tmp = _deserializer.float64(buffer);
    data.min_z = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_z]
    tmp = _deserializer.float64(buffer);
    data.max_z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'map_msgs/ProjectedMapInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2dc10595ae94de23f22f8a6d2a0eef7a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string frame_id
    float64 x
    float64 y
    float64 width
    float64 height
    float64 min_z
    float64 max_z
    `;
  }

};

module.exports = ProjectedMapInfo;
