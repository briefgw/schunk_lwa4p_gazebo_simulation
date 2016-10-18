// Auto-generated. Do not edit!

// (in-package nav_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GridCells {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.cell_width = 0.0;
    this.cell_height = 0.0;
    this.cells = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GridCells
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [cell_width]
    bufferInfo = _serializer.float32(obj.cell_width, bufferInfo);
    // Serialize message field [cell_height]
    bufferInfo = _serializer.float32(obj.cell_height, bufferInfo);
    // Serialize the length for message field [cells]
    bufferInfo = _serializer.uint32(obj.cells.length, bufferInfo);
    // Serialize message field [cells]
    obj.cells.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Point.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GridCells
    let tmp;
    let len;
    let data = new GridCells();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cell_width]
    tmp = _deserializer.float32(buffer);
    data.cell_width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cell_height]
    tmp = _deserializer.float32(buffer);
    data.cell_height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [cells]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cells]
    data.cells = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Point.deserialize(buffer);
      data.cells[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'nav_msgs/GridCells';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b9e4f5df6d28e272ebde00a3994830f5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #an array of cells in a 2D grid
    Header header
    float32 cell_width
    float32 cell_height
    geometry_msgs/Point[] cells
    
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
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

module.exports = GridCells;
