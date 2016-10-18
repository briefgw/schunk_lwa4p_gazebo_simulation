// Auto-generated. Do not edit!

// (in-package dynamic_reconfigure.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GroupState {
  constructor() {
    this.name = '';
    this.state = false;
    this.id = 0;
    this.parent = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GroupState
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [state]
    bufferInfo = _serializer.bool(obj.state, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.int32(obj.id, bufferInfo);
    // Serialize message field [parent]
    bufferInfo = _serializer.int32(obj.parent, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GroupState
    let tmp;
    let len;
    let data = new GroupState();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [state]
    tmp = _deserializer.bool(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.int32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parent]
    tmp = _deserializer.int32(buffer);
    data.parent = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'dynamic_reconfigure/GroupState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a2d87f51dc22930325041a2f8b1571f8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    bool state
    int32 id
    int32 parent
    
    `;
  }

};

module.exports = GroupState;
