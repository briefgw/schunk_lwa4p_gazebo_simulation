// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class Imu {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.orientation = new geometry_msgs.msg.Quaternion();
    this.orientation_covariance = new Array(9).fill(0);
    this.angular_velocity = new geometry_msgs.msg.Vector3();
    this.angular_velocity_covariance = new Array(9).fill(0);
    this.linear_acceleration = new geometry_msgs.msg.Vector3();
    this.linear_acceleration_covariance = new Array(9).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Imu
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.orientation, bufferInfo);
    // Serialize message field [orientation_covariance]
    obj.orientation_covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [angular_velocity]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.angular_velocity, bufferInfo);
    // Serialize message field [angular_velocity_covariance]
    obj.angular_velocity_covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize message field [linear_acceleration]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.linear_acceleration, bufferInfo);
    // Serialize message field [linear_acceleration_covariance]
    obj.linear_acceleration_covariance.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Imu
    let tmp;
    let len;
    let data = new Imu();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    len = 9;
    // Deserialize message field [orientation_covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.orientation_covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [angular_velocity]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.angular_velocity = tmp.data;
    buffer = tmp.buffer;
    len = 9;
    // Deserialize message field [angular_velocity_covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.angular_velocity_covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [linear_acceleration]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.linear_acceleration = tmp.data;
    buffer = tmp.buffer;
    len = 9;
    // Deserialize message field [linear_acceleration_covariance]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.linear_acceleration_covariance[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Imu';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6a62c6daae103f4ff57a132d6f95cec2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This is a message to hold data from an IMU (Inertial Measurement Unit)
    #
    # Accelerations should be in m/s^2 (not in g's), and rotational velocity should be in rad/sec
    #
    # If the covariance of the measurement is known, it should be filled in (if all you know is the 
    # variance of each measurement, e.g. from the datasheet, just put those along the diagonal)
    # A covariance matrix of all zeros will be interpreted as "covariance unknown", and to use the
    # data a covariance will have to be assumed or gotten from some other source
    #
    # If you have no estimate for one of the data elements (e.g. your IMU doesn't produce an orientation 
    # estimate), please set element 0 of the associated covariance matrix to -1
    # If you are interpreting this message, please check for a value of -1 in the first element of each 
    # covariance matrix, and disregard the associated estimate.
    
    Header header
    
    geometry_msgs/Quaternion orientation
    float64[9] orientation_covariance # Row major about x, y, z axes
    
    geometry_msgs/Vector3 angular_velocity
    float64[9] angular_velocity_covariance # Row major about x, y, z axes
    
    geometry_msgs/Vector3 linear_acceleration
    float64[9] linear_acceleration_covariance # Row major x, y z 
    
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
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
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

module.exports = Imu;
