# CMake generated Testfile for 
# Source directory: /home/workstation3/catkin_ws/src/schunk_robots/schunk_pg70
# Build directory: /home/workstation3/catkin_ws/build/schunk_robots/schunk_pg70
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
ADD_TEST(_ctest_schunk_pg70_roslaunch-check_launch "/home/workstation3/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/opt/ros/indigo/share/catkin/cmake/test/run_tests.py" "/home/workstation3/catkin_ws/build/test_results/schunk_pg70/roslaunch-check_launch.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/workstation3/catkin_ws/build/test_results/schunk_pg70" "/opt/ros/indigo/share/roslaunch/cmake/../scripts/roslaunch-check -o '/home/workstation3/catkin_ws/build/test_results/schunk_pg70/roslaunch-check_launch.xml' '/home/workstation3/catkin_ws/src/schunk_robots/schunk_pg70/launch' ")
ADD_TEST(_ctest_schunk_pg70_rostest_urdf_test_urdf.test "/home/workstation3/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/opt/ros/indigo/share/catkin/cmake/test/run_tests.py" "/home/workstation3/catkin_ws/build/test_results/schunk_pg70/rostest-urdf_test_urdf.xml" "--return-code" "/opt/ros/indigo/share/rostest/cmake/../../../bin/rostest --pkgdir=/home/workstation3/catkin_ws/src/schunk_robots/schunk_pg70 --package=schunk_pg70 --results-filename urdf_test_urdf.xml --results-base-dir \"/home/workstation3/catkin_ws/build/test_results\" /home/workstation3/catkin_ws/src/schunk_robots/schunk_pg70/urdf/test/urdf.test ")
