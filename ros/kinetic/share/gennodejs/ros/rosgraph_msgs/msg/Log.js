// Auto-generated. Do not edit!

// (in-package rosgraph_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Log {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.level = 0;
    this.name = '';
    this.msg = '';
    this.file = '';
    this.function = '';
    this.line = 0;
    this.topics = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Log
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [level]
    bufferInfo = _serializer.byte(obj.level, bufferInfo);
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [msg]
    bufferInfo = _serializer.string(obj.msg, bufferInfo);
    // Serialize message field [file]
    bufferInfo = _serializer.string(obj.file, bufferInfo);
    // Serialize message field [function]
    bufferInfo = _serializer.string(obj.function, bufferInfo);
    // Serialize message field [line]
    bufferInfo = _serializer.uint32(obj.line, bufferInfo);
    // Serialize the length for message field [topics]
    bufferInfo = _serializer.uint32(obj.topics.length, bufferInfo);
    // Serialize message field [topics]
    obj.topics.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Log
    let tmp;
    let len;
    let data = new Log();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [level]
    tmp = _deserializer.byte(buffer);
    data.level = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [msg]
    tmp = _deserializer.string(buffer);
    data.msg = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [file]
    tmp = _deserializer.string(buffer);
    data.file = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [function]
    tmp = _deserializer.string(buffer);
    data.function = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [line]
    tmp = _deserializer.uint32(buffer);
    data.line = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [topics]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [topics]
    data.topics = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.topics[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'rosgraph_msgs/Log';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'acffd30cd6b6de30f120938c17c593fb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    ##
    ## Severity level constants
    ##
    byte DEBUG=1 #debug level
    byte INFO=2  #general level
    byte WARN=4  #warning level
    byte ERROR=8 #error level
    byte FATAL=16 #fatal/critical level
    ##
    ## Fields
    ##
    Header header
    byte level
    string name # name of the node
    string msg # message 
    string file # file the message came from
    string function # function the message came from
    uint32 line # line the message came from
    string[] topics # topic names that the node publishes
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

};

// Constants for message
Log.Constants = {
  DEBUG: 1,
  INFO: 2,
  WARN: 4,
  ERROR: 8,
  FATAL: 16,
}

module.exports = Log;
