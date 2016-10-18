// Auto-generated. Do not edit!

// (in-package actionlib_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GoalID = require('./GoalID.js');

//-----------------------------------------------------------

class GoalStatus {
  constructor() {
    this.goal_id = new GoalID();
    this.status = 0;
    this.text = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GoalStatus
    // Serialize message field [goal_id]
    bufferInfo = GoalID.serialize(obj.goal_id, bufferInfo);
    // Serialize message field [status]
    bufferInfo = _serializer.uint8(obj.status, bufferInfo);
    // Serialize message field [text]
    bufferInfo = _serializer.string(obj.text, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GoalStatus
    let tmp;
    let len;
    let data = new GoalStatus();
    // Deserialize message field [goal_id]
    tmp = GoalID.deserialize(buffer);
    data.goal_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [status]
    tmp = _deserializer.uint8(buffer);
    data.status = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [text]
    tmp = _deserializer.string(buffer);
    data.text = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'actionlib_msgs/GoalStatus';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd388f9b87b3c471f784434d671988d4a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    GoalID goal_id
    uint8 status
    uint8 PENDING         = 0   # The goal has yet to be processed by the action server
    uint8 ACTIVE          = 1   # The goal is currently being processed by the action server
    uint8 PREEMPTED       = 2   # The goal received a cancel request after it started executing
                                #   and has since completed its execution (Terminal State)
    uint8 SUCCEEDED       = 3   # The goal was achieved successfully by the action server (Terminal State)
    uint8 ABORTED         = 4   # The goal was aborted during execution by the action server due
                                #    to some failure (Terminal State)
    uint8 REJECTED        = 5   # The goal was rejected by the action server without being processed,
                                #    because the goal was unattainable or invalid (Terminal State)
    uint8 PREEMPTING      = 6   # The goal received a cancel request after it started executing
                                #    and has not yet completed execution
    uint8 RECALLING       = 7   # The goal received a cancel request before it started executing,
                                #    but the action server has not yet confirmed that the goal is canceled
    uint8 RECALLED        = 8   # The goal received a cancel request before it started executing
                                #    and was successfully cancelled (Terminal State)
    uint8 LOST            = 9   # An action client can determine that a goal is LOST. This should not be
                                #    sent over the wire by an action server
    
    #Allow for the user to associate a string with GoalStatus for debugging
    string text
    
    
    ================================================================================
    MSG: actionlib_msgs/GoalID
    # The stamp should store the time at which this goal was requested.
    # It is used by an action server when it tries to preempt all
    # goals that were requested before a certain time
    time stamp
    
    # The id provides a way to associate feedback and
    # result message with specific goal requests. The id
    # specified must be unique.
    string id
    
    
    `;
  }

};

// Constants for message
GoalStatus.Constants = {
  PENDING: 0,
  ACTIVE: 1,
  PREEMPTED: 2,
  SUCCEEDED: 3,
  ABORTED: 4,
  REJECTED: 5,
  PREEMPTING: 6,
  RECALLING: 7,
  RECALLED: 8,
  LOST: 9,
}

module.exports = GoalStatus;
