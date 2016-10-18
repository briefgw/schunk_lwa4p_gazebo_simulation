// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let LaserEcho = require('./LaserEcho.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MultiEchoLaserScan {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.angle_min = 0.0;
    this.angle_max = 0.0;
    this.angle_increment = 0.0;
    this.time_increment = 0.0;
    this.scan_time = 0.0;
    this.range_min = 0.0;
    this.range_max = 0.0;
    this.ranges = [];
    this.intensities = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultiEchoLaserScan
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [angle_min]
    bufferInfo = _serializer.float32(obj.angle_min, bufferInfo);
    // Serialize message field [angle_max]
    bufferInfo = _serializer.float32(obj.angle_max, bufferInfo);
    // Serialize message field [angle_increment]
    bufferInfo = _serializer.float32(obj.angle_increment, bufferInfo);
    // Serialize message field [time_increment]
    bufferInfo = _serializer.float32(obj.time_increment, bufferInfo);
    // Serialize message field [scan_time]
    bufferInfo = _serializer.float32(obj.scan_time, bufferInfo);
    // Serialize message field [range_min]
    bufferInfo = _serializer.float32(obj.range_min, bufferInfo);
    // Serialize message field [range_max]
    bufferInfo = _serializer.float32(obj.range_max, bufferInfo);
    // Serialize the length for message field [ranges]
    bufferInfo = _serializer.uint32(obj.ranges.length, bufferInfo);
    // Serialize message field [ranges]
    obj.ranges.forEach((val) => {
      bufferInfo = LaserEcho.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [intensities]
    bufferInfo = _serializer.uint32(obj.intensities.length, bufferInfo);
    // Serialize message field [intensities]
    obj.intensities.forEach((val) => {
      bufferInfo = LaserEcho.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MultiEchoLaserScan
    let tmp;
    let len;
    let data = new MultiEchoLaserScan();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angle_min]
    tmp = _deserializer.float32(buffer);
    data.angle_min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angle_max]
    tmp = _deserializer.float32(buffer);
    data.angle_max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [angle_increment]
    tmp = _deserializer.float32(buffer);
    data.angle_increment = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [time_increment]
    tmp = _deserializer.float32(buffer);
    data.time_increment = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scan_time]
    tmp = _deserializer.float32(buffer);
    data.scan_time = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [range_min]
    tmp = _deserializer.float32(buffer);
    data.range_min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [range_max]
    tmp = _deserializer.float32(buffer);
    data.range_max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [ranges]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ranges]
    data.ranges = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = LaserEcho.deserialize(buffer);
      data.ranges[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [intensities]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [intensities]
    data.intensities = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = LaserEcho.deserialize(buffer);
      data.intensities[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/MultiEchoLaserScan';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6fefb0c6da89d7c8abe4b339f5c2f8fb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Single scan from a multi-echo planar laser range-finder
    #
    # If you have another ranging device with different behavior (e.g. a sonar
    # array), please find or create a different message, since applications
    # will make fairly laser-specific assumptions about this data
    
    Header header            # timestamp in the header is the acquisition time of 
                             # the first ray in the scan.
                             #
                             # in frame frame_id, angles are measured around 
                             # the positive Z axis (counterclockwise, if Z is up)
                             # with zero angle being forward along the x axis
                             
    float32 angle_min        # start angle of the scan [rad]
    float32 angle_max        # end angle of the scan [rad]
    float32 angle_increment  # angular distance between measurements [rad]
    
    float32 time_increment   # time between measurements [seconds] - if your scanner
                             # is moving, this will be used in interpolating position
                             # of 3d points
    float32 scan_time        # time between scans [seconds]
    
    float32 range_min        # minimum range value [m]
    float32 range_max        # maximum range value [m]
    
    LaserEcho[] ranges       # range data [m] (Note: NaNs, values < range_min or > range_max should be discarded)
                             # +Inf measurements are out of range
                             # -Inf measurements are too close to determine exact distance.
    LaserEcho[] intensities  # intensity data [device-specific units].  If your
                             # device does not provide intensities, please leave
                             # the array empty.
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
    MSG: sensor_msgs/LaserEcho
    # This message is a submessage of MultiEchoLaserScan and is not intended
    # to be used separately.
    
    float32[] echoes  # Multiple values of ranges or intensities.
                      # Each array represents data from the same angle increment.
    `;
  }

};

module.exports = MultiEchoLaserScan;
