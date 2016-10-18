// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Illuminance {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.illuminance = 0.0;
    this.variance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Illuminance
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [illuminance]
    bufferInfo = _serializer.float64(obj.illuminance, bufferInfo);
    // Serialize message field [variance]
    bufferInfo = _serializer.float64(obj.variance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Illuminance
    let tmp;
    let len;
    let data = new Illuminance();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [illuminance]
    tmp = _deserializer.float64(buffer);
    data.illuminance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [variance]
    tmp = _deserializer.float64(buffer);
    data.variance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Illuminance';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8cf5febb0952fca9d650c3d11a81a188';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
     # Single photometric illuminance measurement.  Light should be assumed to be
     # measured along the sensor's x-axis (the area of detection is the y-z plane).
     # The illuminance should have a 0 or positive value and be received with
     # the sensor's +X axis pointing toward the light source.
    
     # Photometric illuminance is the measure of the human eye's sensitivity of the
     # intensity of light encountering or passing through a surface.
    
     # All other Photometric and Radiometric measurements should
     # not use this message.
     # This message cannot represent:
     # Luminous intensity (candela/light source output)
     # Luminance (nits/light output per area)
     # Irradiance (watt/area), etc.
    
     Header header           # timestamp is the time the illuminance was measured
                             # frame_id is the location and direction of the reading
    
     float64 illuminance     # Measurement of the Photometric Illuminance in Lux.
    
     float64 variance        # 0 is interpreted as variance unknown
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
    
    `;
  }

};

module.exports = Illuminance;
