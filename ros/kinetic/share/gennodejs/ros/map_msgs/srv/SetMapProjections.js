// Auto-generated. Do not edit!

// (in-package map_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let ProjectedMapInfo = require('../msg/ProjectedMapInfo.js');

//-----------------------------------------------------------

class SetMapProjectionsRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetMapProjectionsRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetMapProjectionsRequest
    let tmp;
    let len;
    let data = new SetMapProjectionsRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/SetMapProjectionsRequest';
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

class SetMapProjectionsResponse {
  constructor() {
    this.projected_maps_info = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetMapProjectionsResponse
    // Serialize the length for message field [projected_maps_info]
    bufferInfo = _serializer.uint32(obj.projected_maps_info.length, bufferInfo);
    // Serialize message field [projected_maps_info]
    obj.projected_maps_info.forEach((val) => {
      bufferInfo = ProjectedMapInfo.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetMapProjectionsResponse
    let tmp;
    let len;
    let data = new SetMapProjectionsResponse();
    // Deserialize array length for message field [projected_maps_info]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [projected_maps_info]
    data.projected_maps_info = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = ProjectedMapInfo.deserialize(buffer);
      data.projected_maps_info[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/SetMapProjectionsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd7980a33202421c8cd74565e57a4d229';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    map_msgs/ProjectedMapInfo[] projected_maps_info
    
    
    ================================================================================
    MSG: map_msgs/ProjectedMapInfo
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

module.exports = {
  Request: SetMapProjectionsRequest,
  Response: SetMapProjectionsResponse
};
