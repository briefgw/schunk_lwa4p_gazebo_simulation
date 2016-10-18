// Auto-generated. Do not edit!

// (in-package control_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class QueryTrajectoryStateRequest {
  constructor() {
    this.time = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryTrajectoryStateRequest
    // Serialize message field [time]
    bufferInfo = _serializer.time(obj.time, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryTrajectoryStateRequest
    let tmp;
    let len;
    let data = new QueryTrajectoryStateRequest();
    // Deserialize message field [time]
    tmp = _deserializer.time(buffer);
    data.time = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_msgs/QueryTrajectoryStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '556a4fb76023a469987922359d08a844';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    time time
    
    `;
  }

};

class QueryTrajectoryStateResponse {
  constructor() {
    this.name = [];
    this.position = [];
    this.velocity = [];
    this.acceleration = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryTrajectoryStateResponse
    // Serialize the length for message field [name]
    bufferInfo = _serializer.uint32(obj.name.length, bufferInfo);
    // Serialize message field [name]
    obj.name.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [position]
    bufferInfo = _serializer.uint32(obj.position.length, bufferInfo);
    // Serialize message field [position]
    obj.position.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [velocity]
    bufferInfo = _serializer.uint32(obj.velocity.length, bufferInfo);
    // Serialize message field [velocity]
    obj.velocity.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [acceleration]
    bufferInfo = _serializer.uint32(obj.acceleration.length, bufferInfo);
    // Serialize message field [acceleration]
    obj.acceleration.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryTrajectoryStateResponse
    let tmp;
    let len;
    let data = new QueryTrajectoryStateResponse();
    // Deserialize array length for message field [name]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [name]
    data.name = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.name[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [position]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    data.position = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.position[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [velocity]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    data.velocity = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.velocity[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [acceleration]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [acceleration]
    data.acceleration = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.acceleration[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'control_msgs/QueryTrajectoryStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1f1a6554ad060f44d013e71868403c1a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string[] name
    float64[] position
    float64[] velocity
    float64[] acceleration
    
    
    `;
  }

};

module.exports = {
  Request: QueryTrajectoryStateRequest,
  Response: QueryTrajectoryStateResponse
};
