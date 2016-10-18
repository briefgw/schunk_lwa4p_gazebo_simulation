// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GetModelStateRequest {
  constructor() {
    this.model_name = '';
    this.relative_entity_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelStateRequest
    // Serialize message field [model_name]
    bufferInfo = _serializer.string(obj.model_name, bufferInfo);
    // Serialize message field [relative_entity_name]
    bufferInfo = _serializer.string(obj.relative_entity_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelStateRequest
    let tmp;
    let len;
    let data = new GetModelStateRequest();
    // Deserialize message field [model_name]
    tmp = _deserializer.string(buffer);
    data.model_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [relative_entity_name]
    tmp = _deserializer.string(buffer);
    data.relative_entity_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetModelStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '19d412713cefe4a67437e17a951e759e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string model_name
    string relative_entity_name
    
    
    
    
    `;
  }

};

class GetModelStateResponse {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.pose = new geometry_msgs.msg.Pose();
    this.twist = new geometry_msgs.msg.Twist();
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelStateResponse
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [twist]
    bufferInfo = geometry_msgs.msg.Twist.serialize(obj.twist, bufferInfo);
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelStateResponse
    let tmp;
    let len;
    let data = new GetModelStateResponse();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [twist]
    tmp = geometry_msgs.msg.Twist.deserialize(buffer);
    data.twist = tmp.data;
    buffer = tmp.buffer;
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
    return 'gazebo_msgs/GetModelStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ccd51739bb00f0141629e87b792e92b9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    
    
    geometry_msgs/Pose pose
    geometry_msgs/Twist twist
    bool success
    string status_message
    
    
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
    `;
  }

};

module.exports = {
  Request: GetModelStateRequest,
  Response: GetModelStateResponse
};
