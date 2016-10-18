// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let LinkState = require('../msg/LinkState.js');

//-----------------------------------------------------------

class GetLinkStateRequest {
  constructor() {
    this.link_name = '';
    this.reference_frame = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLinkStateRequest
    // Serialize message field [link_name]
    bufferInfo = _serializer.string(obj.link_name, bufferInfo);
    // Serialize message field [reference_frame]
    bufferInfo = _serializer.string(obj.reference_frame, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLinkStateRequest
    let tmp;
    let len;
    let data = new GetLinkStateRequest();
    // Deserialize message field [link_name]
    tmp = _deserializer.string(buffer);
    data.link_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [reference_frame]
    tmp = _deserializer.string(buffer);
    data.reference_frame = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/GetLinkStateRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7551675c30aaa71f7c288d4864552001';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string link_name
    
    string reference_frame
    
    
    
    `;
  }

};

class GetLinkStateResponse {
  constructor() {
    this.link_state = new LinkState();
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetLinkStateResponse
    // Serialize message field [link_state]
    bufferInfo = LinkState.serialize(obj.link_state, bufferInfo);
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetLinkStateResponse
    let tmp;
    let len;
    let data = new GetLinkStateResponse();
    // Deserialize message field [link_state]
    tmp = LinkState.deserialize(buffer);
    data.link_state = tmp.data;
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
    return 'gazebo_msgs/GetLinkStateResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8ba55ad34f9c072e75c0de57b089753b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    gazebo_msgs/LinkState link_state
    bool success
    string status_message
    
    
    ================================================================================
    MSG: gazebo_msgs/LinkState
    # @todo: FIXME: sets pose and twist of a link.  All children link poses/twists of the URDF tree are not updated accordingly, but should be.
    string link_name            # link name, link_names are in gazebo scoped name notation, [model_name::body_name]
    geometry_msgs/Pose pose     # desired pose in reference frame
    geometry_msgs/Twist twist   # desired twist in reference frame
    string reference_frame      # set pose/twist relative to the frame of this link/body
                                # leave empty or "world" or "map" defaults to world-frame
    
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
  Request: GetLinkStateRequest,
  Response: GetLinkStateResponse
};
