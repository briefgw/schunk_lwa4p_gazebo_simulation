// Auto-generated. Do not edit!

// (in-package visualization_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Marker {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.ns = '';
    this.id = 0;
    this.type = 0;
    this.action = 0;
    this.pose = new geometry_msgs.msg.Pose();
    this.scale = new geometry_msgs.msg.Vector3();
    this.color = new std_msgs.msg.ColorRGBA();
    this.lifetime = {secs: 0, nsecs: 0};
    this.frame_locked = false;
    this.points = [];
    this.colors = [];
    this.text = '';
    this.mesh_resource = '';
    this.mesh_use_embedded_materials = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Marker
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
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [scale]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.scale, bufferInfo);
    // Serialize message field [color]
    bufferInfo = std_msgs.msg.ColorRGBA.serialize(obj.color, bufferInfo);
    // Serialize message field [lifetime]
    bufferInfo = _serializer.duration(obj.lifetime, bufferInfo);
    // Serialize message field [frame_locked]
    bufferInfo = _serializer.bool(obj.frame_locked, bufferInfo);
    // Serialize the length for message field [points]
    bufferInfo = _serializer.uint32(obj.points.length, bufferInfo);
    // Serialize message field [points]
    obj.points.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Point.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [colors]
    bufferInfo = _serializer.uint32(obj.colors.length, bufferInfo);
    // Serialize message field [colors]
    obj.colors.forEach((val) => {
      bufferInfo = std_msgs.msg.ColorRGBA.serialize(val, bufferInfo);
    });
    // Serialize message field [text]
    bufferInfo = _serializer.string(obj.text, bufferInfo);
    // Serialize message field [mesh_resource]
    bufferInfo = _serializer.string(obj.mesh_resource, bufferInfo);
    // Serialize message field [mesh_use_embedded_materials]
    bufferInfo = _serializer.bool(obj.mesh_use_embedded_materials, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Marker
    let tmp;
    let len;
    let data = new Marker();
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
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scale]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.scale = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [color]
    tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
    data.color = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [lifetime]
    tmp = _deserializer.duration(buffer);
    data.lifetime = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [frame_locked]
    tmp = _deserializer.bool(buffer);
    data.frame_locked = tmp.data;
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
    // Deserialize array length for message field [colors]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [colors]
    data.colors = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
      data.colors[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [text]
    tmp = _deserializer.string(buffer);
    data.text = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mesh_resource]
    tmp = _deserializer.string(buffer);
    data.mesh_resource = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mesh_use_embedded_materials]
    tmp = _deserializer.bool(buffer);
    data.mesh_use_embedded_materials = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'visualization_msgs/Marker';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4048c9de2a16f4ae8e0538085ebf1b97';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # See http://www.ros.org/wiki/rviz/DisplayTypes/Marker and http://www.ros.org/wiki/rviz/Tutorials/Markers%3A%20Basic%20Shapes for more information on using this message with rviz
    
    uint8 ARROW=0
    uint8 CUBE=1
    uint8 SPHERE=2
    uint8 CYLINDER=3
    uint8 LINE_STRIP=4
    uint8 LINE_LIST=5
    uint8 CUBE_LIST=6
    uint8 SPHERE_LIST=7
    uint8 POINTS=8
    uint8 TEXT_VIEW_FACING=9
    uint8 MESH_RESOURCE=10
    uint8 TRIANGLE_LIST=11
    
    uint8 ADD=0
    uint8 MODIFY=0
    uint8 DELETE=2
    uint8 DELETEALL=3
    
    Header header                        # header for time/frame information
    string ns                            # Namespace to place this object in... used in conjunction with id to create a unique name for the object
    int32 id 		                         # object ID useful in conjunction with the namespace for manipulating and deleting the object later
    int32 type 		                       # Type of object
    int32 action 	                       # 0 add/modify an object, 1 (deprecated), 2 deletes an object, 3 deletes all objects
    geometry_msgs/Pose pose                 # Pose of the object
    geometry_msgs/Vector3 scale             # Scale of the object 1,1,1 means default (usually 1 meter square)
    std_msgs/ColorRGBA color             # Color [0.0-1.0]
    duration lifetime                    # How long the object should last before being automatically deleted.  0 means forever
    bool frame_locked                    # If this marker should be frame-locked, i.e. retransformed into its frame every timestep
    
    #Only used if the type specified has some use for them (eg. POINTS, LINE_STRIP, ...)
    geometry_msgs/Point[] points
    #Only used if the type specified has some use for them (eg. POINTS, LINE_STRIP, ...)
    #number of colors must either be 0 or equal to the number of points
    #NOTE: alpha is not yet used
    std_msgs/ColorRGBA[] colors
    
    # NOTE: only used for text markers
    string text
    
    # NOTE: only used for MESH_RESOURCE markers
    string mesh_resource
    bool mesh_use_embedded_materials
    
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
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
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
Marker.Constants = {
  ARROW: 0,
  CUBE: 1,
  SPHERE: 2,
  CYLINDER: 3,
  LINE_STRIP: 4,
  LINE_LIST: 5,
  CUBE_LIST: 6,
  SPHERE_LIST: 7,
  POINTS: 8,
  TEXT_VIEW_FACING: 9,
  MESH_RESOURCE: 10,
  TRIANGLE_LIST: 11,
  ADD: 0,
  MODIFY: 0,
  DELETE: 2,
  DELETEALL: 3,
}

module.exports = Marker;
