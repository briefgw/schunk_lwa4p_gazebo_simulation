
(cl:in-package :asdf)

(defsystem "schunk_canopen_driver-srv"
  :depends-on (:roslisp-msg-protocol :roslisp-utils )
  :components ((:file "_package")
    (:file "HomeWithIDs" :depends-on ("_package_HomeWithIDs"))
    (:file "_package_HomeWithIDs" :depends-on ("_package"))
    (:file "HomeAll" :depends-on ("_package_HomeAll"))
    (:file "_package_HomeAll" :depends-on ("_package"))
    (:file "HomeWithJointNames" :depends-on ("_package_HomeWithJointNames"))
    (:file "_package_HomeWithJointNames" :depends-on ("_package"))
  ))