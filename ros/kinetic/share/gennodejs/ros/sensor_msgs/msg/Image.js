// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Image {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.height = 0;
    this.width = 0;
    this.encoding = '';
    this.is_bigendian = 0;
    this.step = 0;
    this.data = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Image
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.uint32(obj.height, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint32(obj.width, bufferInfo);
    // Serialize message field [encoding]
    bufferInfo = _serializer.string(obj.encoding, bufferInfo);
    // Serialize message field [is_bigendian]
    bufferInfo = _serializer.uint8(obj.is_bigendian, bufferInfo);
    // Serialize message field [step]
    bufferInfo = _serializer.uint32(obj.step, bufferInfo);
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    bufferInfo.buffer.push(obj.data);
    bufferInfo.length += obj.data.length;
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Image
    let tmp;
    let len;
    let data = new Image();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.uint32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.uint32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [encoding]
    tmp = _deserializer.string(buffer);
    data.encoding = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [is_bigendian]
    tmp = _deserializer.uint8(buffer);
    data.is_bigendian = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [step]
    tmp = _deserializer.uint32(buffer);
    data.step = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Image';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '060021388200f6f0f447d0fcd9c64743';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of cameara
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
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

module.exports = Image;
