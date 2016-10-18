# ===================================================================================
#  icl_core CMake configuration file
#
#             ** File generated automatically, do not modify **
#
#  Usage from an external project:
#    In your CMakeLists.txt, add these lines:
#
#    FIND_PACKAGE(icl_core REQUIRED )
#    TARGET_LINK_LIBRARIES(MY_TARGET_NAME ${icl_core_LIBRARIES})
#
#    This file will define the following variables:
#      - icl_core_LIBRARIES                 : The list of libraries to links against.
#      - icl_core_LIB_DIR              : The directory where lib files are. Calling LINK_DIRECTORIES
#                                              with this path is NOT needed.
#      - icl_core_INCLUDE_DIRS         : The include directories.
#
#    Advanced variables:
#      - icl_core_CONFIG_PATH
#
# =================================================================================================

# Extract the directory where *this* file has been installed (determined at cmake run-time)
get_filename_component(icl_core_CONFIG_PATH "${CMAKE_CURRENT_LIST_FILE}" PATH)

# Get the absolute path with no ../.. relative marks, to eliminate implicit linker warnings
get_filename_component(icl_core_INSTALL_PATH "${icl_core_CONFIG_PATH}/../.." REALPATH)

# ======================================================
# Include directories to add to the user project:
# ======================================================

# Provide the include directories to the caller
SET(icl_core_INCLUDE_DIRS "${icl_core_INSTALL_PATH}/include")

# ======================================================
# Link directories to add to the user project:
# ======================================================

SET(icl_core_LIB_COMPONENTS icl_core;icl_core_config;icl_core_logging;icl_core_plugin;icl_core_thread;icl_core_dispatch;icl_core_performance_monitor)

SET(icl_core_DEFINITIONS "-D_IC_BUILDER_HAS_TIME_H_;-D_IC_BUILDER_HAS_SYS_TIME_H_;-D_IC_BUILDER_ICL_CORE_;-D_IC_BUILDER_ICL_CORE_CONFIG_;-D_IC_BUILDER_ICL_CORE_LOGGING_;-D_IC_BUILDER_ICL_CORE_PLUGIN_;-D_IC_BUILDER_ICL_CORE_THREAD_;-D_IC_BUILDER_ICL_CORE_DISPATCH_;-D_IC_BUILDER_ICL_CORE_CRYPT_;-D_IC_BUILDER_ICL_CORE_PERFORMANCE_MONITOR_")

# Provide the libs directory anyway, it may be needed in some cases.
SET(icl_core_LIB_DIR "${icl_core_INSTALL_PATH}/lib")
LINK_DIRECTORIES(${icl_core_LIB_DIR})

# fill *_LIBRARIES and *_LIBRARY
SET(icl_core_LIBRARIES "")
FOREACH(comp ${icl_core_LIB_COMPONENTS}  )
  SET(icl_core_LIBRARIES ${icl_core_LIBRARIES} ${comp})
  SET(${comp}_LIBRARY ${comp})
ENDFOREACH()

# check for requested components (=libraries)
FOREACH(comp ${icl_core_FIND_COMPONENTS}  )
  LIST(FIND icl_core_LIB_COMPONENTS ${comp} _index)
  IF(${_index} GREATER -1)
    SET(icl_core_${comp}_FOUND 1)
  ELSE()
    SET(icl_core_${comp}_FOUND 0)
    IF(icl_core_FIND_REQUIRED_${comp})
      MESSAGE(FATAL_ERROR "icl_core ${comp} not available.")
    ENDIF()
  ENDIF()
ENDFOREACH()

IF(WIN32)
  SET(icl_core_DEFINITIONS ${icl_core_DEFINITIONS} "-D_SYSTEM_WIN32_")
ENDIF(WIN32)

IF(UNIX)
  IF(NOT APPLE)
    SET(icl_core_DEFINITIONS ${icl_core_DEFINITIONS} "-D_SYSTEM_LINUX_" "-D_SYSTEM_POSIX_")
  ELSE()
    SET(icl_core_DEFINITIONS ${icl_core_DEFINITIONS} "-D_SYSTEM_DARWIN_" "-D_SYSTEM_POSIX_")
  ENDIF(NOT APPLE)
ENDIF(UNIX)
