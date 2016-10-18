// Auto-generated. Do not edit!

// (in-package std_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let MultiArrayDimension = require('./MultiArrayDimension.js');

//-----------------------------------------------------------

class MultiArrayLayout {
  constructor() {
    this.dim = [];
    this.data_offset = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MultiArrayLayout
    // Serialize the length for message field [dim]
    bufferInfo = _serializer.uint32(obj.dim.length, bufferInfo);
    // Serialize message field [dim]
    obj.dim.forEach((val) => {
      bufferInfo = MultiArrayDimension.serialize(val, bufferInfo);
    });
    // Serialize message field [data_offset]
    bufferInfo = _serializer.uint32(obj.data_offset, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MultiArrayLayout
    let tmp;
    let len;
    let data = new MultiArrayLayout();
    // Deserialize array length for message field [dim]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dim]
    data.dim = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = MultiArrayDimension.deserialize(buffer);
      data.dim[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [data_offset]
    tmp = _deserializer.uint32(buffer);
    data.data_offset = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'std_msgs/MultiArrayLayout';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0fed2a11c13e11c5571b4e2a995a91a3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The multiarray declares a generic multi-dimensional array of a
    # particular data type.  Dimensions are ordered from outer most
    # to inner most.
    
    MultiArrayDimension[] dim # Array of dimension properties
    uint32 data_offset        # padding elements at front of data
    
    # Accessors should ALWAYS be written in terms of dimension stride
    # and specified outer-most dimension first.
    # 
    # multiarray(i,j,k) = data[data_offset + dim_stride[1]*i + dim_stride[2]*j + k]
    #
    # A standard, 3-channel 640x480 image with interleaved color channels
    # would be specified as:
    #
    # dim[0].label  = "height"
    # dim[0].size   = 480
    # dim[0].stride = 3*640*480 = 921600  (note dim[0] stride is just size of image)
    # dim[1].label  = "width"
    # dim[1].size   = 640
    # dim[1].stride = 3*640 = 1920
    # dim[2].label  = "channel"
    # dim[2].size   = 3
    # dim[2].stride = 3
    #
    # multiarray(i,j,k) refers to the ith row, jth column, and kth channel.
    
    ================================================================================
    MSG: std_msgs/MultiArrayDimension
    string label   # label of given dimension
    uint32 size    # size of given dimension (in type units)
    uint32 stride  # stride of given dimension
    `;
  }

};

module.exports = MultiArrayLayout;
