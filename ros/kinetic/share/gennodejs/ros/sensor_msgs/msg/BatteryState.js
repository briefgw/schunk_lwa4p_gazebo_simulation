// Auto-generated. Do not edit!

// (in-package sensor_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class BatteryState {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.voltage = 0.0;
    this.current = 0.0;
    this.charge = 0.0;
    this.capacity = 0.0;
    this.design_capacity = 0.0;
    this.percentage = 0.0;
    this.power_supply_status = 0;
    this.power_supply_health = 0;
    this.power_supply_technology = 0;
    this.present = false;
    this.cell_voltage = [];
    this.location = '';
    this.serial_number = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BatteryState
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [voltage]
    bufferInfo = _serializer.float32(obj.voltage, bufferInfo);
    // Serialize message field [current]
    bufferInfo = _serializer.float32(obj.current, bufferInfo);
    // Serialize message field [charge]
    bufferInfo = _serializer.float32(obj.charge, bufferInfo);
    // Serialize message field [capacity]
    bufferInfo = _serializer.float32(obj.capacity, bufferInfo);
    // Serialize message field [design_capacity]
    bufferInfo = _serializer.float32(obj.design_capacity, bufferInfo);
    // Serialize message field [percentage]
    bufferInfo = _serializer.float32(obj.percentage, bufferInfo);
    // Serialize message field [power_supply_status]
    bufferInfo = _serializer.uint8(obj.power_supply_status, bufferInfo);
    // Serialize message field [power_supply_health]
    bufferInfo = _serializer.uint8(obj.power_supply_health, bufferInfo);
    // Serialize message field [power_supply_technology]
    bufferInfo = _serializer.uint8(obj.power_supply_technology, bufferInfo);
    // Serialize message field [present]
    bufferInfo = _serializer.bool(obj.present, bufferInfo);
    // Serialize the length for message field [cell_voltage]
    bufferInfo = _serializer.uint32(obj.cell_voltage.length, bufferInfo);
    // Serialize message field [cell_voltage]
    obj.cell_voltage.forEach((val) => {
      bufferInfo = _serializer.float32(val, bufferInfo);
    });
    // Serialize message field [location]
    bufferInfo = _serializer.string(obj.location, bufferInfo);
    // Serialize message field [serial_number]
    bufferInfo = _serializer.string(obj.serial_number, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BatteryState
    let tmp;
    let len;
    let data = new BatteryState();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [voltage]
    tmp = _deserializer.float32(buffer);
    data.voltage = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [current]
    tmp = _deserializer.float32(buffer);
    data.current = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [charge]
    tmp = _deserializer.float32(buffer);
    data.charge = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [capacity]
    tmp = _deserializer.float32(buffer);
    data.capacity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [design_capacity]
    tmp = _deserializer.float32(buffer);
    data.design_capacity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [percentage]
    tmp = _deserializer.float32(buffer);
    data.percentage = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [power_supply_status]
    tmp = _deserializer.uint8(buffer);
    data.power_supply_status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [power_supply_health]
    tmp = _deserializer.uint8(buffer);
    data.power_supply_health = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [power_supply_technology]
    tmp = _deserializer.uint8(buffer);
    data.power_supply_technology = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [present]
    tmp = _deserializer.bool(buffer);
    data.present = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [cell_voltage]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cell_voltage]
    data.cell_voltage = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float32(buffer);
      data.cell_voltage[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [location]
    tmp = _deserializer.string(buffer);
    data.location = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [serial_number]
    tmp = _deserializer.string(buffer);
    data.serial_number = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'sensor_msgs/BatteryState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '476f837fa6771f6e16e3bf4ef96f8770';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    # Constants are chosen to match the enums in the linux kernel
    # defined in include/linux/power_supply.h as of version 3.7
    # The one difference is for style reasons the constants are
    # all uppercase not mixed case.
    
    # Power supply status constants
    uint8 POWER_SUPPLY_STATUS_UNKNOWN = 0
    uint8 POWER_SUPPLY_STATUS_CHARGING = 1
    uint8 POWER_SUPPLY_STATUS_DISCHARGING = 2
    uint8 POWER_SUPPLY_STATUS_NOT_CHARGING = 3
    uint8 POWER_SUPPLY_STATUS_FULL = 4
    
    # Power supply health constants
    uint8 POWER_SUPPLY_HEALTH_UNKNOWN = 0
    uint8 POWER_SUPPLY_HEALTH_GOOD = 1
    uint8 POWER_SUPPLY_HEALTH_OVERHEAT = 2
    uint8 POWER_SUPPLY_HEALTH_DEAD = 3
    uint8 POWER_SUPPLY_HEALTH_OVERVOLTAGE = 4
    uint8 POWER_SUPPLY_HEALTH_UNSPEC_FAILURE = 5
    uint8 POWER_SUPPLY_HEALTH_COLD = 6
    uint8 POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE = 7
    uint8 POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE = 8
    
    # Power supply technology (chemistry) constants
    uint8 POWER_SUPPLY_TECHNOLOGY_UNKNOWN = 0
    uint8 POWER_SUPPLY_TECHNOLOGY_NIMH = 1
    uint8 POWER_SUPPLY_TECHNOLOGY_LION = 2
    uint8 POWER_SUPPLY_TECHNOLOGY_LIPO = 3
    uint8 POWER_SUPPLY_TECHNOLOGY_LIFE = 4
    uint8 POWER_SUPPLY_TECHNOLOGY_NICD = 5
    uint8 POWER_SUPPLY_TECHNOLOGY_LIMN = 6
    
    Header  header
    float32 voltage          # Voltage in Volts (Mandatory)
    float32 current          # Negative when discharging (A)  (If unmeasured NaN)
    float32 charge           # Current charge in Ah  (If unmeasured NaN)
    float32 capacity         # Capacity in Ah (last full capacity)  (If unmeasured NaN)
    float32 design_capacity  # Capacity in Ah (design capacity)  (If unmeasured NaN)
    float32 percentage       # Charge percentage on 0 to 1 range  (If unmeasured NaN)
    uint8   power_supply_status     # The charging status as reported. Values defined above
    uint8   power_supply_health     # The battery health metric. Values defined above
    uint8   power_supply_technology # The battery chemistry. Values defined above
    bool    present          # True if the battery is present
    
    float32[] cell_voltage   # An array of individual cell voltages for each cell in the pack
                             # If individual voltages unknown but number of cells known set each to NaN
    string location          # The location into which the battery is inserted. (slot number or plug)
    string serial_number     # The best approximation of the battery serial number
    
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

// Constants for message
BatteryState.Constants = {
  POWER_SUPPLY_STATUS_UNKNOWN: 0,
  POWER_SUPPLY_STATUS_CHARGING: 1,
  POWER_SUPPLY_STATUS_DISCHARGING: 2,
  POWER_SUPPLY_STATUS_NOT_CHARGING: 3,
  POWER_SUPPLY_STATUS_FULL: 4,
  POWER_SUPPLY_HEALTH_UNKNOWN: 0,
  POWER_SUPPLY_HEALTH_GOOD: 1,
  POWER_SUPPLY_HEALTH_OVERHEAT: 2,
  POWER_SUPPLY_HEALTH_DEAD: 3,
  POWER_SUPPLY_HEALTH_OVERVOLTAGE: 4,
  POWER_SUPPLY_HEALTH_UNSPEC_FAILURE: 5,
  POWER_SUPPLY_HEALTH_COLD: 6,
  POWER_SUPPLY_HEALTH_WATCHDOG_TIMER_EXPIRE: 7,
  POWER_SUPPLY_HEALTH_SAFETY_TIMER_EXPIRE: 8,
  POWER_SUPPLY_TECHNOLOGY_UNKNOWN: 0,
  POWER_SUPPLY_TECHNOLOGY_NIMH: 1,
  POWER_SUPPLY_TECHNOLOGY_LION: 2,
  POWER_SUPPLY_TECHNOLOGY_LIPO: 3,
  POWER_SUPPLY_TECHNOLOGY_LIFE: 4,
  POWER_SUPPLY_TECHNOLOGY_NICD: 5,
  POWER_SUPPLY_TECHNOLOGY_LIMN: 6,
}

module.exports = BatteryState;
