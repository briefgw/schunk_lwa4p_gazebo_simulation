// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ODEJointProperties {
  constructor() {
    this.damping = [];
    this.hiStop = [];
    this.loStop = [];
    this.erp = [];
    this.cfm = [];
    this.stop_erp = [];
    this.stop_cfm = [];
    this.fudge_factor = [];
    this.fmax = [];
    this.vel = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ODEJointProperties
    // Serialize the length for message field [damping]
    bufferInfo = _serializer.uint32(obj.damping.length, bufferInfo);
    // Serialize message field [damping]
    obj.damping.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [hiStop]
    bufferInfo = _serializer.uint32(obj.hiStop.length, bufferInfo);
    // Serialize message field [hiStop]
    obj.hiStop.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [loStop]
    bufferInfo = _serializer.uint32(obj.loStop.length, bufferInfo);
    // Serialize message field [loStop]
    obj.loStop.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [erp]
    bufferInfo = _serializer.uint32(obj.erp.length, bufferInfo);
    // Serialize message field [erp]
    obj.erp.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [cfm]
    bufferInfo = _serializer.uint32(obj.cfm.length, bufferInfo);
    // Serialize message field [cfm]
    obj.cfm.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [stop_erp]
    bufferInfo = _serializer.uint32(obj.stop_erp.length, bufferInfo);
    // Serialize message field [stop_erp]
    obj.stop_erp.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [stop_cfm]
    bufferInfo = _serializer.uint32(obj.stop_cfm.length, bufferInfo);
    // Serialize message field [stop_cfm]
    obj.stop_cfm.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [fudge_factor]
    bufferInfo = _serializer.uint32(obj.fudge_factor.length, bufferInfo);
    // Serialize message field [fudge_factor]
    obj.fudge_factor.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [fmax]
    bufferInfo = _serializer.uint32(obj.fmax.length, bufferInfo);
    // Serialize message field [fmax]
    obj.fmax.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [vel]
    bufferInfo = _serializer.uint32(obj.vel.length, bufferInfo);
    // Serialize message field [vel]
    obj.vel.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ODEJointProperties
    let tmp;
    let len;
    let data = new ODEJointProperties();
    // Deserialize array length for message field [damping]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [damping]
    data.damping = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.damping[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [hiStop]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [hiStop]
    data.hiStop = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.hiStop[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [loStop]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [loStop]
    data.loStop = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.loStop[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [erp]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [erp]
    data.erp = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.erp[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [cfm]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cfm]
    data.cfm = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.cfm[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [stop_erp]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stop_erp]
    data.stop_erp = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.stop_erp[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [stop_cfm]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stop_cfm]
    data.stop_cfm = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.stop_cfm[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [fudge_factor]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fudge_factor]
    data.fudge_factor = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.fudge_factor[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [fmax]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fmax]
    data.fmax = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.fmax[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [vel]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [vel]
    data.vel = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.vel[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/ODEJointProperties';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1b744c32a920af979f53afe2f9c3511f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # access to low level joint properties, change these at your own risk
    float64[] damping             # joint damping
    float64[] hiStop              # joint limit
    float64[] loStop              # joint limit
    float64[] erp                 # set joint erp
    float64[] cfm                 # set joint cfm
    float64[] stop_erp            # set joint erp for joint limit "contact" joint
    float64[] stop_cfm            # set joint cfm for joint limit "contact" joint
    float64[] fudge_factor        # joint fudge_factor applied at limits, see ODE manual for info.
    float64[] fmax                # ode joint param fmax
    float64[] vel                 # ode joint param vel
    
    `;
  }

};

module.exports = ODEJointProperties;
