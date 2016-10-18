// Auto-generated. Do not edit!

// (in-package gazebo_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let ODEJointProperties = require('../msg/ODEJointProperties.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetJointPropertiesRequest {
  constructor() {
    this.joint_name = '';
    this.ode_joint_config = new ODEJointProperties();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetJointPropertiesRequest
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    // Serialize message field [ode_joint_config]
    bufferInfo = ODEJointProperties.serialize(obj.ode_joint_config, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetJointPropertiesRequest
    let tmp;
    let len;
    let data = new SetJointPropertiesRequest();
    // Deserialize message field [joint_name]
    tmp = _deserializer.string(buffer);
    data.joint_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ode_joint_config]
    tmp = ODEJointProperties.deserialize(buffer);
    data.ode_joint_config = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'gazebo_msgs/SetJointPropertiesRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '331fd8f35fd27e3c1421175590258e26';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string joint_name
    gazebo_msgs/ODEJointProperties ode_joint_config
    
    ================================================================================
    MSG: gazebo_msgs/ODEJointProperties
    # access to low level joint properties, change these at your own risk
    float64[] damping             # joint damping
    float64[] hiStop              # joint limit
    float64[] loStop              # joint limit
    float64[] erp                 # set joint erp
    float64[] cfm                 # set joint cfm
    float64[] stop_erp            # set joint erp for joint limit "contact" joint
    float64[] stop_cfm            # set joint cfm for joint limit "contact" joint
    float64[] fudge_factor        # joint fudge_factor applied at limits, see ODE manual for info.
    float64[] fmax                # ode joint param fmax
    float64[] vel                 # ode joint param vel
    
    `;
  }

};

class SetJointPropertiesResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetJointPropertiesResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetJointPropertiesResponse
    let tmp;
    let len;
    let data = new SetJointPropertiesResponse();
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
    return 'gazebo_msgs/SetJointPropertiesResponse';
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
  Request: SetJointPropertiesRequest,
  Response: SetJointPropertiesResponse
};
