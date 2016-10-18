;; Auto-generated. Do not edit!


(when (boundp 'schunk_canopen_driver::HomeWithIDs)
  (if (not (find-package "SCHUNK_CANOPEN_DRIVER"))
    (make-package "SCHUNK_CANOPEN_DRIVER"))
  (shadow 'HomeWithIDs (find-package "SCHUNK_CANOPEN_DRIVER")))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDS")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDS"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDSREQUEST")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDSREQUEST"))
(unless (find-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDSRESPONSE")
  (make-package "SCHUNK_CANOPEN_DRIVER::HOMEWITHIDSRESPONSE"))

(in-package "ROS")





(defclass schunk_canopen_driver::HomeWithIDsRequest
  :super ros::object
  :slots (_node_ids ))

(defmethod schunk_canopen_driver::HomeWithIDsRequest
  (:init
   (&key
    ((:node_ids __node_ids) (make-array 0 :initial-element 0 :element-type :char))
    )
   (send-super :init)
   (setq _node_ids __node_ids)
   self)
  (:node_ids
   (&optional __node_ids)
   (if __node_ids (setq _node_ids __node_ids)) _node_ids)
  (:serialization-length
   ()
   (+
    ;; uint8[] _node_ids
    (* 1    (length _node_ids)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint8[] _node_ids
     (write-long (length _node_ids) s)
     (princ _node_ids s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint8[] _node_ids
   (let ((n (sys::peek buf ptr- :integer))) (incf ptr- 4)
     (setq _node_ids (make-array n :element-type :char))
     (replace _node_ids buf :start2 ptr-) (incf ptr- n))
   ;;
   self)
  )

(defclass schunk_canopen_driver::HomeWithIDsResponse
  :super ros::object
  :slots (_success ))

(defmethod schunk_canopen_driver::HomeWithIDsResponse
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

(defclass schunk_canopen_driver::HomeWithIDs
  :super ros::object
  :slots ())

(setf (get schunk_canopen_driver::HomeWithIDs :md5sum-) "e91ddea331fe5e8410e22caf0f3b5ddb")
(setf (get schunk_canopen_driver::HomeWithIDs :datatype-) "schunk_canopen_driver/HomeWithIDs")
(setf (get schunk_canopen_driver::HomeWithIDs :request) schunk_canopen_driver::HomeWithIDsRequest)
(setf (get schunk_canopen_driver::HomeWithIDs :response) schunk_canopen_driver::HomeWithIDsResponse)

(defmethod schunk_canopen_driver::HomeWithIDsRequest
  (:response () (instance schunk_canopen_driver::HomeWithIDsResponse :init)))

(setf (get schunk_canopen_driver::HomeWithIDsRequest :md5sum-) "e91ddea331fe5e8410e22caf0f3b5ddb")
(setf (get schunk_canopen_driver::HomeWithIDsRequest :datatype-) "schunk_canopen_driver/HomeWithIDsRequest")
(setf (get schunk_canopen_driver::HomeWithIDsRequest :definition-)
      "
uint8[] node_ids
---
bool success

")

(setf (get schunk_canopen_driver::HomeWithIDsResponse :md5sum-) "e91ddea331fe5e8410e22caf0f3b5ddb")
(setf (get schunk_canopen_driver::HomeWithIDsResponse :datatype-) "schunk_canopen_driver/HomeWithIDsResponse")
(setf (get schunk_canopen_driver::HomeWithIDsResponse :definition-)
      "
uint8[] node_ids
---
bool success

")



(provide :schunk_canopen_driver/HomeWithIDs "e91ddea331fe5e8410e22caf0f3b5ddb")


