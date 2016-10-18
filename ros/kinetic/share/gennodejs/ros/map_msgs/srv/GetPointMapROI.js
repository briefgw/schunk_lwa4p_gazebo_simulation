// Auto-generated. Do not edit!

// (in-package map_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class GetPointMapROIRequest {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.r = 0.0;
    this.l_x = 0.0;
    this.l_y = 0.0;
    this.l_z = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPointMapROIRequest
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [z]
    bufferInfo = _serializer.float64(obj.z, bufferInfo);
    // Serialize message field [r]
    bufferInfo = _serializer.float64(obj.r, bufferInfo);
    // Serialize message field [l_x]
    bufferInfo = _serializer.float64(obj.l_x, bufferInfo);
    // Serialize message field [l_y]
    bufferInfo = _serializer.float64(obj.l_y, bufferInfo);
    // Serialize message field [l_z]
    bufferInfo = _serializer.float64(obj.l_z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPointMapROIRequest
    let tmp;
    let len;
    let data = new GetPointMapROIRequest();
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [z]
    tmp = _deserializer.float64(buffer);
    data.z = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [r]
    tmp = _deserializer.float64(buffer);
    data.r = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [l_x]
    tmp = _deserializer.float64(buffer);
    data.l_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [l_y]
    tmp = _deserializer.float64(buffer);
    data.l_y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [l_z]
    tmp = _deserializer.float64(buffer);
    data.l_z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/GetPointMapROIRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '895f7e437a9a6dd225316872b187a303';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 x
    float64 y
    float64 z
    float64 r
    float64 l_x
    float64 l_y
    float64 l_z
    
    `;
  }

};

class GetPointMapROIResponse {
  constructor() {
    this.sub_map = new sensor_msgs.msg.PointCloud2();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPointMapROIResponse
    // Serialize message field [sub_map]
    bufferInfo = sensor_msgs.msg.PointCloud2.serialize(obj.sub_map, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPointMapROIResponse
    let tmp;
    let len;
    let data = new GetPointMapROIResponse();
    // Deserialize message field [sub_map]
    tmp = sensor_msgs.msg.PointCloud2.deserialize(buffer);
    data.sub_map = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/GetPointMapROIResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '313769f8b0e724525c6463336cbccd63';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    sensor_msgs/PointCloud2 sub_map
    
    ================================================================================
    MSG: sensor_msgs/PointCloud2
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

module.exports = {
  Request: GetPointMapROIRequest,
  Response: GetPointMapROIResponse
};
