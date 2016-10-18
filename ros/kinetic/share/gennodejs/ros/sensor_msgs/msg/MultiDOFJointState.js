// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class MultiDOFJointState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.joint_names = [];
    this.transforms = [];
    this.twist = [];
    this.wrench = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultiDOFJointState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [joint_names]
    bufferInfo = _serializer.uint32(obj.joint_names.length, bufferInfo);
    // Serialize message field [joint_names]
    obj.joint_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [transforms]
    bufferInfo = _serializer.uint32(obj.transforms.length, bufferInfo);
    // Serialize message field [transforms]
    obj.transforms.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Transform.serialize(val, bufferInfo);
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
    //deserializes a message object of type MultiDOFJointState
    let tmp;
    let len;
    let data = new MultiDOFJointState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [joint_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_names]
    data.joint_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.joint_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [transforms]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [transforms]
    data.transforms = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Transform.deserialize(buffer);
      data.transforms[i] = tmp.data;
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
    return 'sensor_msgs/MultiDOFJointState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '690f272f0640d2631c305eeb8301e59d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Representation of state for joints with multiple degrees of freedom, 
    # following the structure of JointState.
    #
    # It is assumed that a joint in a system corresponds to a transform that gets applied 
    # along the kinematic chain. For example, a planar joint (as in URDF) is 3DOF (x, y, yaw)
    # and those 3DOF can be expressed as a transformation matrix, and that transformation
    # matrix can be converted back to (x, y, yaw)
    #
    # Each joint is uniquely identified by its name
    # The header specifies the time at which the joint states were recorded. All the joint states
    # in one message have to be recorded at the same time.
    #
    # This message consists of a multiple arrays, one for each part of the joint state. 
    # The goal is to make each of the fields optional. When e.g. your joints have no
    # wrench associated with them, you can leave the wrench array empty. 
    #
    # All arrays in this message should have the same size, or be empty.
    # This is the only way to uniquely associate the joint name with the correct
    # states.
    
    Header header
    
    string[] joint_names
    geometry_msgs/Transform[] transforms
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
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
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
    MSG: geometry_msgs/Wrench
    # This represents force in free space, separated into
    # its linear and angular parts.
    Vector3  force
    Vector3  torque
    
    `;
  }

};

module.exports = MultiDOFJointState;
