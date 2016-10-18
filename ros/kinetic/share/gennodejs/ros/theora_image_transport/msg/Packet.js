// Auto-generated. Do not edit!

// (in-package theora_image_transport.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Packet {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.data = [];
    this.b_o_s = 0;
    this.e_o_s = 0;
    this.granulepos = 0;
    this.packetno = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Packet
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [data]
    bufferInfo = _serializer.uint32(obj.data.length, bufferInfo);
    // Serialize message field [data]
    bufferInfo.buffer.push(obj.data);
    bufferInfo.length += obj.data.length;
    // Serialize message field [b_o_s]
    bufferInfo = _serializer.int32(obj.b_o_s, bufferInfo);
    // Serialize message field [e_o_s]
    bufferInfo = _serializer.int32(obj.e_o_s, bufferInfo);
    // Serialize message field [granulepos]
    bufferInfo = _serializer.int64(obj.granulepos, bufferInfo);
    // Serialize message field [packetno]
    bufferInfo = _serializer.int64(obj.packetno, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Packet
    let tmp;
    let len;
    let data = new Packet();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [data]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [data]
    data.data = buffer.slice(0, len);
    buffer =  buffer.slice(len);
    // Deserialize message field [b_o_s]
    tmp = _deserializer.int32(buffer);
    data.b_o_s = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [e_o_s]
    tmp = _deserializer.int32(buffer);
    data.e_o_s = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [granulepos]
    tmp = _deserializer.int64(buffer);
    data.granulepos = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [packetno]
    tmp = _deserializer.int64(buffer);
    data.packetno = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'theora_image_transport/Packet';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '33ac4e14a7cff32e7e0d65f18bb410f3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ROS message adaptation of the ogg_packet struct from libogg,
    # see http://www.xiph.org/ogg/doc/libogg/ogg_packet.html.
    
    Header header     # Original sensor_msgs/Image header
    uint8[] data      # Raw Theora packet data (combines packet and bytes fields from ogg_packet)
    int32 b_o_s       # Flag indicating whether this packet begins a logical bitstream
    int32 e_o_s       # Flag indicating whether this packet ends a bitstream
    int64 granulepos  # A number indicating the position of this packet in the decoded data
    int64 packetno    # Sequential number of this packet in the ogg bitstream
    
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

module.exports = Packet;
