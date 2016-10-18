// Auto-generated. Do not edit!

// (in-package laser_assembler.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class AssembleScansRequest {
  constructor() {
    this.begin = {secs: 0, nsecs: 0};
    this.end = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AssembleScansRequest
    // Serialize message field [begin]
    bufferInfo = _serializer.time(obj.begin, bufferInfo);
    // Serialize message field [end]
    bufferInfo = _serializer.time(obj.end, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AssembleScansRequest
    let tmp;
    let len;
    let data = new AssembleScansRequest();
    // Deserialize message field [begin]
    tmp = _deserializer.time(buffer);
    data.begin = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [end]
    tmp = _deserializer.time(buffer);
    data.end = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'laser_assembler/AssembleScansRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b341004f74e15bf5e1b2053a9183bdc7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    time begin
    
    time end
    
    `;
  }

};

class AssembleScansResponse {
  constructor() {
    this.cloud = new sensor_msgs.msg.PointCloud();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AssembleScansResponse
    // Serialize message field [cloud]
    bufferInfo = sensor_msgs.msg.PointCloud.serialize(obj.cloud, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AssembleScansResponse
    let tmp;
    let len;
    let data = new AssembleScansResponse();
    // Deserialize message field [cloud]
    tmp = sensor_msgs.msg.PointCloud.deserialize(buffer);
    data.cloud = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'laser_assembler/AssembleScansResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4217b28a903e4ad7869a83b3653110ff';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    sensor_msgs/PointCloud cloud
    
    
    ================================================================================
    MSG: sensor_msgs/PointCloud
    # This message holds a collection of 3d points, plus optional additional
    # information about each point.
    
    # Time of sensor data acquisition, coordinate frame ID.
    Header header
    
    # Array of 3d points. Each Point32 should be interpreted as a 3d point
    # in the frame given in the header.
    geometry_msgs/Point32[] points
    
    # Each channel should have the same number of elements as points array,
    # and the data in each channel should correspond 1:1 with each point.
    # Channel names in common practice are listed in ChannelFloat32.msg.
    ChannelFloat32[] channels
    
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
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    ================================================================================
    MSG: sensor_msgs/ChannelFloat32
    # This message is used by the PointCloud message to hold optional data
    # associated with each point in the cloud. The length of the values
    # array should be the same as the length of the points array in the
    # PointCloud, and each value should be associated with the corresponding
    # point.
    
    # Channel names in existing practice include:
    #   "u", "v" - row and column (respectively) in the left stereo image.
    #              This is opposite to usual conventions but remains for
    #              historical reasons. The newer PointCloud2 message has no
    #              such problem.
    #   "rgb" - For point clouds produced by color stereo cameras. uint8
    #           (R,G,B) values packed into the least significant 24 bits,
    #           in order.
    #   "intensity" - laser or pixel intensity.
    #   "distance"
    
    # The channel name should give semantics of the channel (e.g.
    # "intensity" instead of "value").
    string name
    
    # The values array should be 1-1 with the elements of the associated
    # PointCloud.
    float32[] values
    
    `;
  }

};

module.exports = {
  Request: AssembleScansRequest,
  Response: AssembleScansResponse
};
