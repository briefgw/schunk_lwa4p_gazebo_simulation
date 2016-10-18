// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Range {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.radiation_type = 0;
    this.field_of_view = 0.0;
    this.min_range = 0.0;
    this.max_range = 0.0;
    this.range = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Range
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [radiation_type]
    bufferInfo = _serializer.uint8(obj.radiation_type, bufferInfo);
    // Serialize message field [field_of_view]
    bufferInfo = _serializer.float32(obj.field_of_view, bufferInfo);
    // Serialize message field [min_range]
    bufferInfo = _serializer.float32(obj.min_range, bufferInfo);
    // Serialize message field [max_range]
    bufferInfo = _serializer.float32(obj.max_range, bufferInfo);
    // Serialize message field [range]
    bufferInfo = _serializer.float32(obj.range, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Range
    let tmp;
    let len;
    let data = new Range();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [radiation_type]
    tmp = _deserializer.uint8(buffer);
    data.radiation_type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [field_of_view]
    tmp = _deserializer.float32(buffer);
    data.field_of_view = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_range]
    tmp = _deserializer.float32(buffer);
    data.min_range = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_range]
    tmp = _deserializer.float32(buffer);
    data.max_range = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [range]
    tmp = _deserializer.float32(buffer);
    data.range = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/Range';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c005c34273dc426c67a020a87bc24148';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Single range reading from an active ranger that emits energy and reports
    # one range reading that is valid along an arc at the distance measured. 
    # This message is  not appropriate for laser scanners. See the LaserScan
    # message if you are working with a laser scanner.
    
    # This message also can represent a fixed-distance (binary) ranger.  This
    # sensor will have min_range===max_range===distance of detection.
    # These sensors follow REP 117 and will output -Inf if the object is detected
    # and +Inf if the object is outside of the detection range.
    
    Header header           # timestamp in the header is the time the ranger
                            # returned the distance reading
    
    # Radiation type enums
    # If you want a value added to this list, send an email to the ros-users list
    uint8 ULTRASOUND=0
    uint8 INFRARED=1
    
    uint8 radiation_type    # the type of radiation used by the sensor
                            # (sound, IR, etc) [enum]
    
    float32 field_of_view   # the size of the arc that the distance reading is
                            # valid for [rad]
                            # the object causing the range reading may have
                            # been anywhere within -field_of_view/2 and
                            # field_of_view/2 at the measured range. 
                            # 0 angle corresponds to the x-axis of the sensor.
    
    float32 min_range       # minimum range value [m]
    float32 max_range       # maximum range value [m]
                            # Fixed distance rangers require min_range==max_range
    
    float32 range           # range data [m]
                            # (Note: values < range_min or > range_max
                            # should be discarded)
                            # Fixed distance rangers only output -Inf or +Inf.
                            # -Inf represents a detection within fixed distance.
                            # (Detection too close to the sensor to quantify)
                            # +Inf represents no detection within the fixed distance.
                            # (Object out of range)
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

// Constants for message
Range.Constants = {
  ULTRASOUND: 0,
  INFRARED: 1,
}

module.exports = Range;
