// Auto-generated. Do not edit!

// (in-package shape_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class SolidPrimitive {
  constructor() {
    this.type = 0;
    this.dimensions = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SolidPrimitive
    // Serialize message field [type]
    bufferInfo = _serializer.uint8(obj.type, bufferInfo);
    // Serialize the length for message field [dimensions]
    bufferInfo = _serializer.uint32(obj.dimensions.length, bufferInfo);
    // Serialize message field [dimensions]
    obj.dimensions.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SolidPrimitive
    let tmp;
    let len;
    let data = new SolidPrimitive();
    // Deserialize message field [type]
    tmp = _deserializer.uint8(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [dimensions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dimensions]
    data.dimensions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.dimensions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'shape_msgs/SolidPrimitive';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd8f8cbc74c5ff283fca29569ccefb45d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Define box, sphere, cylinder, cone 
    # All shapes are defined to have their bounding boxes centered around 0,0,0.
    
    uint8 BOX=1
    uint8 SPHERE=2
    uint8 CYLINDER=3
    uint8 CONE=4
    
    # The type of the shape
    uint8 type
    
    
    # The dimensions of the shape
    float64[] dimensions
    
    # The meaning of the shape dimensions: each constant defines the index in the 'dimensions' array
    
    # For the BOX type, the X, Y, and Z dimensions are the length of the corresponding
    # sides of the box.
    uint8 BOX_X=0
    uint8 BOX_Y=1
    uint8 BOX_Z=2
    
    
    # For the SPHERE type, only one component is used, and it gives the radius of
    # the sphere.
    uint8 SPHERE_RADIUS=0
    
    
    # For the CYLINDER and CONE types, the center line is oriented along
    # the Z axis.  Therefore the CYLINDER_HEIGHT (CONE_HEIGHT) component
    # of dimensions gives the height of the cylinder (cone).  The
    # CYLINDER_RADIUS (CONE_RADIUS) component of dimensions gives the
    # radius of the base of the cylinder (cone).  Cone and cylinder
    # primitives are defined to be circular. The tip of the cone is
    # pointing up, along +Z axis.
    
    uint8 CYLINDER_HEIGHT=0
    uint8 CYLINDER_RADIUS=1
    
    uint8 CONE_HEIGHT=0
    uint8 CONE_RADIUS=1
    
    `;
  }

};

// Constants for message
SolidPrimitive.Constants = {
  BOX: 1,
  SPHERE: 2,
  CYLINDER: 3,
  CONE: 4,
  BOX_X: 0,
  BOX_Y: 1,
  BOX_Z: 2,
  SPHERE_RADIUS: 0,
  CYLINDER_HEIGHT: 0,
  CYLINDER_RADIUS: 1,
  CONE_HEIGHT: 0,
  CONE_RADIUS: 1,
}

module.exports = SolidPrimitive;
