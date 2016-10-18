// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let PointField = require('./PointField.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PointCloud2 {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.height = 0;
    this.width = 0;
    this.fields = [];
    this.is_bigendian = false;
    this.point_step = 0;
    this.row_step = 0;
    this.data = [];
    this.is_dense = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PointCloud2
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.uint32(obj.height, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint32(obj.width, bufferInfo);
    // Serialize the length for message field [fields]
    bufferInfo = _serializer.uint32(obj.fields.length, bufferInfo);
    // Serialize message field [fields]
    obj.fields.forEach((val) => {
      bufferInfo = PointField.serialize(val, bufferInfo);
    });
    // Serialize message field [is_bigendian]
    bufferInfo = _serializer.bool(obj.is_bigendian, bufferInfo);
    // Serialize message field [point_step]
    bufferInfo = _serializer.uint32(obj.point_step, bufferInfo);
    // Serialize message field [row_step]
    bufferInfo = _serializer.uint32(obj.row_step, bufferInfo);
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    bufferInfo.buffer.push(obj.data);
    bufferInfo.length += obj.data.length;
    // Serialize message field [is_dense]
    bufferInfo = _serializer.bool(obj.is_dense, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PointCloud2
    let tmp;
    let len;
    let data = new PointCloud2();
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
    // Deserialize array length for message field [fields]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fields]
    data.fields = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = PointField.deserialize(buffer);
      data.fields[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [is_bigendian]
    tmp = _deserializer.bool(buffer);
    data.is_bigendian = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [point_step]
    tmp = _deserializer.uint32(buffer);
    data.point_step = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [row_step]
    tmp = _deserializer.uint32(buffer);
    data.row_step = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize message field [is_dense]
    tmp = _deserializer.bool(buffer);
    data.is_dense = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/PointCloud2';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1158d486dd51d683ce2f1be655c3c181';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message holds a collection of N-dimensional points, which may
    # contain additional information such as normals, intensity, etc. The
    # point data is stored as a binary blob, its layout described by the
    # contents of the "fields" array.
    
    # The point cloud data may be organized 2d (image-like) or 1d
    # (unordered). Point clouds organized as 2d images may be produced by
    # camera depth sensors such as stereo or time-of-flight.
    
    # Time of sensor data acquisition, and the coordinate frame ID (for 3d
    # points).
    Header header
    
    # 2D structure of the point cloud. If the cloud is unordered, height is
    # 1 and width is the length of the point cloud.
    uint32 height
    uint32 width
    
    # Describes the channels and their layout in the binary data blob.
    PointField[] fields
    
    bool    is_bigendian # Is this data bigendian?
    uint32  point_step   # Length of a point in bytes
    uint32  row_step     # Length of a row in bytes
    uint8[] data         # Actual point data, size is (row_step*height)
    
    bool is_dense        # True if there are no invalid points
    
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
    MSG: sensor_msgs/PointField
    # This message holds the description of one point entry in the
    # PointCloud2 message format.
    uint8 INT8    = 1
    uint8 UINT8   = 2
    uint8 INT16   = 3
    uint8 UINT16  = 4
    uint8 INT32   = 5
    uint8 UINT32  = 6
    uint8 FLOAT32 = 7
    uint8 FLOAT64 = 8
    
    string name      # Name of field
    uint32 offset    # Offset from start of point struct
    uint8  datatype  # Datatype enumeration, see above
    uint32 count     # How many elements in the field
    
    `;
  }

};

module.exports = PointCloud2;
