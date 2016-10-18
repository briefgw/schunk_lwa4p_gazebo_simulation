// Auto-generated. Do not edit!

// (in-package visualization_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MenuEntry {
  constructor() {
    this.id = 0;
    this.parent_id = 0;
    this.title = '';
    this.command = '';
    this.command_type = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MenuEntry
    // Serialize message field [id]
    bufferInfo = _serializer.uint32(obj.id, bufferInfo);
    // Serialize message field [parent_id]
    bufferInfo = _serializer.uint32(obj.parent_id, bufferInfo);
    // Serialize message field [title]
    bufferInfo = _serializer.string(obj.title, bufferInfo);
    // Serialize message field [command]
    bufferInfo = _serializer.string(obj.command, bufferInfo);
    // Serialize message field [command_type]
    bufferInfo = _serializer.uint8(obj.command_type, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MenuEntry
    let tmp;
    let len;
    let data = new MenuEntry();
    // Deserialize message field [id]
    tmp = _deserializer.uint32(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [parent_id]
    tmp = _deserializer.uint32(buffer);
    data.parent_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [title]
    tmp = _deserializer.string(buffer);
    data.title = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [command]
    tmp = _deserializer.string(buffer);
    data.command = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [command_type]
    tmp = _deserializer.uint8(buffer);
    data.command_type = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'visualization_msgs/MenuEntry';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b90ec63024573de83b57aa93eb39be2d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # MenuEntry message.
    
    # Each InteractiveMarker message has an array of MenuEntry messages.
    # A collection of MenuEntries together describe a
    # menu/submenu/subsubmenu/etc tree, though they are stored in a flat
    # array.  The tree structure is represented by giving each menu entry
    # an ID number and a "parent_id" field.  Top-level entries are the
    # ones with parent_id = 0.  Menu entries are ordered within their
    # level the same way they are ordered in the containing array.  Parent
    # entries must appear before their children.
    
    # Example:
    # - id = 3
    #   parent_id = 0
    #   title = "fun"
    # - id = 2
    #   parent_id = 0
    #   title = "robot"
    # - id = 4
    #   parent_id = 2
    #   title = "pr2"
    # - id = 5
    #   parent_id = 2
    #   title = "turtle"
    #
    # Gives a menu tree like this:
    #  - fun
    #  - robot
    #    - pr2
    #    - turtle
    
    # ID is a number for each menu entry.  Must be unique within the
    # control, and should never be 0.
    uint32 id
    
    # ID of the parent of this menu entry, if it is a submenu.  If this
    # menu entry is a top-level entry, set parent_id to 0.
    uint32 parent_id
    
    # menu / entry title
    string title
    
    # Arguments to command indicated by command_type (below)
    string command
    
    # Command_type stores the type of response desired when this menu
    # entry is clicked.
    # FEEDBACK: send an InteractiveMarkerFeedback message with menu_entry_id set to this entry's id.
    # ROSRUN: execute "rosrun" with arguments given in the command field (above).
    # ROSLAUNCH: execute "roslaunch" with arguments given in the command field (above).
    uint8 FEEDBACK=0
    uint8 ROSRUN=1
    uint8 ROSLAUNCH=2
    uint8 command_type
    
    `;
  }

};

// Constants for message
MenuEntry.Constants = {
  FEEDBACK: 0,
  ROSRUN: 1,
  ROSLAUNCH: 2,
}

module.exports = MenuEntry;
