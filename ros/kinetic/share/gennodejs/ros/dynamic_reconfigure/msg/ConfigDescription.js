// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Group = require('./Group.js');
let Config = require('./Config.js');

//-----------------------------------------------------------

class ConfigDescription {
  constructor() {
    this.groups = [];
    this.max = new Config();
    this.min = new Config();
    this.dflt = new Config();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ConfigDescription
    // Serialize the length for message field [groups]
    bufferInfo = _serializer.uint32(obj.groups.length, bufferInfo);
    // Serialize message field [groups]
    obj.groups.forEach((val) => {
      bufferInfo = Group.serialize(val, bufferInfo);
    });
    // Serialize message field [max]
    bufferInfo = Config.serialize(obj.max, bufferInfo);
    // Serialize message field [min]
    bufferInfo = Config.serialize(obj.min, bufferInfo);
    // Serialize message field [dflt]
    bufferInfo = Config.serialize(obj.dflt, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ConfigDescription
    let tmp;
    let len;
    let data = new ConfigDescription();
    // Deserialize array length for message field [groups]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [groups]
    data.groups = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Group.deserialize(buffer);
      data.groups[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [max]
    tmp = Config.deserialize(buffer);
    data.max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min]
    tmp = Config.deserialize(buffer);
    data.min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dflt]
    tmp = Config.deserialize(buffer);
    data.dflt = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/ConfigDescription';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '757ce9d44ba8ddd801bb30bc456f946f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Group[] groups
    Config max
    Config min
    Config dflt
    
    ================================================================================
    MSG: dynamic_reconfigure/Group
    string name
    string type
    ParamDescription[] parameters
    int32 parent 
    int32 id
    
    ================================================================================
    MSG: dynamic_reconfigure/ParamDescription
    string name
    string type
    uint32 level
    string description
    string edit_method
    
    ================================================================================
    MSG: dynamic_reconfigure/Config
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

module.exports = ConfigDescription;
