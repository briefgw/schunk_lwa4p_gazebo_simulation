// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class NavSatStatus {
  constructor() {
    this.status = 0;
    this.service = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type NavSatStatus
    // Serialize message field [status]
    bufferInfo = _serializer.int8(obj.status, bufferInfo);
    // Serialize message field [service]
    bufferInfo = _serializer.uint16(obj.service, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type NavSatStatus
    let tmp;
    let len;
    let data = new NavSatStatus();
    // Deserialize message field [status]
    tmp = _deserializer.int8(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [service]
    tmp = _deserializer.uint16(buffer);
    data.service = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/NavSatStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '331cdbddfa4bc96ffc3b9ad98900a54c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Navigation Satellite fix status for any Global Navigation Satellite System
    
    # Whether to output an augmented fix is determined by both the fix
    # type and the last time differential corrections were received.  A
    # fix is valid when status >= STATUS_FIX.
    
    int8 STATUS_NO_FIX =  -1        # unable to fix position
    int8 STATUS_FIX =      0        # unaugmented fix
    int8 STATUS_SBAS_FIX = 1        # with satellite-based augmentation
    int8 STATUS_GBAS_FIX = 2        # with ground-based augmentation
    
    int8 status
    
    # Bits defining which Global Navigation Satellite System signals were
    # used by the receiver.
    
    uint16 SERVICE_GPS =     1
    uint16 SERVICE_GLONASS = 2
    uint16 SERVICE_COMPASS = 4      # includes BeiDou.
    uint16 SERVICE_GALILEO = 8
    
    uint16 service
    
    `;
  }

};

// Constants for message
NavSatStatus.Constants = {
  STATUS_NO_FIX: -1,
  STATUS_FIX: 0,
  STATUS_SBAS_FIX: 1,
  STATUS_GBAS_FIX: 2,
  SERVICE_GPS: 1,
  SERVICE_GLONASS: 2,
  SERVICE_COMPASS: 4,
  SERVICE_GALILEO: 8,
}

module.exports = NavSatStatus;
