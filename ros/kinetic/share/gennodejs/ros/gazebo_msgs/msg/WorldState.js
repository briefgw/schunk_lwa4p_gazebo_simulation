// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class WorldState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.name = [];
    this.pose = [];
    this.twist = [];
    this.wrench = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WorldState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [name]
    bufferInfo = _serializer.uint32(obj.name.length, bufferInfo);
    // Serialize message field [name]
    obj.name.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [pose]
    bufferInfo = _serializer.uint32(obj.pose.length, bufferInfo);
    // Serialize message field [pose]
    obj.pose.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Pose.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [twist]
    bufferInfo = _serializer.uint32(obj.twist.length, bufferInfo);
    // Serialize message field [twist]
    obj.twist.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Twist.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [wrench]
    bufferInfo = _serializer.uint32(obj.wrench.length, bufferInfo);
    // Serialize message field [wrench]
    obj.wrench.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Wrench.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WorldState
    let tmp;
    let len;
    let data = new WorldState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [name]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [name]
    data.name = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.name[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [pose]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    data.pose = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Pose.deserialize(buffer);
      data.pose[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [twist]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [twist]
    data.twist = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Twist.deserialize(buffer);
      data.twist[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [wrench]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wrench]
    data.wrench = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Wrench.deserialize(buffer);
      data.wrench[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/WorldState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'de1a9de3ab7ba97ac0e9ec01a4eb481e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This is a message that holds data necessary to reconstruct a snapshot of the world
    #
    # = Approach to Message Passing =
    # The state of the world is defined by either
    #   1. Inertial Model pose, twist
    #      * kinematic data - connectivity graph from Model to each Link
    #      * joint angles
    #      * joint velocities
    #      * Applied forces - Body wrench
    #        * relative transform from Body to each collision Geom
    # Or
    #   2. Inertial (absolute) Body pose, twist, wrench
    #      * relative transform from Body to each collision Geom - constant, so not sent over wire
    #      * back compute from canonical body info to get Model pose and twist.
    #
    # Chooing (2.) because it matches most physics engines out there
    #   and is simpler.
    #
    # = Future =
    # Consider impacts on using reduced coordinates / graph (parent/child links) approach
    #   constraint and physics solvers.
    #
    # = Application =
    # This message is used to do the following:
    #   * reconstruct the world and objects for sensor generation
    #   * stop / start simulation - need pose, twist, wrench of each body
    #   * collision detection - need pose of each collision geometry.  velocity/acceleration if 
    #
    # = Assumptions =
    # Assuming that each (physics) processor node locally already has
    #   * collision information - Trimesh for Geoms, etc
    #   * relative transforms from Body to Geom - this is assumed to be fixed, do not send oved wire
    #   * inertial information - does not vary in time
    #   * visual information - does not vary in time
    #
    
    Header header
    
    string[] name
    geometry_msgs/Pose[] pose
    geometry_msgs/Twist[] twist
    geometry_msgs/Wrench[] wrench
    
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
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
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
    MSG: geometry_msgs/Wrench
    # This represents force in free space, separated into
    # its linear and angular parts.
    Vector3  force
    Vector3  torque
    
    `;
  }

};

module.exports = WorldState;
