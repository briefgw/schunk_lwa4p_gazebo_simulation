// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PointField {
  constructor() {
    this.name = '';
    this.offset = 0;
    this.datatype = 0;
    this.count = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PointField
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [offset]
    bufferInfo = _serializer.uint32(obj.offset, bufferInfo);
    // Serialize message field [datatype]
    bufferInfo = _serializer.uint8(obj.datatype, bufferInfo);
    // Serialize message field [count]
    bufferInfo = _serializer.uint32(obj.count, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PointField
    let tmp;
    let len;
    let data = new PointField();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [offset]
    tmp = _deserializer.uint32(buffer);
    data.offset = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [datatype]
    tmp = _deserializer.uint8(buffer);
    data.datatype = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [count]
    tmp = _deserializer.uint32(buffer);
    data.count = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/PointField';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '268eacb2962780ceac86cbd17e328150';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message holds the description of one point entry in the
    # PointCloud2 message format.
    uint8 INT8    = 1
    uint8 UINT8   = 2
    uint8 INT16   = 3
    uint8 UINT16  = 4
    uint8 INT32   = 5
    uint8 UINT32  = 6
    uint8 FLOAT32 = 7
    uint8 FLOAT64 = 8
    
    string name      # Name of field
    uint32 offset    # Offset from start of point struct
    uint8  datatype  # Datatype enumeration, see above
    uint32 count     # How many elements in the field
    
    `;
  }

};

// Constants for message
PointField.Constants = {
  INT8: 1,
  UINT8: 2,
  INT16: 3,
  UINT16: 4,
  INT32: 5,
  UINT32: 6,
  FLOAT32: 7,
  FLOAT64: 8,
}

module.exports = PointField;
