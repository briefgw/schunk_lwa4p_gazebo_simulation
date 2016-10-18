// Auto-generated. Do not edit!

// (in-package map_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let nav_msgs = _finder('nav_msgs');

//-----------------------------------------------------------

class ProjectedMap {
  constructor() {
    this.map = new nav_msgs.msg.OccupancyGrid();
    this.min_z = 0.0;
    this.max_z = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ProjectedMap
    // Serialize message field [map]
    bufferInfo = nav_msgs.msg.OccupancyGrid.serialize(obj.map, bufferInfo);
    // Serialize message field [min_z]
    bufferInfo = _serializer.float64(obj.min_z, bufferInfo);
    // Serialize message field [max_z]
    bufferInfo = _serializer.float64(obj.max_z, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ProjectedMap
    let tmp;
    let len;
    let data = new ProjectedMap();
    // Deserialize message field [map]
    tmp = nav_msgs.msg.OccupancyGrid.deserialize(buffer);
    data.map = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_z]
    tmp = _deserializer.float64(buffer);
    data.min_z = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_z]
    tmp = _deserializer.float64(buffer);
    data.max_z = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'map_msgs/ProjectedMap';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7bbe8f96e45089681dc1ea7d023cbfca';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    nav_msgs/OccupancyGrid map
    float64 min_z
    float64 max_z
    ================================================================================
    MSG: nav_msgs/OccupancyGrid
    # This represents a 2-D grid map, in which each cell represents the probability of
    # occupancy.
    
    Header header 
    
    #MetaData for the map
    MapMetaData info
    
    # The map data, in row-major order, starting with (0,0).  Occupancy
    # probabilities are in the range [0,100].  Unknown is -1.
    int8[] data
    
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
    MSG: nav_msgs/MapMetaData
    # This hold basic information about the characterists of the OccupancyGrid
    
    # The time at which the map was loaded
    time map_load_time
    # The map resolution [m/cell]
    float32 resolution
    # Map width [cells]
    uint32 width
    # Map height [cells]
    uint32 height
    # The origin of the map [m, m, rad].  This is the real-world pose of the
    # cell (0,0) in the map.
    geometry_msgs/Pose origin
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
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

module.exports = ProjectedMap;
