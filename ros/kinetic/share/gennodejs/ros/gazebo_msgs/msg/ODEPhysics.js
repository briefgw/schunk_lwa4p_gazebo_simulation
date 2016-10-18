// Auto-generated. Do not edit!

// (in-package gazebo_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ODEPhysics {
  constructor() {
    this.auto_disable_bodies = false;
    this.sor_pgs_precon_iters = 0;
    this.sor_pgs_iters = 0;
    this.sor_pgs_w = 0.0;
    this.sor_pgs_rms_error_tol = 0.0;
    this.contact_surface_layer = 0.0;
    this.contact_max_correcting_vel = 0.0;
    this.cfm = 0.0;
    this.erp = 0.0;
    this.max_contacts = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ODEPhysics
    // Serialize message field [auto_disable_bodies]
    bufferInfo = _serializer.bool(obj.auto_disable_bodies, bufferInfo);
    // Serialize message field [sor_pgs_precon_iters]
    bufferInfo = _serializer.uint32(obj.sor_pgs_precon_iters, bufferInfo);
    // Serialize message field [sor_pgs_iters]
    bufferInfo = _serializer.uint32(obj.sor_pgs_iters, bufferInfo);
    // Serialize message field [sor_pgs_w]
    bufferInfo = _serializer.float64(obj.sor_pgs_w, bufferInfo);
    // Serialize message field [sor_pgs_rms_error_tol]
    bufferInfo = _serializer.float64(obj.sor_pgs_rms_error_tol, bufferInfo);
    // Serialize message field [contact_surface_layer]
    bufferInfo = _serializer.float64(obj.contact_surface_layer, bufferInfo);
    // Serialize message field [contact_max_correcting_vel]
    bufferInfo = _serializer.float64(obj.contact_max_correcting_vel, bufferInfo);
    // Serialize message field [cfm]
    bufferInfo = _serializer.float64(obj.cfm, bufferInfo);
    // Serialize message field [erp]
    bufferInfo = _serializer.float64(obj.erp, bufferInfo);
    // Serialize message field [max_contacts]
    bufferInfo = _serializer.uint32(obj.max_contacts, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ODEPhysics
    let tmp;
    let len;
    let data = new ODEPhysics();
    // Deserialize message field [auto_disable_bodies]
    tmp = _deserializer.bool(buffer);
    data.auto_disable_bodies = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sor_pgs_precon_iters]
    tmp = _deserializer.uint32(buffer);
    data.sor_pgs_precon_iters = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sor_pgs_iters]
    tmp = _deserializer.uint32(buffer);
    data.sor_pgs_iters = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sor_pgs_w]
    tmp = _deserializer.float64(buffer);
    data.sor_pgs_w = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sor_pgs_rms_error_tol]
    tmp = _deserializer.float64(buffer);
    data.sor_pgs_rms_error_tol = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_surface_layer]
    tmp = _deserializer.float64(buffer);
    data.contact_surface_layer = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_max_correcting_vel]
    tmp = _deserializer.float64(buffer);
    data.contact_max_correcting_vel = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cfm]
    tmp = _deserializer.float64(buffer);
    data.cfm = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [erp]
    tmp = _deserializer.float64(buffer);
    data.erp = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_contacts]
    tmp = _deserializer.uint32(buffer);
    data.max_contacts = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'gazebo_msgs/ODEPhysics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '667d56ddbd547918c32d1934503dc335';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool auto_disable_bodies           # enable auto disabling of bodies, default false
    uint32 sor_pgs_precon_iters        # preconditioning inner iterations when uisng projected Gauss Seidel
    uint32 sor_pgs_iters               # inner iterations when uisng projected Gauss Seidel
    float64 sor_pgs_w                  # relaxation parameter when using projected Gauss Seidel, 1 = no relaxation
    float64 sor_pgs_rms_error_tol      # rms error tolerance before stopping inner iterations
    float64 contact_surface_layer      # contact "dead-band" width
    float64 contact_max_correcting_vel # contact maximum correction velocity
    float64 cfm                        # global constraint force mixing
    float64 erp                        # global error reduction parameter
    uint32 max_contacts                # maximum contact joints between two geoms
    
    `;
  }

};

module.exports = ODEPhysics;
