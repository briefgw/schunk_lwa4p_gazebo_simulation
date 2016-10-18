// Auto-generated. Do not edit!

// (in-package visualization_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let Marker = require('./Marker.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class InteractiveMarkerControl {
  constructor() {
    this.name = '';
    this.orientation = new geometry_msgs.msg.Quaternion();
    this.orientation_mode = 0;
    this.interaction_mode = 0;
    this.always_visible = false;
    this.markers = [];
    this.independent_marker_orientation = false;
    this.description = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type InteractiveMarkerControl
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.orientation, bufferInfo);
    // Serialize message field [orientation_mode]
    bufferInfo = _serializer.uint8(obj.orientation_mode, bufferInfo);
    // Serialize message field [interaction_mode]
    bufferInfo = _serializer.uint8(obj.interaction_mode, bufferInfo);
    // Serialize message field [always_visible]
    bufferInfo = _serializer.bool(obj.always_visible, bufferInfo);
    // Serialize the length for message field [markers]
    bufferInfo = _serializer.uint32(obj.markers.length, bufferInfo);
    // Serialize message field [markers]
    obj.markers.forEach((val) => {
      bufferInfo = Marker.serialize(val, bufferInfo);
    });
    // Serialize message field [independent_marker_orientation]
    bufferInfo = _serializer.bool(obj.independent_marker_orientation, bufferInfo);
    // Serialize message field [description]
    bufferInfo = _serializer.string(obj.description, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type InteractiveMarkerControl
    let tmp;
    let len;
    let data = new InteractiveMarkerControl();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation_mode]
    tmp = _deserializer.uint8(buffer);
    data.orientation_mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [interaction_mode]
    tmp = _deserializer.uint8(buffer);
    data.interaction_mode = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [always_visible]
    tmp = _deserializer.bool(buffer);
    data.always_visible = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [markers]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [markers]
    data.markers = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = Marker.deserialize(buffer);
      data.markers[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [independent_marker_orientation]
    tmp = _deserializer.bool(buffer);
    data.independent_marker_orientation = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [description]
    tmp = _deserializer.string(buffer);
    data.description = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'visualization_msgs/InteractiveMarkerControl';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b3c81e785788195d1840b86c28da1aac';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Represents a control that is to be displayed together with an interactive marker
    
    # Identifying string for this control.
    # You need to assign a unique value to this to receive feedback from the GUI
    # on what actions the user performs on this control (e.g. a button click).
    string name
    
    
    # Defines the local coordinate frame (relative to the pose of the parent
    # interactive marker) in which is being rotated and translated.
    # Default: Identity
    geometry_msgs/Quaternion orientation
    
    
    # Orientation mode: controls how orientation changes.
    # INHERIT: Follow orientation of interactive marker
    # FIXED: Keep orientation fixed at initial state
    # VIEW_FACING: Align y-z plane with screen (x: forward, y:left, z:up).
    uint8 INHERIT = 0 
    uint8 FIXED = 1
    uint8 VIEW_FACING = 2
    
    uint8 orientation_mode
    
    # Interaction mode for this control
    # 
    # NONE: This control is only meant for visualization; no context menu.
    # MENU: Like NONE, but right-click menu is active.
    # BUTTON: Element can be left-clicked.
    # MOVE_AXIS: Translate along local x-axis.
    # MOVE_PLANE: Translate in local y-z plane.
    # ROTATE_AXIS: Rotate around local x-axis.
    # MOVE_ROTATE: Combines MOVE_PLANE and ROTATE_AXIS.
    uint8 NONE = 0 
    uint8 MENU = 1
    uint8 BUTTON = 2
    uint8 MOVE_AXIS = 3 
    uint8 MOVE_PLANE = 4
    uint8 ROTATE_AXIS = 5
    uint8 MOVE_ROTATE = 6
    # "3D" interaction modes work with the mouse+SHIFT+CTRL or with 3D cursors.
    # MOVE_3D: Translate freely in 3D space.
    # ROTATE_3D: Rotate freely in 3D space about the origin of parent frame.
    # MOVE_ROTATE_3D: Full 6-DOF freedom of translation and rotation about the cursor origin.
    uint8 MOVE_3D = 7
    uint8 ROTATE_3D = 8
    uint8 MOVE_ROTATE_3D = 9
    
    uint8 interaction_mode
    
    
    # If true, the contained markers will also be visible
    # when the gui is not in interactive mode.
    bool always_visible
    
    
    # Markers to be displayed as custom visual representation.
    # Leave this empty to use the default control handles.
    #
    # Note: 
    # - The markers can be defined in an arbitrary coordinate frame,
    #   but will be transformed into the local frame of the interactive marker.
    # - If the header of a marker is empty, its pose will be interpreted as 
    #   relative to the pose of the parent interactive marker.
    Marker[] markers
    
    
    # In VIEW_FACING mode, set this to true if you don't want the markers
    # to be aligned with the camera view point. The markers will show up
    # as in INHERIT mode.
    bool independent_marker_orientation
    
    
    # Short description (< 40 characters) of what this control does,
    # e.g. "Move the robot". 
    # Default: A generic description based on the interaction mode
    string description
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: visualization_msgs/Marker
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
InteractiveMarkerControl.Constants = {
  INHERIT: 0,
  FIXED: 1,
  VIEW_FACING: 2,
  NONE: 0,
  MENU: 1,
  BUTTON: 2,
  MOVE_AXIS: 3,
  MOVE_PLANE: 4,
  ROTATE_AXIS: 5,
  MOVE_ROTATE: 6,
  MOVE_3D: 7,
  ROTATE_3D: 8,
  MOVE_ROTATE_3D: 9,
}

module.exports = InteractiveMarkerControl;
