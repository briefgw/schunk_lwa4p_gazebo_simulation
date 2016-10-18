# ===================================================================================
#  icl_hardware_canopen CMake configuration file
#
#             ** File generated automatically, do not modify **
#
#  Usage from an external project:
#    In your CMakeLists.txt, add these lines:
#
#    FIND_PACKAGE(icl_hardware_canopen REQUIRED )
#    TARGET_LINK_LIBRARIES(MY_TARGET_NAME ${icl_hardware_canopen_LIBRARIES})
#
#    This file will define the following variables:
#      - icl_hardware_canopen_LIBRARIES            : The list of libraries to links against.
#      - icl_hardware_canopen_LIB_DIR              : The directory where lib files are. Calling LINK_DIRECTORIES
#                                                                with this path is NOT needed.
#      - icl_hardware_canopen_INCLUDE_DIRS         : The include directories.
#
#    Advanced variables:
#      - icl_hardware_canopen_CONFIG_PATH
#
# =================================================================================================

# Extract the directory where *this* file has been installed (determined at cmake run-time)
get_filename_component(icl_hardware_canopen_CONFIG_PATH "${CMAKE_CURRENT_LIST_FILE}" PATH)

# Get the absolute path with no ../.. relative marks, to eliminate implicit linker warnings
get_filename_component(icl_hardware_canopen_INSTALL_PATH "${icl_hardware_canopen_CONFIG_PATH}/../.." REALPATH)

# ======================================================
# Include directories to add to the user project:
# ======================================================

# Provide the include directories to the caller
SET(icl_hardware_canopen_INCLUDE_DIRS "${icl_hardware_canopen_INSTALL_PATH}/include")

# ======================================================
# Link directories to add to the user project:
# ======================================================

SET(icl_hardware_canopen_LIB_COMPONENTS icl_hardware_canopen)

SET(icl_hardware_canopen_DEFINITIONS "-D_IC_BUILDER_ICL_HARDWARE_CAN_;-DOSNAME_LINUX")

# Provide the libs directory anyway, it may be needed in some cases.
SET(icl_hardware_canopen_LIB_DIR "${icl_hardware_canopen_INSTALL_PATH}/lib")
LINK_DIRECTORIES(${icl_hardware_canopen_LIB_DIR})

# fill *_LIBRARIES and *_LIBRARY
SET(icl_hardware_canopen_LIBRARIES "")
FOREACH(comp ${icl_hardware_canopen_LIB_COMPONENTS}  )
  SET(icl_hardware_canopen_LIBRARIES ${icl_hardware_canopen_LIBRARIES} ${comp})
  SET(${comp}_LIBRARY ${comp})
ENDFOREACH()

# check for requested components (=libraries)
FOREACH(comp ${icl_hardware_canopen_FIND_COMPONENTS}  )
  LIST(FIND icl_hardware_canopen_LIB_COMPONENTS ${comp} _index)
  IF(${_index} GREATER -1)
    SET(icl_hardware_canopen_${comp}_FOUND 1)
  ELSE()
    SET(icl_hardware_canopen_${comp}_FOUND 0)
    IF(icl_hardware_canopen_FIND_REQUIRED_${comp})
      MESSAGE(FATAL_ERROR "icl_hardware_canopen ${comp} not available.")
    ENDIF()
  ENDIF()
ENDFOREACH()
