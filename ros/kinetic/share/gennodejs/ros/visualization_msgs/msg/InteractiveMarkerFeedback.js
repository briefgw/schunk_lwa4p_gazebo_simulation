// Auto-generated. Do not edit!

// (in-package visualization_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class InteractiveMarkerFeedback {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.client_id = '';
    this.marker_name = '';
    this.control_name = '';
    this.event_type = 0;
    this.pose = new geometry_msgs.msg.Pose();
    this.menu_entry_id = 0;
    this.mouse_point = new geometry_msgs.msg.Point();
    this.mouse_point_valid = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type InteractiveMarkerFeedback
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [client_id]
    bufferInfo = _serializer.string(obj.client_id, bufferInfo);
    // Serialize message field [marker_name]
    bufferInfo = _serializer.string(obj.marker_name, bufferInfo);
    // Serialize message field [control_name]
    bufferInfo = _serializer.string(obj.control_name, bufferInfo);
    // Serialize message field [event_type]
    bufferInfo = _serializer.uint8(obj.event_type, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [menu_entry_id]
    bufferInfo = _serializer.uint32(obj.menu_entry_id, bufferInfo);
    // Serialize message field [mouse_point]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.mouse_point, bufferInfo);
    // Serialize message field [mouse_point_valid]
    bufferInfo = _serializer.bool(obj.mouse_point_valid, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type InteractiveMarkerFeedback
    let tmp;
    let len;
    let data = new InteractiveMarkerFeedback();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [client_id]
    tmp = _deserializer.string(buffer);
    data.client_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [marker_name]
    tmp = _deserializer.string(buffer);
    data.marker_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [control_name]
    tmp = _deserializer.string(buffer);
    data.control_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [event_type]
    tmp = _deserializer.uint8(buffer);
    data.event_type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [menu_entry_id]
    tmp = _deserializer.uint32(buffer);
    data.menu_entry_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mouse_point]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.mouse_point = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mouse_point_valid]
    tmp = _deserializer.bool(buffer);
    data.mouse_point_valid = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'visualization_msgs/InteractiveMarkerFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ab0f1eee058667e28c19ff3ffc3f4b78';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Time/frame info.
    Header header
    
    # Identifying string. Must be unique in the topic namespace.
    string client_id
    
    # Feedback message sent back from the GUI, e.g.
    # when the status of an interactive marker was modified by the user.
    
    # Specifies which interactive marker and control this message refers to
    string marker_name
    string control_name
    
    # Type of the event
    # KEEP_ALIVE: sent while dragging to keep up control of the marker
    # MENU_SELECT: a menu entry has been selected
    # BUTTON_CLICK: a button control has been clicked
    # POSE_UPDATE: the pose has been changed using one of the controls
    uint8 KEEP_ALIVE = 0
    uint8 POSE_UPDATE = 1
    uint8 MENU_SELECT = 2
    uint8 BUTTON_CLICK = 3
    
    uint8 MOUSE_DOWN = 4
    uint8 MOUSE_UP = 5
    
    uint8 event_type
    
    # Current pose of the marker
    # Note: Has to be valid for all feedback types.
    geometry_msgs/Pose pose
    
    # Contains the ID of the selected menu entry
    # Only valid for MENU_SELECT events.
    uint32 menu_entry_id
    
    # If event_type is BUTTON_CLICK, MOUSE_DOWN, or MOUSE_UP, mouse_point
    # may contain the 3 dimensional position of the event on the
    # control.  If it does, mouse_point_valid will be true.  mouse_point
    # will be relative to the frame listed in the header.
    geometry_msgs/Point mouse_point
    bool mouse_point_valid
    
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
    
    `;
  }

};

// Constants for message
InteractiveMarkerFeedback.Constants = {
  KEEP_ALIVE: 0,
  POSE_UPDATE: 1,
  MENU_SELECT: 2,
  BUTTON_CLICK: 3,
  MOUSE_DOWN: 4,
  MOUSE_UP: 5,
}

module.exports = InteractiveMarkerFeedback;
