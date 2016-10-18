// Auto-generated. Do not edit!

// (in-package nav_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

let Path = require('../msg/Path.js');

//-----------------------------------------------------------

class GetPlanRequest {
  constructor() {
    this.start = new geometry_msgs.msg.PoseStamped();
    this.goal = new geometry_msgs.msg.PoseStamped();
    this.tolerance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPlanRequest
    // Serialize message field [start]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.start, bufferInfo);
    // Serialize message field [goal]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.goal, bufferInfo);
    // Serialize message field [tolerance]
    bufferInfo = _serializer.float32(obj.tolerance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPlanRequest
    let tmp;
    let len;
    let data = new GetPlanRequest();
    // Deserialize message field [start]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.start = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [goal]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.goal = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tolerance]
    tmp = _deserializer.float32(buffer);
    data.tolerance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nav_msgs/GetPlanRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e25a43e0752bcca599a8c2eef8282df8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    geometry_msgs/PoseStamped start
    
    
    geometry_msgs/PoseStamped goal
    
    
    
    float32 tolerance
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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

class GetPlanResponse {
  constructor() {
    this.plan = new Path();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPlanResponse
    // Serialize message field [plan]
    bufferInfo = Path.serialize(obj.plan, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPlanResponse
    let tmp;
    let len;
    let data = new GetPlanResponse();
    // Deserialize message field [plan]
    tmp = Path.deserialize(buffer);
    data.plan = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'nav_msgs/GetPlanResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0002bc113c0259d71f6cf8cbc9430e18';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    nav_msgs/Path plan
    
    
    ================================================================================
    MSG: nav_msgs/Path
    #An array of poses that represents a Path for a robot to follow
    Header header
    geometry_msgs/PoseStamped[] poses
    
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
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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
  Request: GetPlanRequest,
  Response: GetPlanResponse
};
