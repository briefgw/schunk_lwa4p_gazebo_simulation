// Auto-generated. Do not edit!

// (in-package stereo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------

class DisparityImage {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.image = new sensor_msgs.msg.Image();
    this.f = 0.0;
    this.T = 0.0;
    this.valid_window = new sensor_msgs.msg.RegionOfInterest();
    this.min_disparity = 0.0;
    this.max_disparity = 0.0;
    this.delta_d = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DisparityImage
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [image]
    bufferInfo = sensor_msgs.msg.Image.serialize(obj.image, bufferInfo);
    // Serialize message field [f]
    bufferInfo = _serializer.float32(obj.f, bufferInfo);
    // Serialize message field [T]
    bufferInfo = _serializer.float32(obj.T, bufferInfo);
    // Serialize message field [valid_window]
    bufferInfo = sensor_msgs.msg.RegionOfInterest.serialize(obj.valid_window, bufferInfo);
    // Serialize message field [min_disparity]
    bufferInfo = _serializer.float32(obj.min_disparity, bufferInfo);
    // Serialize message field [max_disparity]
    bufferInfo = _serializer.float32(obj.max_disparity, bufferInfo);
    // Serialize message field [delta_d]
    bufferInfo = _serializer.float32(obj.delta_d, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DisparityImage
    let tmp;
    let len;
    let data = new DisparityImage();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [image]
    tmp = sensor_msgs.msg.Image.deserialize(buffer);
    data.image = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [f]
    tmp = _deserializer.float32(buffer);
    data.f = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [T]
    tmp = _deserializer.float32(buffer);
    data.T = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [valid_window]
    tmp = sensor_msgs.msg.RegionOfInterest.deserialize(buffer);
    data.valid_window = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_disparity]
    tmp = _deserializer.float32(buffer);
    data.min_disparity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_disparity]
    tmp = _deserializer.float32(buffer);
    data.max_disparity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [delta_d]
    tmp = _deserializer.float32(buffer);
    data.delta_d = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'stereo_msgs/DisparityImage';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '04a177815f75271039fa21f16acad8c9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Separate header for compatibility with current TimeSynchronizer.
    # Likely to be removed in a later release, use image.header instead.
    Header header
    
    # Floating point disparity image. The disparities are pre-adjusted for any
    # x-offset between the principal points of the two cameras (in the case
    # that they are verged). That is: d = x_l - x_r - (cx_l - cx_r)
    sensor_msgs/Image image
    
    # Stereo geometry. For disparity d, the depth from the camera is Z = fT/d.
    float32 f # Focal length, pixels
    float32 T # Baseline, world units
    
    # Subwindow of (potentially) valid disparity values.
    sensor_msgs/RegionOfInterest valid_window
    
    # The range of disparities searched.
    # In the disparity image, any disparity less than min_disparity is invalid.
    # The disparity search range defines the horopter, or 3D volume that the
    # stereo algorithm can "see". Points with Z outside of:
    #     Z_min = fT / max_disparity
    #     Z_max = fT / min_disparity
    # could not be found.
    float32 min_disparity
    float32 max_disparity
    
    # Smallest allowed disparity increment. The smallest achievable depth range
    # resolution is delta_Z = (Z^2/fT)*delta_d.
    float32 delta_d
    
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
    MSG: sensor_msgs/Image
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of cameara
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    
    ================================================================================
    MSG: sensor_msgs/RegionOfInterest
    # This message is used to specify a region of interest within an image.
    #
    # When used to specify the ROI setting of the camera when the image was
    # taken, the height and width fields should either match the height and
    # width fields for the associated image; or height = width = 0
    # indicates that the full resolution image was captured.
    
    uint32 x_offset  # Leftmost pixel of the ROI
                     # (0 if the ROI includes the left edge of the image)
    uint32 y_offset  # Topmost pixel of the ROI
                     # (0 if the ROI includes the top edge of the image)
    uint32 height    # Height of ROI
    uint32 width     # Width of ROI
    
    # True if a distinct rectified ROI should be calculated from the "raw"
    # ROI in this message. Typically this should be False if the full image
    # is captured (ROI not used), and True if a subwindow is captured (ROI
    # used).
    bool do_rectify
    
    `;
  }

};

module.exports = DisparityImage;
