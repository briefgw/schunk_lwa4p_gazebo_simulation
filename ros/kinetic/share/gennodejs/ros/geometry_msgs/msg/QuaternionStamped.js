// Auto-generated. Do not edit!

// (in-package geometry_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Quaternion = require('./Quaternion.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class QuaternionStamped {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.quaternion = new Quaternion();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QuaternionStamped
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [quaternion]
    bufferInfo = Quaternion.serialize(obj.quaternion, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QuaternionStamped
    let tmp;
    let len;
    let data = new QuaternionStamped();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [quaternion]
    tmp = Quaternion.deserialize(buffer);
    data.quaternion = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'geometry_msgs/QuaternionStamped';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e57f1e547e0e1fd13504588ffc8334e2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This represents an orientation with reference coordinate frame and timestamp.
    
    Header header
    Quaternion quaternion
    
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
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = QuaternionStamped;
