
(cl:in-package :asdf)

(defsystem "schunk_sdh-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "TactileSensor" :depends-on ("_package_TactileSensor"))
    (:file "_package_TactileSensor" :depends-on ("_package"))
    (:file "TactileMatrix" :depends-on ("_package_TactileMatrix"))
    (:file "_package_TactileMatrix" :depends-on ("_package"))
  ))