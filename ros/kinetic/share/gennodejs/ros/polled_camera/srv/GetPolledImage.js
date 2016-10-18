// Auto-generated. Do not edit!

// (in-package polled_camera.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let sensor_msgs = _finder('sensor_msgs');

//-----------------------------------------------------------


//-----------------------------------------------------------

class GetPolledImageRequest {
  constructor() {
    this.response_namespace = '';
    this.timeout = {secs: 0, nsecs: 0};
    this.binning_x = 0;
    this.binning_y = 0;
    this.roi = new sensor_msgs.msg.RegionOfInterest();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPolledImageRequest
    // Serialize message field [response_namespace]
    bufferInfo = _serializer.string(obj.response_namespace, bufferInfo);
    // Serialize message field [timeout]
    bufferInfo = _serializer.duration(obj.timeout, bufferInfo);
    // Serialize message field [binning_x]
    bufferInfo = _serializer.uint32(obj.binning_x, bufferInfo);
    // Serialize message field [binning_y]
    bufferInfo = _serializer.uint32(obj.binning_y, bufferInfo);
    // Serialize message field [roi]
    bufferInfo = sensor_msgs.msg.RegionOfInterest.serialize(obj.roi, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPolledImageRequest
    let tmp;
    let len;
    let data = new GetPolledImageRequest();
    // Deserialize message field [response_namespace]
    tmp = _deserializer.string(buffer);
    data.response_namespace = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [timeout]
    tmp = _deserializer.duration(buffer);
    data.timeout = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [binning_x]
    tmp = _deserializer.uint32(buffer);
    data.binning_x = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [binning_y]
    tmp = _deserializer.uint32(buffer);
    data.binning_y = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [roi]
    tmp = sensor_msgs.msg.RegionOfInterest.deserialize(buffer);
    data.roi = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'polled_camera/GetPolledImageRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c77ed43e530fd48e9e7a2a93845e154c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    string response_namespace
    
    
    
    
    duration timeout
    
    
    uint32 binning_x
    uint32 binning_y
    
    
    sensor_msgs/RegionOfInterest roi
    
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

class GetPolledImageResponse {
  constructor() {
    this.success = false;
    this.status_message = '';
    this.stamp = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPolledImageResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    // Serialize message field [status_message]
    bufferInfo = _serializer.string(obj.status_message, bufferInfo);
    // Serialize message field [stamp]
    bufferInfo = _serializer.time(obj.stamp, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPolledImageResponse
    let tmp;
    let len;
    let data = new GetPolledImageResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status_message]
    tmp = _deserializer.string(buffer);
    data.status_message = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp]
    tmp = _deserializer.time(buffer);
    data.stamp = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'polled_camera/GetPolledImageResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dbf1f851bc511800e6129ccd5a3542ab';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    string status_message
    time stamp
    
    
    
    `;
  }

};

module.exports = {
  Request: GetPolledImageRequest,
  Response: GetPolledImageResponse
};
