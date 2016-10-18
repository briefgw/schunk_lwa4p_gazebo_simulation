// this is for emacs file handling -*- mode: c++; indent-tabs-mode: nil -*-

// -- BEGIN LICENSE BLOCK ----------------------------------------------
// This file is part of FZIs ic_workspace.
//
// This program is free software licensed under the LGPL
// (GNU LESSER GENERAL PUBLIC LICENSE Version 3).
// You can find a copy of this license in LICENSE folder in the top
// directory of the source code.
//
// © Copyright 2016 FZI Forschungszentrum Informatik, Karlsruhe, Germany
//
// -- END LICENSE BLOCK ------------------------------------------------

//----------------------------------------------------------------------
/*!\file
 *
 * \author  Klaus Uhl <uhl@fzi.de>
 * \date    2008-04-14
 *
 * \brief   Contains logging definitions for the icl_core_plugin library.
 *
 */
//----------------------------------------------------------------------
#ifndef ICL_CORE_PLUGIN_LOGGING_H_INCLUDED
#define ICL_CORE_PLUGIN_LOGGING_H_INCLUDED

#include "icl_core_logging/Logging.h"
#include "ImportExport.h"

namespace icl_core {
namespace plugin {

DECLARE_LOG_STREAM_IMPORT_EXPORT(Plugin, ICL_CORE_PLUGIN_IMPORT_EXPORT)

}
}

#endif
