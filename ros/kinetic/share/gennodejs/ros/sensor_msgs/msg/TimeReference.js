// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class TimeReference {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.time_ref = {secs: 0, nsecs: 0};
    this.source = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TimeReference
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [time_ref]
    bufferInfo = _serializer.time(obj.time_ref, bufferInfo);
    // Serialize message field [source]
    bufferInfo = _serializer.string(obj.source, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TimeReference
    let tmp;
    let len;
    let data = new TimeReference();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_ref]
    tmp = _deserializer.time(buffer);
    data.time_ref = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [source]
    tmp = _deserializer.string(buffer);
    data.source = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/TimeReference';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'fded64a0265108ba86c3d38fb11c0c16';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Measurement from an external time source not actively synchronized with the system clock.
    
    Header header    # stamp is system time for which measurement was valid
                     # frame_id is not used 
    
    time   time_ref  # corresponding time from this external source
    string source    # (optional) name of time source
    
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

module.exports = TimeReference;
