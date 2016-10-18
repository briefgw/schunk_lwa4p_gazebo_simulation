// Auto-generated. Do not edit!

// (in-package visualization_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ImageMarker {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.ns = '';
    this.id = 0;
    this.type = 0;
    this.action = 0;
    this.position = new geometry_msgs.msg.Point();
    this.scale = 0.0;
    this.outline_color = new std_msgs.msg.ColorRGBA();
    this.filled = 0;
    this.fill_color = new std_msgs.msg.ColorRGBA();
    this.lifetime = {secs: 0, nsecs: 0};
    this.points = [];
    this.outline_colors = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ImageMarker
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [ns]
    bufferInfo = _serializer.string(obj.ns, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.int32(obj.id, bufferInfo);
    // Serialize message field [type]
    bufferInfo = _serializer.int32(obj.type, bufferInfo);
    // Serialize message field [action]
    bufferInfo = _serializer.int32(obj.action, bufferInfo);
    // Serialize message field [position]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.position, bufferInfo);
    // Serialize message field [scale]
    bufferInfo = _serializer.float32(obj.scale, bufferInfo);
    // Serialize message field [outline_color]
    bufferInfo = std_msgs.msg.ColorRGBA.serialize(obj.outline_color, bufferInfo);
    // Serialize message field [filled]
    bufferInfo = _serializer.uint8(obj.filled, bufferInfo);
    // Serialize message field [fill_color]
    bufferInfo = std_msgs.msg.ColorRGBA.serialize(obj.fill_color, bufferInfo);
    // Serialize message field [lifetime]
    bufferInfo = _serializer.duration(obj.lifetime, bufferInfo);
    // Serialize the length for message field [points]
    bufferInfo = _serializer.uint32(obj.points.length, bufferInfo);
    // Serialize message field [points]
    obj.points.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Point.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [outline_colors]
    bufferInfo = _serializer.uint32(obj.outline_colors.length, bufferInfo);
    // Serialize message field [outline_colors]
    obj.outline_colors.forEach((val) => {
      bufferInfo = std_msgs.msg.ColorRGBA.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ImageMarker
    let tmp;
    let len;
    let data = new ImageMarker();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ns]
    tmp = _deserializer.string(buffer);
    data.ns = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.int32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = _deserializer.int32(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [action]
    tmp = _deserializer.int32(buffer);
    data.action = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scale]
    tmp = _deserializer.float32(buffer);
    data.scale = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outline_color]
    tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
    data.outline_color = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [filled]
    tmp = _deserializer.uint8(buffer);
    data.filled = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fill_color]
    tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
    data.fill_color = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lifetime]
    tmp = _deserializer.duration(buffer);
    data.lifetime = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [points]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [points]
    data.points = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Point.deserialize(buffer);
      data.points[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [outline_colors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [outline_colors]
    data.outline_colors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
      data.outline_colors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'visualization_msgs/ImageMarker';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1de93c67ec8858b831025a08fbf1b35c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 CIRCLE=0
    uint8 LINE_STRIP=1
    uint8 LINE_LIST=2
    uint8 POLYGON=3
    uint8 POINTS=4
    
    uint8 ADD=0
    uint8 REMOVE=1
    
    Header header
    string ns		# namespace, used with id to form a unique id
    int32 id          	# unique id within the namespace
    int32 type        	# CIRCLE/LINE_STRIP/etc.
    int32 action      	# ADD/REMOVE
    geometry_msgs/Point position # 2D, in pixel-coords
    float32 scale	 	# the diameter for a circle, etc.
    std_msgs/ColorRGBA outline_color
    uint8 filled		# whether to fill in the shape with color
    std_msgs/ColorRGBA fill_color # color [0.0-1.0]
    duration lifetime       # How long the object should last before being automatically deleted.  0 means forever
    
    
    geometry_msgs/Point[] points # used for LINE_STRIP/LINE_LIST/POINTS/etc., 2D in pixel coords
    std_msgs/ColorRGBA[] outline_colors # a color for each line, point, etc.
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
    
    ================================================================================
    MSG: std_msgs/ColorRGBA
    float32 r
    float32 g
    float32 b
    float32 a
    
    `;
  }

};

// Constants for message
ImageMarker.Constants = {
  CIRCLE: 0,
  LINE_STRIP: 1,
  LINE_LIST: 2,
  POLYGON: 3,
  POINTS: 4,
  ADD: 0,
  REMOVE: 1,
}

module.exports = ImageMarker;
