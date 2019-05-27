#!/bin/bash
#
# Build FwUpgrade Target Component
#

TARGET=mdm9625
PASSTHRU_CMDS=$@

# Empty all the input arguments, this makes oe build fail otherwise.
while (( "$#" )); do
  shift
done

# Run build steps now.
if [ -f ../apps_proc/oe-core/build/conf/set_bb_env.sh ]; then

  cd ../apps_proc/oe-core
  . build/conf/set_bb_env.sh
  
  # Build fwupgrade
  # Set build command.
  BUILD_CMD="bitbake fwupgrade"
  echo "Build command: ${BUILD_CMD}"

  ${BUILD_CMD} || exit 1
  exit 0
else
  exit 1
fi
