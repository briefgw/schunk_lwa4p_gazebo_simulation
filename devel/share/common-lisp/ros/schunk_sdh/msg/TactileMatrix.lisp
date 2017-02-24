; Auto-generated. Do not edit!


(cl:in-package schunk_sdh-msg)


;//! \htmlinclude TactileMatrix.msg.html

(cl:defclass <TactileMatrix> (roslisp-msg-protocol:ros-message)
  ((matrix_id
    :reader matrix_id
    :initarg :matrix_id
    :type cl:integer
    :initform 0)
   (cells_x
    :reader cells_x
    :initarg :cells_x
    :type cl:fixnum
    :initform 0)
   (cells_y
    :reader cells_y
    :initarg :cells_y
    :type cl:fixnum
    :initform 0)
   (tactile_array
    :reader tactile_array
    :initarg :tactile_array
    :type (cl:vector cl:fixnum)
   :initform (cl:make-array 0 :element-type 'cl:fixnum :initial-element 0)))
)

(cl:defclass TactileMatrix (<TactileMatrix>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <TactileMatrix>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'TactileMatrix)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name schunk_sdh-msg:<TactileMatrix> is deprecated: use schunk_sdh-msg:TactileMatrix instead.")))

(cl:ensure-generic-function 'matrix_id-val :lambda-list '(m))
(cl:defmethod matrix_id-val ((m <TactileMatrix>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:matrix_id-val is deprecated.  Use schunk_sdh-msg:matrix_id instead.")
  (matrix_id m))

(cl:ensure-generic-function 'cells_x-val :lambda-list '(m))
(cl:defmethod cells_x-val ((m <TactileMatrix>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:cells_x-val is deprecated.  Use schunk_sdh-msg:cells_x instead.")
  (cells_x m))

(cl:ensure-generic-function 'cells_y-val :lambda-list '(m))
(cl:defmethod cells_y-val ((m <TactileMatrix>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:cells_y-val is deprecated.  Use schunk_sdh-msg:cells_y instead.")
  (cells_y m))

(cl:ensure-generic-function 'tactile_array-val :lambda-list '(m))
(cl:defmethod tactile_array-val ((m <TactileMatrix>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader schunk_sdh-msg:tactile_array-val is deprecated.  Use schunk_sdh-msg:tactile_array instead.")
  (tactile_array m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <TactileMatrix>) ostream)
  "Serializes a message object of type '<TactileMatrix>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'matrix_id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'matrix_id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'matrix_id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'matrix_id)) ostream)
  (cl:let* ((signed (cl:slot-value msg 'cells_x)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'cells_y)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'tactile_array))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (cl:let* ((signed ele) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    ))
   (cl:slot-value msg 'tactile_array))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <TactileMatrix>) istream)
  "Deserializes a message object of type '<TactileMatrix>"
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'matrix_id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'matrix_id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'matrix_id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'matrix_id)) (cl:read-byte istream))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'cells_x) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'cells_y) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'tactile_array) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'tactile_array)))
    (cl:dotimes (i __ros_arr_len)
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:aref vals i) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536)))))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<TactileMatrix>)))
  "Returns string type for a message object of type '<TactileMatrix>"
  "schunk_sdh/TactileMatrix")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'TactileMatrix)))
  "Returns string type for a message object of type 'TactileMatrix"
  "schunk_sdh/TactileMatrix")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<TactileMatrix>)))
  "Returns md5sum for a message object of type '<TactileMatrix>"
  "ab718b6c1d4d719110707994d2e325e4")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'TactileMatrix)))
  "Returns md5sum for a message object of type 'TactileMatrix"
  "ab718b6c1d4d719110707994d2e325e4")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<TactileMatrix>)))
  "Returns full string definition for message of type '<TactileMatrix>"
  (cl:format cl:nil "uint32 matrix_id~%int16 cells_x~%int16 cells_y~%int16[] tactile_array~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'TactileMatrix)))
  "Returns full string definition for message of type 'TactileMatrix"
  (cl:format cl:nil "uint32 matrix_id~%int16 cells_x~%int16 cells_y~%int16[] tactile_array~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <TactileMatrix>))
  (cl:+ 0
     4
     2
     2
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'tactile_array) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 2)))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <TactileMatrix>))
  "Converts a ROS message object to a list"
  (cl:list 'TactileMatrix
    (cl:cons ':matrix_id (matrix_id msg))
    (cl:cons ':cells_x (cells_x msg))
    (cl:cons ':cells_y (cells_y msg))
    (cl:cons ':tactile_array (tactile_array msg))
))
