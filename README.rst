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
Ubuntu 14.04.5 Desktop to your specifications. We suggest Tools That Will Make Your Life Easier in this README.

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


Usage
=====
Open terminal and start roscore


.. code-block:: bash

    $ roscore


Remote Desktop
===============
This project is far easier to develop if the code to run the robot is centered on a single computer.
However this is not recommended for a programmer who wishes to work on the project outside of the lab.
To rectify this situation we recommend using a remote desktop.

Desktop
-------
We recommend running a virtual machine on your computer.
You can use `vmware <https://http://www.vmware.com/>`_ to create an ubuntu virtual machine on your computer.
Install `Ubuntu 14.04.5 Desktop (64-bit)  <https://www.ubuntu.com/download/alternative-downloads>`_ on this virtual machine.

Once you have the virtual machine running install remmina

.. code-block:: bash

    $ sudo apt-get install remmina

Once Installed run remmina

.. code-block:: bash

    $ remmina

Click the green plus to create a new remote desktop file.
Name the connection, and choose VNC-Virtual Network Computing.
Now go to the ubuntu machine connected to BRIEF and do two things.
1. `Share your desktop <https://help.ubuntu.com/stable/ubuntu-help/sharing-desktop.html/>`_ on the BRIEF machine
2.  Get the IP address of the BRIEF machine

.. code-block:: bash

    $ ifconfig -a

Take not of the BRIEF inet addr:###.##.##.### and then go back to your virtual machine and enter the IP into the remmina server field.
If you fill in the username and password of the BREIF machine in remmina on your virtual machine you will not have to log into the BRIEF machine every time you make the connection.
Finally when you first try to access the BRIEF machine over the VNC from your vm ubuntu the BRIEF machine will send a popup asking if a remote machine can view the desktop.
Click yes


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
============

BSD-3-Clause: `LICENSE <https://github.com/jakubroztocil/httpie/blob/master/LICENSE>`_.



Authors
============

Joseph Crandall and Karl Preisner created BRIEF for their
George Washington University Senior Design Project
