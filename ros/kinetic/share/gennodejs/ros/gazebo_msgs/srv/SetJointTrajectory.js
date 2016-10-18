// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let trajectory_msgs = _finder('trajectory_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetJointTrajectoryRequest {
  constructor() {
    this.model_name = '';
    this.joint_trajectory = new trajectory_msgs.msg.JointTrajectory();
    this.model_pose = new geometry_msgs.msg.Pose();
    this.set_model_pose = false;
    this.disable_physics_updates = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetJointTrajectoryRequest
    // Serialize message field [model_name]
    bufferInfo = _serializer.string(obj.model_name, bufferInfo);
    // Serialize message field [joint_trajectory]
    bufferInfo = trajectory_msgs.msg.JointTrajectory.serialize(obj.joint_trajectory, bufferInfo);
    // Serialize message field [model_pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.model_pose, bufferInfo);
    // Serialize message field [set_model_pose]
    bufferInfo = _serializer.bool(obj.set_model_pose, bufferInfo);
    // Serialize message field [disable_physics_updates]
    bufferInfo = _serializer.bool(obj.disable_physics_updates, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetJointTrajectoryRequest
    let tmp;
    let len;
    let data = new SetJointTrajectoryRequest();
    // Deserialize message field [model_name]
    tmp = _deserializer.string(buffer);
    data.model_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_trajectory]
    tmp = trajectory_msgs.msg.JointTrajectory.deserialize(buffer);
    data.joint_trajectory = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [model_pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.model_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [set_model_pose]
    tmp = _deserializer.bool(buffer);
    data.set_model_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [disable_physics_updates]
    tmp = _deserializer.bool(buffer);
    data.disable_physics_updates = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SetJointTrajectoryRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '649dd2eba5ffd358069238825f9f85ab';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string model_name
    trajectory_msgs/JointTrajectory joint_trajectory
    geometry_msgs/Pose model_pose
    bool set_model_pose
    bool disable_physics_updates
    
    ================================================================================
    MSG: trajectory_msgs/JointTrajectory
    Header header
    string[] joint_names
    JointTrajectoryPoint[] points
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
    MSG: trajectory_msgs/JointTrajectoryPoint
    # Each trajectory point specifies either positions[, velocities[, accelerations]]
    # or positions[, effort] for the trajectory to be executed.
    # All specified values are in the same order as the joint names in JointTrajectory.msg
    
    float64[] positions
    float64[] velocities
    float64[] accelerations
    float64[] effort
    duration time_from_start
    
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

class SetJointTrajectoryResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetJointTrajectoryResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetJointTrajectoryResponse
    let tmp;
    let len;
    let data = new SetJointTrajectoryResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status_message]
    tmp = _deserializer.string(buffer);
    data.status_message = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SetJointTrajectoryResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2ec6f3eff0161f4257b808b12bc830c2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    string status_message
    
    
    `;
  }

};

module.exports = {
  Request: SetJointTrajectoryRequest,
  Response: SetJointTrajectoryResponse
};
