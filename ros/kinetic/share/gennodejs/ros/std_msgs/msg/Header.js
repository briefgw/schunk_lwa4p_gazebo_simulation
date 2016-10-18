// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Header {
  constructor() {
    this.seq = 0;
    this.stamp = {secs: 0, nsecs: 0};
    this.frame_id = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Header
    // Serialize message field [seq]
    bufferInfo = _serializer.uint32(obj.seq, bufferInfo);
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    // Serialize message field [frame_id]
    bufferInfo = _serializer.string(obj.frame_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Header
    let tmp;
    let len;
    let data = new Header();
    // Deserialize message field [seq]
    tmp = _deserializer.uint32(buffer);
    data.seq = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_id]
    tmp = _deserializer.string(buffer);
    data.frame_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/Header';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2176decaecbce78abc3b96ef049fabed';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = Header;
