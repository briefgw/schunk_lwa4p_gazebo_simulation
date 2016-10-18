// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class RegionOfInterest {
  constructor() {
    this.x_offset = 0;
    this.y_offset = 0;
    this.height = 0;
    this.width = 0;
    this.do_rectify = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RegionOfInterest
    // Serialize message field [x_offset]
    bufferInfo = _serializer.uint32(obj.x_offset, bufferInfo);
    // Serialize message field [y_offset]
    bufferInfo = _serializer.uint32(obj.y_offset, bufferInfo);
    // Serialize message field [height]
    bufferInfo = _serializer.uint32(obj.height, bufferInfo);
    // Serialize message field [width]
    bufferInfo = _serializer.uint32(obj.width, bufferInfo);
    // Serialize message field [do_rectify]
    bufferInfo = _serializer.bool(obj.do_rectify, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RegionOfInterest
    let tmp;
    let len;
    let data = new RegionOfInterest();
    // Deserialize message field [x_offset]
    tmp = _deserializer.uint32(buffer);
    data.x_offset = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [y_offset]
    tmp = _deserializer.uint32(buffer);
    data.y_offset = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [height]
    tmp = _deserializer.uint32(buffer);
    data.height = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [width]
    tmp = _deserializer.uint32(buffer);
    data.width = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [do_rectify]
    tmp = _deserializer.bool(buffer);
    data.do_rectify = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/RegionOfInterest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bdb633039d588fcccb441a4d43ccfe09';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = RegionOfInterest;
