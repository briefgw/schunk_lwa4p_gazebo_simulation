// Auto-generated. Do not edit!

// (in-package shape_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class Plane {
  constructor() {
    this.coef = new Array(4).fill(0);
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type Plane
    // Serialize message field [coef]
    obj.coef.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type Plane
    let tmp;
    let len;
    let data = new Plane();
    len = 4;
    // Deserialize message field [coef]
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.coef[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'shape_msgs/Plane';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2c1b92ed8f31492f8e73f6a4a44ca796';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Representation of a plane, using the plane equation ax + by + cz + d = 0
    
    # a := coef[0]
    # b := coef[1]
    # c := coef[2]
    # d := coef[3]
    
    float64[4] coef
    
    `;
  }

};

module.exports = Plane;
