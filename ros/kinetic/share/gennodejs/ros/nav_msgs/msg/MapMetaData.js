// Auto-generated. Do not edit!

// (in-package nav_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class MapMetaData {
  constructor() {
    this.map_load_time = {secs: 0, nsecs: 0};
    this.resolution = 0.0;
    this.width = 0;
    this.height = 0;
    this.origin = new geometry_msgs.msg.Pose();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MapMetaData
    // Serialize message field [map_load_time]
    bufferInfo = _serializer.time(obj.map_load_time, bufferInfo);
    // Serialize message field [resolution]
    bufferInfo = _serializer.float32(obj.resolution, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint32(obj.width, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.uint32(obj.height, bufferInfo);
    // Serialize message field [origin]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.origin, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MapMetaData
    let tmp;
    let len;
    let data = new MapMetaData();
    // Deserialize message field [map_load_time]
    tmp = _deserializer.time(buffer);
    data.map_load_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [resolution]
    tmp = _deserializer.float32(buffer);
    data.resolution = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.uint32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.uint32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [origin]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.origin = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'nav_msgs/MapMetaData';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '10cfc8a2818024d3248802c00c95f11b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = MapMetaData;
