; Auto-generated. Do not edit!


(cl:in-package schunk_sdh-msg)


;//! \htmlinclude TactileSensor.msg.html

(cl:defclass <TactileSensor> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (tactile_matrix
    :reader tactile_matrix
    :initarg :tactile_matrix
    :type (cl:vector schunk_sdh-msg:TactileMatrix)
   :initform (cl:make-array 0 :element-type 'schunk_sdh-msg:TactileMatrix :initial-element (cl:make-instance 'schunk_sdh-msg:TactileMatrix))))
)

(cl:defclass TactileSensor (<TactileSensor>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <TactileSensor>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'TactileSensor)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_sdh-msg:<TactileSensor> is deprecated: use schunk_sdh-msg:TactileSensor instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <TactileSensor>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:header-val is deprecated.  Use schunk_sdh-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'tactile_matrix-val :lambda-list '(m))
(cl:defmethod tactile_matrix-val ((m <TactileSensor>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:tactile_matrix-val is deprecated.  Use schunk_sdh-msg:tactile_matrix instead.")
  (tactile_matrix m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <TactileSensor>) ostream)
  "Serializes a message object of type '<TactileSensor>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'tactile_matrix))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (roslisp-msg-protocol:serialize ele ostream))
   (cl:slot-value msg 'tactile_matrix))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <TactileSensor>) istream)
  "Deserializes a message object of type '<TactileSensor>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'tactile_matrix) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'tactile_matrix)))
    (cl:dotimes (i __ros_arr_len)
    (cl:setf (cl:aref vals i) (cl:make-instance 'schunk_sdh-msg:TactileMatrix))
  (roslisp-msg-protocol:deserialize (cl:aref vals i) istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<TactileSensor>)))
  "Returns string type for a message object of type '<TactileSensor>"
  "schunk_sdh/TactileSensor")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'TactileSensor)))
  "Returns string type for a message object of type 'TactileSensor"
  "schunk_sdh/TactileSensor")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<TactileSensor>)))
  "Returns md5sum for a message object of type '<TactileSensor>"
  "c6176a03c00cccf1b8efd3037de0d45d")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'TactileSensor)))
  "Returns md5sum for a message object of type 'TactileSensor"
  "c6176a03c00cccf1b8efd3037de0d45d")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<TactileSensor>)))
  "Returns full string definition for message of type '<TactileSensor>"
  (cl:format cl:nil "#tactile sensor data in 2D grid~%Header header~%schunk_sdh/TactileMatrix[] tactile_matrix~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: schunk_sdh/TactileMatrix~%uint32 matrix_id~%int16 cells_x~%int16 cells_y~%int16[] tactile_array~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'TactileSensor)))
  "Returns full string definition for message of type 'TactileSensor"
  (cl:format cl:nil "#tactile sensor data in 2D grid~%Header header~%schunk_sdh/TactileMatrix[] tactile_matrix~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: schunk_sdh/TactileMatrix~%uint32 matrix_id~%int16 cells_x~%int16 cells_y~%int16[] tactile_array~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <TactileSensor>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'tactile_matrix) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ (roslisp-msg-protocol:serialization-length ele))))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <TactileSensor>))
  "Converts a ROS message object to a list"
  (cl:list 'TactileSensor
    (cl:cons ':header (header msg))
    (cl:cons ':tactile_matrix (tactile_matrix msg))
))
