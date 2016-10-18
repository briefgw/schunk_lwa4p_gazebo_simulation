// Auto-generated. Do not edit!

// (in-package rosgraph_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class TopicStatistics {
  constructor() {
    this.topic = '';
    this.node_pub = '';
    this.node_sub = '';
    this.window_start = {secs: 0, nsecs: 0};
    this.window_stop = {secs: 0, nsecs: 0};
    this.delivered_msgs = 0;
    this.dropped_msgs = 0;
    this.traffic = 0;
    this.period_mean = {secs: 0, nsecs: 0};
    this.period_stddev = {secs: 0, nsecs: 0};
    this.period_max = {secs: 0, nsecs: 0};
    this.stamp_age_mean = {secs: 0, nsecs: 0};
    this.stamp_age_stddev = {secs: 0, nsecs: 0};
    this.stamp_age_max = {secs: 0, nsecs: 0};
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type TopicStatistics
    // Serialize message field [topic]
    bufferInfo = _serializer.string(obj.topic, bufferInfo);
    // Serialize message field [node_pub]
    bufferInfo = _serializer.string(obj.node_pub, bufferInfo);
    // Serialize message field [node_sub]
    bufferInfo = _serializer.string(obj.node_sub, bufferInfo);
    // Serialize message field [window_start]
    bufferInfo = _serializer.time(obj.window_start, bufferInfo);
    // Serialize message field [window_stop]
    bufferInfo = _serializer.time(obj.window_stop, bufferInfo);
    // Serialize message field [delivered_msgs]
    bufferInfo = _serializer.int32(obj.delivered_msgs, bufferInfo);
    // Serialize message field [dropped_msgs]
    bufferInfo = _serializer.int32(obj.dropped_msgs, bufferInfo);
    // Serialize message field [traffic]
    bufferInfo = _serializer.int32(obj.traffic, bufferInfo);
    // Serialize message field [period_mean]
    bufferInfo = _serializer.duration(obj.period_mean, bufferInfo);
    // Serialize message field [period_stddev]
    bufferInfo = _serializer.duration(obj.period_stddev, bufferInfo);
    // Serialize message field [period_max]
    bufferInfo = _serializer.duration(obj.period_max, bufferInfo);
    // Serialize message field [stamp_age_mean]
    bufferInfo = _serializer.duration(obj.stamp_age_mean, bufferInfo);
    // Serialize message field [stamp_age_stddev]
    bufferInfo = _serializer.duration(obj.stamp_age_stddev, bufferInfo);
    // Serialize message field [stamp_age_max]
    bufferInfo = _serializer.duration(obj.stamp_age_max, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type TopicStatistics
    let tmp;
    let len;
    let data = new TopicStatistics();
    // Deserialize message field [topic]
    tmp = _deserializer.string(buffer);
    data.topic = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [node_pub]
    tmp = _deserializer.string(buffer);
    data.node_pub = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [node_sub]
    tmp = _deserializer.string(buffer);
    data.node_sub = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [window_start]
    tmp = _deserializer.time(buffer);
    data.window_start = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [window_stop]
    tmp = _deserializer.time(buffer);
    data.window_stop = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [delivered_msgs]
    tmp = _deserializer.int32(buffer);
    data.delivered_msgs = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dropped_msgs]
    tmp = _deserializer.int32(buffer);
    data.dropped_msgs = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [traffic]
    tmp = _deserializer.int32(buffer);
    data.traffic = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [period_mean]
    tmp = _deserializer.duration(buffer);
    data.period_mean = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [period_stddev]
    tmp = _deserializer.duration(buffer);
    data.period_stddev = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [period_max]
    tmp = _deserializer.duration(buffer);
    data.period_max = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp_age_mean]
    tmp = _deserializer.duration(buffer);
    data.stamp_age_mean = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp_age_stddev]
    tmp = _deserializer.duration(buffer);
    data.stamp_age_stddev = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [stamp_age_max]
    tmp = _deserializer.duration(buffer);
    data.stamp_age_max = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'rosgraph_msgs/TopicStatistics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '10152ed868c5097a5e2e4a89d7daa710';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # name of the topic
    string topic
    
    # node id of the publisher
    string node_pub
    
    # node id of the subscriber
    string node_sub
    
    # the statistics apply to this time window
    time window_start
    time window_stop
    
    # number of messages delivered during the window
    int32 delivered_msgs
    # numbers of messages dropped during the window
    int32 dropped_msgs
    
    # traffic during the window, in bytes
    int32 traffic
    
    # mean/stddev/max period between two messages
    duration period_mean
    duration period_stddev
    duration period_max
    
    # mean/stddev/max age of the message based on the
    # timestamp in the message header. In case the
    # message does not have a header, it will be 0.
    duration stamp_age_mean
    duration stamp_age_stddev
    duration stamp_age_max
    
    `;
  }

};

module.exports = TopicStatistics;
