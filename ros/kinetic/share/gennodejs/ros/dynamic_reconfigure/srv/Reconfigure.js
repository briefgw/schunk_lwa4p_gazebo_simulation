// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Config = require('../msg/Config.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ReconfigureRequest {
  constructor() {
    this.config = new Config();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ReconfigureRequest
    // Serialize message field [config]
    bufferInfo = Config.serialize(obj.config, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ReconfigureRequest
    let tmp;
    let len;
    let data = new ReconfigureRequest();
    // Deserialize message field [config]
    tmp = Config.deserialize(buffer);
    data.config = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'dynamic_reconfigure/ReconfigureRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ac41a77620a4a0348b7001641796a8a1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Config config
    
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

class ReconfigureResponse {
  constructor() {
    this.config = new Config();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ReconfigureResponse
    // Serialize message field [config]
    bufferInfo = Config.serialize(obj.config, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ReconfigureResponse
    let tmp;
    let len;
    let data = new ReconfigureResponse();
    // Deserialize message field [config]
    tmp = Config.deserialize(buffer);
    data.config = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'dynamic_reconfigure/ReconfigureResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ac41a77620a4a0348b7001641796a8a1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Config config
    
    
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

module.exports = {
  Request: ReconfigureRequest,
  Response: ReconfigureResponse
};
