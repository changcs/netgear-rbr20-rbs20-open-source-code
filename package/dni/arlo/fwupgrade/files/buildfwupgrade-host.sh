#!/bin/bash
#
# Build FwUpgrade Host Component
#

# Run build steps now.
if [ -f ./fwupgrade/Makefile ]; then

  cd ./fwupgrade
  
  # Clean up old stuff
  make clean

  # Build vzdaemon
  make -j || exit 1

  cp ./obj/fwupgrade ../fwupgrade-host
  exit 0
else
  exit 1
fi
