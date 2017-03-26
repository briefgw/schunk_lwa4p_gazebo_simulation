BRIEF: Biological Robotic Imaging Experimentation Framework
##########################################################################

The Biological Robotic Imaging Experimentation Framework (BRIEF) is a `ROS <http://www.ros.org/>`_ based robot,
tailored to conduct biological imaging and manipulation experiments over extended periods of time.
BRIEF combines a `Schunk Lightweight Arm LWA 4P  <http://www.schunk-modular-robotics.com/en/home/products/powerball-lightweight-arm-lwa-4p.html>`_
with an imaging table and arm constructed in house at The George Washington University `SEAS <https://www.seas.gwu.edu/>`_
for a `Department of Computer Science <https://www.cs.seas.gwu.edu/>`_ Senior Design Project.

.. class:: no-web

    .. image:: https://github.com/gw-cs-sd/sd-2017-BRIEF/blob/master/brief.png
        :alt: BRIEF
        :width: 100%
        :align: center


.. class:: no-web no-pdf

|pypi| |unix_build| |windows_build| |coverage| |gitter|



.. contents::

.. section-numbering::



Main Features
=============

* Robotic Manipulation of Biological Samples
* Point Cloud Imaging
* Point Cloud to Mesh Conversion (future)

A Word of Caution
=================
ROS based projects are heavily dependent on specific computer hardware,
operating system, and ROS version. Although it is tempting to use a virtual machine,
we have found this creates difficulties. Therefore, in order to guarantee that
the installation process works properly we highly recommend that you use the
identical configuration of components we suggest in Installation.

Installation
============

Hardware
--------
Acquire a Dell OptiPlex 990 Desktop.

Bootable USB
------------
Create a `Bootable USB <https://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu/>`_
with `Ubuntu 14.04.5 Desktop (64-bit)  <https://www.ubuntu.com/download/alternative-downloads>`_
and set up your new operating system on the Dell OptiPlex 990 Desktop. Configure the
Ubuntu 14.04.5 Desktop to your specifications. We sugguest Tools That Will Make Your Life Easier in this README.

ROS and Gazebo
--------------
Open Terminal and follow the `ROS Indigo  <http://wiki.ros.org/indigo/Installation/Ubuntu>`_
installation process. If sucessful you should be able to run roscore.

.. code-block:: bash

    $ roscore

Install Gazebo and test it.

.. code-block:: bash

    $ curl -ssL http://get.gazebosim.org | sh
    $ gazebo

Install Gazebo ROS Plugins.

.. code-block:: bash

    $ sudo apt-get install ros-indigo-gazebo-ros-pkgs ros-indigo-gazebo-ros-control


Create a catkin workspace directory, enter the catkin workspace, install git, and git clone the master branch of the BRIEF repository.
Then make the catkin workspace

.. code-block:: bash

    $ mkdir -p ~/catkin_ws
    $ cd ~/catkin_ws/
    $ sudo apt-get install git
    $ git init
    $ git clone https://github.com/gw-cs-sd/sd-2017-BRIEF.git
    $ catkin_make


Gazebo
------
Follow the `Gazebo  <http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install>`_
installation process.


Tools That Will Make Your Life Easier
=====================================
Vim

.. code-block:: bash

    $ sudo apt-get install vim

Janus

    https://github.com/carlhuda/janus

    https://gist.github.com/dustinsmith1024/1686977

Midnight commander

.. code-block:: bash

    $ sudo apt-get install midnight commander







Simulation
==========

Usage
=====
Open terminal and start roscore


.. code-block:: bash

    $ roscore

Useful Links
============
Ubuntu 14.04.5 Desktop (64-bit)

  https://www.ubuntu.com/download/alternative-downloads

ROS Indigo

  http://wiki.ros.org/indigo/Installation/Ubuntu

Catkin Tutorials

  http://wiki.ros.org/catkin/Tutorials

  http://wiki.ros.org/catkin/Tutorials/create_a_workspace

Install Gazebo

  http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install

Build a Ros Package

  http://wiki.ros.org/ROS/Tutorials/BuildingPackages

For a Gazebo Simulation

  http://gazebosim.org/tutorials?tut=ros_wrapper_versions&cat=connect_ros

  http://gazebosim.org/tutorials?tut=install&cat=install

  http://gazebosim.org/tutorials?tut=ros_wrapper_versions

Install gazebo via ROS

  http://gazebosim.org/tutorials?tut=ros_installing


License
-------

BSD-3-Clause: `LICENSE <https://github.com/jakubroztocil/httpie/blob/master/LICENSE>`_.



Authors
-------

Joseph Crandall and Karl Preisner created BRIEF for their
George Washington University Senior Design Project


.. _pip: https://pip.pypa.io/en/stable/installing/
.. _Github API: http://developer.github.com/v3/issues/comments/#create-a-comment
.. _these fine people: https://github.com/jakubroztocil/httpie/contributors
.. _Jakub Roztocil: http://roztocil.co
.. _@jakubroztocil: https://twitter.com/jakubroztocil
.. _claudiatd/httpie-artwork: https://github.com/claudiatd/httpie-artwork


.. |pypi| image:: https://img.shields.io/pypi/v/httpie.svg?style=flat-square&label=latest%20stable%20version
    :target: https://pypi.python.org/pypi/httpie
    :alt: Latest version released on PyPi

.. |coverage| image:: https://img.shields.io/coveralls/jakubroztocil/httpie/master.svg?style=flat-square&label=coverage
    :target: https://coveralls.io/r/jakubroztocil/httpie?branch=master
    :alt: Test coverage

.. |unix_build| image:: https://img.shields.io/travis/jakubroztocil/httpie/master.svg?style=flat-square&label=unix%20build
    :target: http://travis-ci.org/jakubroztocil/httpie
    :alt: Build status of the master branch on Mac/Linux

.. |windows_build|  image:: https://img.shields.io/appveyor/ci/jkbrzt/httpie.svg?style=flat-square&label=windows%20build
    :target: https://ci.appveyor.com/project/jkbrzt/httpie
    :alt: Build status of the master branch on Windows

.. |gitter| image:: https://img.shields.io/gitter/room/jakubroztocil/httpie.svg?style=flat-square
    :target: https://gitter.im/jakubroztocil/httpie
    :alt: Chat on Gitter
