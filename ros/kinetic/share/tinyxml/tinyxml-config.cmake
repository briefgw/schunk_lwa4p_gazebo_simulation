# ===================================================================================
#  tinyxml CMake configuration file
#
#             ** File generated automatically, do not modify **
#
#  Usage from an external project:
#    In your CMakeLists.txt, add these lines:
#
#    FIND_PACKAGE(tinyxml REQUIRED )
#    TARGET_LINK_LIBRARIES(MY_TARGET_NAME ${tinyxml_LIBRARIES})
#
#    This file will define the following variables:
#      - tinyxml_LIBRARIES            : The list of libraries to links against.
#      - tinyxml_LIB_DIR              : The directory where lib files are. Calling LINK_DIRECTORIES
#                                                                with this path is NOT needed.
#      - tinyxml_INCLUDE_DIRS         : The include directories.
#
#    Advanced variables:
#      - tinyxml_CONFIG_PATH
#
# =================================================================================================

# Extract the directory where *this* file has been installed (determined at cmake run-time)
get_filename_component(tinyxml_CONFIG_PATH "${CMAKE_CURRENT_LIST_FILE}" PATH)

# Get the absolute path with no ../.. relative marks, to eliminate implicit linker warnings
get_filename_component(tinyxml_INSTALL_PATH "${tinyxml_CONFIG_PATH}/../.." REALPATH)

# ======================================================
# Include directories to add to the user project:
# ======================================================

# Provide the include directories to the caller
SET(tinyxml_INCLUDE_DIRS "${tinyxml_INSTALL_PATH}/include")

# ======================================================
# Link directories to add to the user project:
# ======================================================

SET(tinyxml_LIB_COMPONENTS tinyxml)

SET(tinyxml_DEFINITIONS "-DTIXML_USE_STL;-D_IC_BUILDER_TINYXML_")

# Provide the libs directory anyway, it may be needed in some cases.
SET(tinyxml_LIB_DIR "${tinyxml_INSTALL_PATH}/lib")
LINK_DIRECTORIES(${tinyxml_LIB_DIR})

# fill *_LIBRARIES and *_LIBRARY
SET(tinyxml_LIBRARIES "")
FOREACH(comp ${tinyxml_LIB_COMPONENTS}  )
  SET(tinyxml_LIBRARIES ${tinyxml_LIBRARIES} ${comp})
  SET(${comp}_LIBRARY ${comp})
ENDFOREACH()

# check for requested components (=libraries)
FOREACH(comp ${tinyxml_FIND_COMPONENTS}  )
  LIST(FIND tinyxml_LIB_COMPONENTS ${comp} _index)
  IF(${_index} GREATER -1)
    SET(tinyxml_${comp}_FOUND 1)
  ELSE()
    SET(tinyxml_${comp}_FOUND 0)
    IF(tinyxml_FIND_REQUIRED_${comp})
      MESSAGE(FATAL_ERROR "tinyxml ${comp} not available.")
    ENDIF()
  ENDIF()
ENDFOREACH()
