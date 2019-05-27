#!/bin/sh
#
#
# Copyright: (c) 2017 Netgear, Inc.
#            All rights reserved
#
# wpsmonitor
#
EVENT="$2"
ARG="$3"

EN=`d2 -s arlocfg.enabled`
if [ "enabled_${EN}" != "enabled_true" ]
then
	exit 0;
fi

echo Processing event ${EVENT} ${ARG} > /dev/kmsg

case "${EVENT}" in
 WPS-PBC-ACTIVE)
	d2 -c arlostatus.wps_proc_status 1
	d2 -c arlostatus.wps_sta_mac 0:0:0:0:0:0
	;;
 WPS-SUCCESS)
	d2 -c arlostatus.wps_proc_status 2
	;;
 WPS-REG-SUCCESS)
	d2 -c arlostatus.wps_sta_mac ${ARG}
	;;
 WPS-OVERLAP-DETECTED|WPS-FAIL|WPS-PIN-NEEDED|CTRL-EVENT-TERMINATING)
	d2 -c arlostatus.wps_proc_status 3
	;;
 WPS-TIMEOUT)
	d2 -c arlostatus.wps_proc_status 4
	;;
 *)
esac
