;; Auto-generated. Do not edit!


(when (boundp 'schunk_canopen_driver::HomeAll)
  (if (not (find-package "SCHUNK_CANOPEN_DRIVER"))
    (make-package "SCHUNK_CANOPEN_DRIVER"))
  (shadow 'HomeAll (find-package "SCHUNK_CANOPEN_DRIVER")))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEALL")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEALL"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEALLREQUEST")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEALLREQUEST"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEALLRESPONSE")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEALLRESPONSE"))

(in-package "ROS")





(defclass schunk_canopen_driver::HomeAllRequest
  :super ros::object
  :slots ())

(defmethod schunk_canopen_driver::HomeAllRequest
  (:init
   (&key
    )
   (send-super :init)
   self)
  (:serialization-length
   ()
   (+
    0
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;;
   self)
  )

(defclass schunk_canopen_driver::HomeAllResponse
  :super ros::object
  :slots (_success ))

(defmethod schunk_canopen_driver::HomeAllResponse
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

(defclass schunk_canopen_driver::HomeAll
  :super ros::object
  :slots ())

(setf (get schunk_canopen_driver::HomeAll :md5sum-) "358e233cde0c8a8bcfea4ce193f8fc15")
(setf (get schunk_canopen_driver::HomeAll :datatype-) "schunk_canopen_driver/HomeAll")
(setf (get schunk_canopen_driver::HomeAll :request) schunk_canopen_driver::HomeAllRequest)
(setf (get schunk_canopen_driver::HomeAll :response) schunk_canopen_driver::HomeAllResponse)

(defmethod schunk_canopen_driver::HomeAllRequest
  (:response () (instance schunk_canopen_driver::HomeAllResponse :init)))

(setf (get schunk_canopen_driver::HomeAllRequest :md5sum-) "358e233cde0c8a8bcfea4ce193f8fc15")
(setf (get schunk_canopen_driver::HomeAllRequest :datatype-) "schunk_canopen_driver/HomeAllRequest")
(setf (get schunk_canopen_driver::HomeAllRequest :definition-)
      "
---
bool success

")

(setf (get schunk_canopen_driver::HomeAllResponse :md5sum-) "358e233cde0c8a8bcfea4ce193f8fc15")
(setf (get schunk_canopen_driver::HomeAllResponse :datatype-) "schunk_canopen_driver/HomeAllResponse")
(setf (get schunk_canopen_driver::HomeAllResponse :definition-)
      "
---
bool success

")



(provide :schunk_canopen_driver/HomeAll "358e233cde0c8a8bcfea4ce193f8fc15")


