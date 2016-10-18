// Auto-generated. Do not edit!

// (in-package bond.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Status {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.id = '';
    this.instance_id = '';
    this.active = false;
    this.heartbeat_timeout = 0.0;
    this.heartbeat_period = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Status
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [instance_id]
    bufferInfo = _serializer.string(obj.instance_id, bufferInfo);
    // Serialize message field [active]
    bufferInfo = _serializer.bool(obj.active, bufferInfo);
    // Serialize message field [heartbeat_timeout]
    bufferInfo = _serializer.float32(obj.heartbeat_timeout, bufferInfo);
    // Serialize message field [heartbeat_period]
    bufferInfo = _serializer.float32(obj.heartbeat_period, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Status
    let tmp;
    let len;
    let data = new Status();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [instance_id]
    tmp = _deserializer.string(buffer);
    data.instance_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [active]
    tmp = _deserializer.bool(buffer);
    data.active = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [heartbeat_timeout]
    tmp = _deserializer.float32(buffer);
    data.heartbeat_timeout = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [heartbeat_period]
    tmp = _deserializer.float32(buffer);
    data.heartbeat_period = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'bond/Status';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'eacc84bf5d65b6777d4c50f463dfb9c8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    string id  # ID of the bond
    string instance_id  # Unique ID for an individual in a bond
    bool active
    
    # Including the timeouts for the bond makes it easier to debug mis-matches
    # between the two sides.
    float32 heartbeat_timeout
    float32 heartbeat_period
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

module.exports = Status;
