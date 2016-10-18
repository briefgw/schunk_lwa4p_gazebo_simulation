// Auto-generated. Do not edit!

// (in-package control_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class JointTolerance {
  constructor() {
    this.name = '';
    this.position = 0.0;
    this.velocity = 0.0;
    this.acceleration = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointTolerance
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [position]
    bufferInfo = _serializer.float64(obj.position, bufferInfo);
    // Serialize message field [velocity]
    bufferInfo = _serializer.float64(obj.velocity, bufferInfo);
    // Serialize message field [acceleration]
    bufferInfo = _serializer.float64(obj.acceleration, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointTolerance
    let tmp;
    let len;
    let data = new JointTolerance();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = _deserializer.float64(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [velocity]
    tmp = _deserializer.float64(buffer);
    data.velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [acceleration]
    tmp = _deserializer.float64(buffer);
    data.acceleration = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'control_msgs/JointTolerance';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f544fe9c16cf04547e135dd6063ff5be';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The tolerances specify the amount the position, velocity, and
    # accelerations can vary from the setpoints.  For example, in the case
    # of trajectory control, when the actual position varies beyond
    # (desired position + position tolerance), the trajectory goal may
    # abort.
    # 
    # There are two special values for tolerances:
    #  * 0 - The tolerance is unspecified and will remain at whatever the default is
    #  * -1 - The tolerance is "erased".  If there was a default, the joint will be
    #         allowed to move without restriction.
    
    string name
    float64 position  # in radians or meters (for a revolute or prismatic joint, respectively)
    float64 velocity  # in rad/sec or m/sec
    float64 acceleration  # in rad/sec^2 or m/sec^2
    
    `;
  }

};

module.exports = JointTolerance;
