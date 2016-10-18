; Auto-generated. Do not edit!


(cl:in-package schunk_canopen_driver-srv)


;//! \htmlinclude HomeWithIDs-request.msg.html

(cl:defclass <HomeWithIDs-request> (roslisp-msg-protocol:ros-message)
  ((node_ids
    :reader node_ids
    :initarg :node_ids
    :type (cl:vector cl:fixnum)
   :initform (cl:make-array 0 :element-type 'cl:fixnum :initial-element 0)))
)

(cl:defclass HomeWithIDs-request (<HomeWithIDs-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeWithIDs-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeWithIDs-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeWithIDs-request> is deprecated: use schunk_canopen_driver-srv:HomeWithIDs-request instead.")))

(cl:ensure-generic-function 'node_ids-val :lambda-list '(m))
(cl:defmethod node_ids-val ((m <HomeWithIDs-request>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_canopen_driver-srv:node_ids-val is deprecated.  Use schunk_canopen_driver-srv:node_ids instead.")
  (node_ids m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeWithIDs-request>) ostream)
  "Serializes a message object of type '<HomeWithIDs-request>"
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'node_ids))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (cl:write-byte (cl:ldb (cl:byte 8 0) ele) ostream))
   (cl:slot-value msg 'node_ids))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeWithIDs-request>) istream)
  "Deserializes a message object of type '<HomeWithIDs-request>"
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'node_ids) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'node_ids)))
    (cl:dotimes (i __ros_arr_len)
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:aref vals i)) (cl:read-byte istream)))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeWithIDs-request>)))
  "Returns string type for a service object of type '<HomeWithIDs-request>"
  "schunk_canopen_driver/HomeWithIDsRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithIDs-request)))
  "Returns string type for a service object of type 'HomeWithIDs-request"
  "schunk_canopen_driver/HomeWithIDsRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeWithIDs-request>)))
  "Returns md5sum for a message object of type '<HomeWithIDs-request>"
  "e91ddea331fe5e8410e22caf0f3b5ddb")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeWithIDs-request)))
  "Returns md5sum for a message object of type 'HomeWithIDs-request"
  "e91ddea331fe5e8410e22caf0f3b5ddb")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeWithIDs-request>)))
  "Returns full string definition for message of type '<HomeWithIDs-request>"
  (cl:format cl:nil "~%uint8[] node_ids~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeWithIDs-request)))
  "Returns full string definition for message of type 'HomeWithIDs-request"
  (cl:format cl:nil "~%uint8[] node_ids~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeWithIDs-request>))
  (cl:+ 0
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'node_ids) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 1)))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeWithIDs-request>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeWithIDs-request
    (cl:cons ':node_ids (node_ids msg))
))
;//! \htmlinclude HomeWithIDs-response.msg.html

(cl:defclass <HomeWithIDs-response> (roslisp-msg-protocol:ros-message)
  ((success
    :reader success
    :initarg :success
    :type cl:boolean
    :initform cl:nil))
)

(cl:defclass HomeWithIDs-response (<HomeWithIDs-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeWithIDs-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeWithIDs-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeWithIDs-response> is deprecated: use schunk_canopen_driver-srv:HomeWithIDs-response instead.")))

(cl:ensure-generic-function 'success-val :lambda-list '(m))
(cl:defmethod success-val ((m <HomeWithIDs-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_canopen_driver-srv:success-val is deprecated.  Use schunk_canopen_driver-srv:success instead.")
  (success m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeWithIDs-response>) ostream)
  "Serializes a message object of type '<HomeWithIDs-response>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'success) 1 0)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeWithIDs-response>) istream)
  "Deserializes a message object of type '<HomeWithIDs-response>"
    (cl:setf (cl:slot-value msg 'success) (cl:not (cl:zerop (cl:read-byte istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeWithIDs-response>)))
  "Returns string type for a service object of type '<HomeWithIDs-response>"
  "schunk_canopen_driver/HomeWithIDsResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithIDs-response)))
  "Returns string type for a service object of type 'HomeWithIDs-response"
  "schunk_canopen_driver/HomeWithIDsResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeWithIDs-response>)))
  "Returns md5sum for a message object of type '<HomeWithIDs-response>"
  "e91ddea331fe5e8410e22caf0f3b5ddb")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeWithIDs-response)))
  "Returns md5sum for a message object of type 'HomeWithIDs-response"
  "e91ddea331fe5e8410e22caf0f3b5ddb")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeWithIDs-response>)))
  "Returns full string definition for message of type '<HomeWithIDs-response>"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeWithIDs-response)))
  "Returns full string definition for message of type 'HomeWithIDs-response"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeWithIDs-response>))
  (cl:+ 0
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeWithIDs-response>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeWithIDs-response
    (cl:cons ':success (success msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'HomeWithIDs)))
  'HomeWithIDs-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'HomeWithIDs)))
  'HomeWithIDs-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeWithIDs)))
  "Returns string type for a service object of type '<HomeWithIDs>"
  "schunk_canopen_driver/HomeWithIDs")