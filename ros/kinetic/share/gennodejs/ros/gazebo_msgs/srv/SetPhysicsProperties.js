// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ODEPhysics = require('../msg/ODEPhysics.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetPhysicsPropertiesRequest {
  constructor() {
    this.time_step = 0.0;
    this.max_update_rate = 0.0;
    this.gravity = new geometry_msgs.msg.Vector3();
    this.ode_config = new ODEPhysics();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPhysicsPropertiesRequest
    // Serialize message field [time_step]
    bufferInfo = _serializer.float64(obj.time_step, bufferInfo);
    // Serialize message field [max_update_rate]
    bufferInfo = _serializer.float64(obj.max_update_rate, bufferInfo);
    // Serialize message field [gravity]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.gravity, bufferInfo);
    // Serialize message field [ode_config]
    bufferInfo = ODEPhysics.serialize(obj.ode_config, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPhysicsPropertiesRequest
    let tmp;
    let len;
    let data = new SetPhysicsPropertiesRequest();
    // Deserialize message field [time_step]
    tmp = _deserializer.float64(buffer);
    data.time_step = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_update_rate]
    tmp = _deserializer.float64(buffer);
    data.max_update_rate = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gravity]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.gravity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ode_config]
    tmp = ODEPhysics.deserialize(buffer);
    data.ode_config = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SetPhysicsPropertiesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'abd9f82732b52b92e9d6bb36e6a82452';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    float64 time_step
    float64 max_update_rate
    geometry_msgs/Vector3 gravity
    gazebo_msgs/ODEPhysics ode_config
    
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
    MSG: gazebo_msgs/ODEPhysics
    bool auto_disable_bodies           # enable auto disabling of bodies, default false
    uint32 sor_pgs_precon_iters        # preconditioning inner iterations when uisng projected Gauss Seidel
    uint32 sor_pgs_iters               # inner iterations when uisng projected Gauss Seidel
    float64 sor_pgs_w                  # relaxation parameter when using projected Gauss Seidel, 1 = no relaxation
    float64 sor_pgs_rms_error_tol      # rms error tolerance before stopping inner iterations
    float64 contact_surface_layer      # contact "dead-band" width
    float64 contact_max_correcting_vel # contact maximum correction velocity
    float64 cfm                        # global constraint force mixing
    float64 erp                        # global error reduction parameter
    uint32 max_contacts                # maximum contact joints between two geoms
    
    `;
  }

};

class SetPhysicsPropertiesResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPhysicsPropertiesResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPhysicsPropertiesResponse
    let tmp;
    let len;
    let data = new SetPhysicsPropertiesResponse();
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
    return 'gazebo_msgs/SetPhysicsPropertiesResponse';
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
  Request: SetPhysicsPropertiesRequest,
  Response: SetPhysicsPropertiesResponse
};
