// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let BoolParameter = require('./BoolParameter.js');
let IntParameter = require('./IntParameter.js');
let StrParameter = require('./StrParameter.js');
let DoubleParameter = require('./DoubleParameter.js');
let GroupState = require('./GroupState.js');

//-----------------------------------------------------------

class Config {
  constructor() {
    this.bools = [];
    this.ints = [];
    this.strs = [];
    this.doubles = [];
    this.groups = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Config
    // Serialize the length for message field [bools]
    bufferInfo = _serializer.uint32(obj.bools.length, bufferInfo);
    // Serialize message field [bools]
    obj.bools.forEach((val) => {
      bufferInfo = BoolParameter.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [ints]
    bufferInfo = _serializer.uint32(obj.ints.length, bufferInfo);
    // Serialize message field [ints]
    obj.ints.forEach((val) => {
      bufferInfo = IntParameter.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [strs]
    bufferInfo = _serializer.uint32(obj.strs.length, bufferInfo);
    // Serialize message field [strs]
    obj.strs.forEach((val) => {
      bufferInfo = StrParameter.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [doubles]
    bufferInfo = _serializer.uint32(obj.doubles.length, bufferInfo);
    // Serialize message field [doubles]
    obj.doubles.forEach((val) => {
      bufferInfo = DoubleParameter.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [groups]
    bufferInfo = _serializer.uint32(obj.groups.length, bufferInfo);
    // Serialize message field [groups]
    obj.groups.forEach((val) => {
      bufferInfo = GroupState.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Config
    let tmp;
    let len;
    let data = new Config();
    // Deserialize array length for message field [bools]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [bools]
    data.bools = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = BoolParameter.deserialize(buffer);
      data.bools[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [ints]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ints]
    data.ints = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = IntParameter.deserialize(buffer);
      data.ints[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [strs]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [strs]
    data.strs = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = StrParameter.deserialize(buffer);
      data.strs[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [doubles]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [doubles]
    data.doubles = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = DoubleParameter.deserialize(buffer);
      data.doubles[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [groups]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [groups]
    data.groups = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = GroupState.deserialize(buffer);
      data.groups[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/Config';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '958f16a05573709014982821e6822580';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    BoolParameter[] bools
    IntParameter[] ints
    StrParameter[] strs
    DoubleParameter[] doubles
    GroupState[] groups
    
    ================================================================================
    MSG: dynamic_reconfigure/BoolParameter
    string name
    bool value
    
    ================================================================================
    MSG: dynamic_reconfigure/IntParameter
    string name
    int32 value
    
    ================================================================================
    MSG: dynamic_reconfigure/StrParameter
    string name
    string value
    
    ================================================================================
    MSG: dynamic_reconfigure/DoubleParameter
    string name
    float64 value
    
    ================================================================================
    MSG: dynamic_reconfigure/GroupState
    string name
    bool state
    int32 id
    int32 parent
    
    `;
  }

};

module.exports = Config;
