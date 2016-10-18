;; Auto-generated. Do not edit!


(when (boundp 'schunk_canopen_driver::HomeWithJointNames)
  (if (not (find-package "SCHUNK_CANOPEN_DRIVER"))
    (make-package "SCHUNK_CANOPEN_DRIVER"))
  (shadow 'HomeWithJointNames (find-package "SCHUNK_CANOPEN_DRIVER")))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMES")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMES"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMESREQUEST")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMESREQUEST"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMESRESPONSE")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHJOINTNAMESRESPONSE"))

(in-package "ROS")





(defclass schunk_canopen_driver::HomeWithJointNamesRequest
  :super ros::object
  :slots (_joint_names ))

(defmethod schunk_canopen_driver::HomeWithJointNamesRequest
  (:init
   (&key
    ((:joint_names __joint_names) (let (r) (dotimes (i 0) (push "" r)) r))
    )
   (send-super :init)
   (setq _joint_names __joint_names)
   self)
  (:joint_names
   (&optional __joint_names)
   (if __joint_names (setq _joint_names __joint_names)) _joint_names)
  (:serialization-length
   ()
   (+
    ;; string[] _joint_names
    (apply #'+ (mapcar #'(lambda (x) (+ 4 (length x))) _joint_names)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string[] _joint_names
     (write-long (length _joint_names) s)
     (dolist (elem _joint_names)
       (write-long (length elem) s) (princ elem s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string[] _joint_names
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _joint_names (make-list n))
     (dotimes (i n)
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setf (elt _joint_names i) (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
     ))
   ;;
   self)
  )

(defclass schunk_canopen_driver::HomeWithJointNamesResponse
  :super ros::object
  :slots (_success ))

(defmethod schunk_canopen_driver::HomeWithJointNamesResponse
  (:init
   (&key
    ((:success __success) nil)
    )
   (send-super :init)
   (setq _success __success)
   self)
  (:success
   (&optional __success)
   (if __success (setq _success __success)) _success)
  (:serialization-length
   ()
   (+
    ;; bool _success
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _success
       (if _success (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _success
     (setq _success (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass schunk_canopen_driver::HomeWithJointNames
  :super ros::object
  :slots ())

(setf (get schunk_canopen_driver::HomeWithJointNames :md5sum-) "abb91c83ed030d595b2e5754d356a7f3")
(setf (get schunk_canopen_driver::HomeWithJointNames :datatype-) "schunk_canopen_driver/HomeWithJointNames")
(setf (get schunk_canopen_driver::HomeWithJointNames :request) schunk_canopen_driver::HomeWithJointNamesRequest)
(setf (get schunk_canopen_driver::HomeWithJointNames :response) schunk_canopen_driver::HomeWithJointNamesResponse)

(defmethod schunk_canopen_driver::HomeWithJointNamesRequest
  (:response () (instance schunk_canopen_driver::HomeWithJointNamesResponse :init)))

(setf (get schunk_canopen_driver::HomeWithJointNamesRequest :md5sum-) "abb91c83ed030d595b2e5754d356a7f3")
(setf (get schunk_canopen_driver::HomeWithJointNamesRequest :datatype-) "schunk_canopen_driver/HomeWithJointNamesRequest")
(setf (get schunk_canopen_driver::HomeWithJointNamesRequest :definition-)
      "
string[] joint_names
---
bool success

")

(setf (get schunk_canopen_driver::HomeWithJointNamesResponse :md5sum-) "abb91c83ed030d595b2e5754d356a7f3")
(setf (get schunk_canopen_driver::HomeWithJointNamesResponse :datatype-) "schunk_canopen_driver/HomeWithJointNamesResponse")
(setf (get schunk_canopen_driver::HomeWithJointNamesResponse :definition-)
      "
string[] joint_names
---
bool success

")



(provide :schunk_canopen_driver/HomeWithJointNames "abb91c83ed030d595b2e5754d356a7f3")


