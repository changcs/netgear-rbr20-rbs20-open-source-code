#!/bin/sh
# Copyright 2017 Netgear
#
# Script to do Arlo factory reset and restart Arlo Apps/Threads

set -x

export CONFIGFILE=/tmp/arlo/vzdaemon.env
export XAGENT_CONFIG=/tmp/arlo/xagent.conf
export VZDAMON_CONF_DIR=/arlo/media/nand

echo "Starting Arlo factory reset" >> /tmp/system-log
/etc/arlo/alroshutdown.sh
rm -f $CONFIGFILE
rm -f $XAGENT_CONFIG
rm -Rf $VZDAMON_CONF_DIR

echo "Exiting Arlo factory reset" >> /tmp/system-log

echo "Restarting Arlo app" >> /tmp/system-log

#/etc/init.d/vzdaemon
# reboot for now
reboot
