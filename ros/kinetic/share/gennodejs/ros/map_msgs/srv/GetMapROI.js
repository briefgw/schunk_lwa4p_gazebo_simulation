// Auto-generated. Do not edit!

// (in-package map_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let nav_msgs = _finder('nav_msgs');

//-----------------------------------------------------------

class GetMapROIRequest {
  constructor() {
    this.x = 0.0;
    this.y = 0.0;
    this.l_x = 0.0;
    this.l_y = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetMapROIRequest
    // Serialize message field [x]
    bufferInfo = _serializer.float64(obj.x, bufferInfo);
    // Serialize message field [y]
    bufferInfo = _serializer.float64(obj.y, bufferInfo);
    // Serialize message field [l_x]
    bufferInfo = _serializer.float64(obj.l_x, bufferInfo);
    // Serialize message field [l_y]
    bufferInfo = _serializer.float64(obj.l_y, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetMapROIRequest
    let tmp;
    let len;
    let data = new GetMapROIRequest();
    // Deserialize message field [x]
    tmp = _deserializer.float64(buffer);
    data.x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y]
    tmp = _deserializer.float64(buffer);
    data.y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [l_x]
    tmp = _deserializer.float64(buffer);
    data.l_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [l_y]
    tmp = _deserializer.float64(buffer);
    data.l_y = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/GetMapROIRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '43c2ff8f45af555c0eaf070c401e9a47';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 x
    float64 y
    float64 l_x
    float64 l_y
    
    `;
  }

};

class GetMapROIResponse {
  constructor() {
    this.sub_map = new nav_msgs.msg.OccupancyGrid();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetMapROIResponse
    // Serialize message field [sub_map]
    bufferInfo = nav_msgs.msg.OccupancyGrid.serialize(obj.sub_map, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetMapROIResponse
    let tmp;
    let len;
    let data = new GetMapROIResponse();
    // Deserialize message field [sub_map]
    tmp = nav_msgs.msg.OccupancyGrid.deserialize(buffer);
    data.sub_map = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'map_msgs/GetMapROIResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4d1986519c00d81967d2891a606b234c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    nav_msgs/OccupancyGrid sub_map
    
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

module.exports = {
  Request: GetMapROIRequest,
  Response: GetMapROIResponse
};
