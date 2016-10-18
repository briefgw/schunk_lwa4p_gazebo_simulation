; Auto-generated. Do not edit!


(cl:in-package schunk_canopen_driver-srv)


;//! \htmlinclude HomeAll-request.msg.html

(cl:defclass <HomeAll-request> (roslisp-msg-protocol:ros-message)
  ()
)

(cl:defclass HomeAll-request (<HomeAll-request>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeAll-request>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeAll-request)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeAll-request> is deprecated: use schunk_canopen_driver-srv:HomeAll-request instead.")))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeAll-request>) ostream)
  "Serializes a message object of type '<HomeAll-request>"
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeAll-request>) istream)
  "Deserializes a message object of type '<HomeAll-request>"
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeAll-request>)))
  "Returns string type for a service object of type '<HomeAll-request>"
  "schunk_canopen_driver/HomeAllRequest")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeAll-request)))
  "Returns string type for a service object of type 'HomeAll-request"
  "schunk_canopen_driver/HomeAllRequest")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeAll-request>)))
  "Returns md5sum for a message object of type '<HomeAll-request>"
  "358e233cde0c8a8bcfea4ce193f8fc15")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeAll-request)))
  "Returns md5sum for a message object of type 'HomeAll-request"
  "358e233cde0c8a8bcfea4ce193f8fc15")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeAll-request>)))
  "Returns full string definition for message of type '<HomeAll-request>"
  (cl:format cl:nil "~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeAll-request)))
  "Returns full string definition for message of type 'HomeAll-request"
  (cl:format cl:nil "~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeAll-request>))
  (cl:+ 0
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeAll-request>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeAll-request
))
;//! \htmlinclude HomeAll-response.msg.html

(cl:defclass <HomeAll-response> (roslisp-msg-protocol:ros-message)
  ((success
    :reader success
    :initarg :success
    :type cl:boolean
    :initform cl:nil))
)

(cl:defclass HomeAll-response (<HomeAll-response>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <HomeAll-response>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'HomeAll-response)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_canopen_driver-srv:<HomeAll-response> is deprecated: use schunk_canopen_driver-srv:HomeAll-response instead.")))

(cl:ensure-generic-function 'success-val :lambda-list '(m))
(cl:defmethod success-val ((m <HomeAll-response>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_canopen_driver-srv:success-val is deprecated.  Use schunk_canopen_driver-srv:success instead.")
  (success m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <HomeAll-response>) ostream)
  "Serializes a message object of type '<HomeAll-response>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'success) 1 0)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <HomeAll-response>) istream)
  "Deserializes a message object of type '<HomeAll-response>"
    (cl:setf (cl:slot-value msg 'success) (cl:not (cl:zerop (cl:read-byte istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<HomeAll-response>)))
  "Returns string type for a service object of type '<HomeAll-response>"
  "schunk_canopen_driver/HomeAllResponse")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeAll-response)))
  "Returns string type for a service object of type 'HomeAll-response"
  "schunk_canopen_driver/HomeAllResponse")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<HomeAll-response>)))
  "Returns md5sum for a message object of type '<HomeAll-response>"
  "358e233cde0c8a8bcfea4ce193f8fc15")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'HomeAll-response)))
  "Returns md5sum for a message object of type 'HomeAll-response"
  "358e233cde0c8a8bcfea4ce193f8fc15")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<HomeAll-response>)))
  "Returns full string definition for message of type '<HomeAll-response>"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'HomeAll-response)))
  "Returns full string definition for message of type 'HomeAll-response"
  (cl:format cl:nil "bool success~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <HomeAll-response>))
  (cl:+ 0
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <HomeAll-response>))
  "Converts a ROS message object to a list"
  (cl:list 'HomeAll-response
    (cl:cons ':success (success msg))
))
(cl:defmethod roslisp-msg-protocol:service-request-type ((msg (cl:eql 'HomeAll)))
  'HomeAll-request)
(cl:defmethod roslisp-msg-protocol:service-response-type ((msg (cl:eql 'HomeAll)))
  'HomeAll-response)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'HomeAll)))
  "Returns string type for a service object of type '<HomeAll>"
  "schunk_canopen_driver/HomeAll")