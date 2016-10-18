; Auto-generated. Do not edit!


(cl:in-package schunk_canopen_driver-srv)


;//! \htmlinclude HomeWithJointNames-request.msg.html

(cl:defclass <HomeWithJointNames-request> (roslisp-msg-protocol:ros-message)
  ((joint_names
    :reader joint_names
    :initarg :joint_names
    :type (cl:vector cl:string)
   :initform (cl:make-array 0 :element-type 'cl:string :initial-element "")))
)

(cl:defclass HomeWithJointNames-request (<HomeWithJointNames-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeWithJointNames-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeWithJointNames-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeWithJointNames-request> is deprecated: use schunk_canopen_driver-srv:HomeWithJointNames-request instead.")))

(cl:ensure-generic-function 'joint_names-val :lambda-list '(m))
(cl:defmethod joint_names-val ((m <HomeWithJointNames-request>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_canopen_driver-srv:joint_names-val is deprecated.  Use schunk_canopen_driver-srv:joint_names instead.")
  (joint_names m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeWithJointNames-request>) ostream)
  "Serializes a message object of type '<HomeWithJointNames-request>"
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'joint_names))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (cl:let ((__ros_str_len (cl:length ele)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_str_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_str_len) ostream))
  (cl:map cl:nil #'(cl:lambda (c) (cl:write-byte (cl:char-code c) ostream)) ele))
   (cl:slot-value msg 'joint_names))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeWithJointNames-request>) istream)
  "Deserializes a message object of type '<HomeWithJointNames-request>"
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'joint_names) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'joint_names)))
    (cl:dotimes (i __ros_arr_len)
    (cl:let ((__ros_str_len 0))
      (cl:setf (cl:ldb (cl:byte 8 0) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) __ros_str_len) (cl:read-byte istream))
      (cl:setf (cl:aref vals i) (cl:make-string __ros_str_len))
      (cl:dotimes (__ros_str_idx __ros_str_len msg)
        (cl:setf (cl:char (cl:aref vals i) __ros_str_idx) (cl:code-char (cl:read-byte istream))))))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeWithJointNames-request>)))
  "Returns string type for a service object of type '<HomeWithJointNames-request>"
  "schunk_canopen_driver/HomeWithJointNamesRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithJointNames-request)))
  "Returns string type for a service object of type 'HomeWithJointNames-request"
  "schunk_canopen_driver/HomeWithJointNamesRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeWithJointNames-request>)))
  "Returns md5sum for a message object of type '<HomeWithJointNames-request>"
  "abb91c83ed030d595b2e5754d356a7f3")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeWithJointNames-request)))
  "Returns md5sum for a message object of type 'HomeWithJointNames-request"
  "abb91c83ed030d595b2e5754d356a7f3")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeWithJointNames-request>)))
  "Returns full string definition for message of type '<HomeWithJointNames-request>"
  (cl:format cl:nil "~%string[] joint_names~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeWithJointNames-request)))
  "Returns full string definition for message of type 'HomeWithJointNames-request"
  (cl:format cl:nil "~%string[] joint_names~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeWithJointNames-request>))
  (cl:+ 0
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'joint_names) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 4 (cl:length ele))))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeWithJointNames-request>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeWithJointNames-request
    (cl:cons ':joint_names (joint_names msg))
))
;//! \htmlinclude HomeWithJointNames-response.msg.html

(cl:defclass <HomeWithJointNames-response> (roslisp-msg-protocol:ros-message)
  ((success
    :reader success
    :initarg :success
    :type cl:boolean
    :initform cl:nil))
)

(cl:defclass HomeWithJointNames-response (<HomeWithJointNames-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeWithJointNames-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeWithJointNames-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeWithJointNames-response> is deprecated: use schunk_canopen_driver-srv:HomeWithJointNames-response instead.")))

(cl:ensure-generic-function 'success-val :lambda-list '(m))
(cl:defmethod success-val ((m <HomeWithJointNames-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_canopen_driver-srv:success-val is deprecated.  Use schunk_canopen_driver-srv:success instead.")
  (success m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeWithJointNames-response>) ostream)
  "Serializes a message object of type '<HomeWithJointNames-response>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'success) 1 0)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeWithJointNames-response>) istream)
  "Deserializes a message object of type '<HomeWithJointNames-response>"
    (cl:setf (cl:slot-value msg 'success) (cl:not (cl:zerop (cl:read-byte istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeWithJointNames-response>)))
  "Returns string type for a service object of type '<HomeWithJointNames-response>"
  "schunk_canopen_driver/HomeWithJointNamesResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithJointNames-response)))
  "Returns string type for a service object of type 'HomeWithJointNames-response"
  "schunk_canopen_driver/HomeWithJointNamesResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeWithJointNames-response>)))
  "Returns md5sum for a message object of type '<HomeWithJointNames-response>"
  "abb91c83ed030d595b2e5754d356a7f3")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeWithJointNames-response)))
  "Returns md5sum for a message object of type 'HomeWithJointNames-response"
  "abb91c83ed030d595b2e5754d356a7f3")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeWithJointNames-response>)))
  "Returns full string definition for message of type '<HomeWithJointNames-response>"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeWithJointNames-response)))
  "Returns full string definition for message of type 'HomeWithJointNames-response"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeWithJointNames-response>))
  (cl:+ 0
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeWithJointNames-response>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeWithJointNames-response
    (cl:cons ':success (success msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'HomeWithJointNames)))
  'HomeWithJointNames-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'HomeWithJointNames)))
  'HomeWithJointNames-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithJointNames)))
  "Returns string type for a service object of type '<HomeWithJointNames>"
  "schunk_canopen_driver/HomeWithJointNames")