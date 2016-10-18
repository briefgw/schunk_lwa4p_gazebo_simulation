// Auto-generated. Do not edit!

// (in-package nodelet.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class NodeletLoadRequest {
  constructor() {
    this.name = '';
    this.type = '';
    this.remap_source_args = [];
    this.remap_target_args = [];
    this.my_argv = [];
    this.bond_id = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NodeletLoadRequest
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.string(obj.type, bufferInfo);
    // Serialize the length for message field [remap_source_args]
    bufferInfo = _serializer.uint32(obj.remap_source_args.length, bufferInfo);
    // Serialize message field [remap_source_args]
    obj.remap_source_args.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [remap_target_args]
    bufferInfo = _serializer.uint32(obj.remap_target_args.length, bufferInfo);
    // Serialize message field [remap_target_args]
    obj.remap_target_args.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [my_argv]
    bufferInfo = _serializer.uint32(obj.my_argv.length, bufferInfo);
    // Serialize message field [my_argv]
    obj.my_argv.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [bond_id]
    bufferInfo = _serializer.string(obj.bond_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NodeletLoadRequest
    let tmp;
    let len;
    let data = new NodeletLoadRequest();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.string(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [remap_source_args]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [remap_source_args]
    data.remap_source_args = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.remap_source_args[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [remap_target_args]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [remap_target_args]
    data.remap_target_args = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.remap_target_args[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [my_argv]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [my_argv]
    data.my_argv = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.my_argv[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [bond_id]
    tmp = _deserializer.string(buffer);
    data.bond_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nodelet/NodeletLoadRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c6e28cc4d2e259249d96cfb50658fbec';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string type
    string[] remap_source_args
    string[] remap_target_args
    string[] my_argv
    
    string bond_id
    
    `;
  }

};

class NodeletLoadResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NodeletLoadResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NodeletLoadResponse
    let tmp;
    let len;
    let data = new NodeletLoadResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nodelet/NodeletLoadResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '358e233cde0c8a8bcfea4ce193f8fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    
    
    `;
  }

};

module.exports = {
  Request: NodeletLoadRequest,
  Response: NodeletLoadResponse
};
