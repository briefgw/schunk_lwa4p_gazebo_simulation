// Auto-generated. Do not edit!

// (in-package pcl_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Vertices = require('./Vertices.js');
let std_msgs = _finder('std_msgs');
let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class PolygonMesh {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.cloud = new sensor_msgs.msg.PointCloud2();
    this.polygons = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PolygonMesh
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [cloud]
    bufferInfo = sensor_msgs.msg.PointCloud2.serialize(obj.cloud, bufferInfo);
    // Serialize the length for message field [polygons]
    bufferInfo = _serializer.uint32(obj.polygons.length, bufferInfo);
    // Serialize message field [polygons]
    obj.polygons.forEach((val) => {
      bufferInfo = Vertices.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PolygonMesh
    let tmp;
    let len;
    let data = new PolygonMesh();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cloud]
    tmp = sensor_msgs.msg.PointCloud2.deserialize(buffer);
    data.cloud = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [polygons]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [polygons]
    data.polygons = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Vertices.deserialize(buffer);
      data.polygons[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'pcl_msgs/PolygonMesh';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '45a5fc6ad2cde8489600a790acc9a38a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Separate header for the polygonal surface
    Header header
    # Vertices of the mesh as a point cloud
    sensor_msgs/PointCloud2 cloud
    # List of polygons
    Vertices[] polygons
    
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
    
    ================================================================================
    MSG: pcl_msgs/Vertices
    # List of point indices
    uint32[] vertices
    
    `;
  }

};

module.exports = PolygonMesh;
