#!/bin/sh
#
#
# Copyright: (c) 2017 Netgear, Inc.
#            All rights reserved
#
# arlowpshandler
#

HOSTAPD_FLAGS="$*"

while [ 1 ]
do
	# reset WPS request and wait for request to start WPS.
	d2 -c ArloCtrl.WpsCtrl IDLE
	d2 -w ArloCtrl.WpsCtrl
 
	# concatenate arlocfg.enabled and arloctrl.wpsstart values
	# it endsup being truetrue in case we are interested in
	#
	REQ=`d2 -s ArloCfg.Enabled`_`d2 -s ArloCtrl.WpsCtrl`
	case "${REQ}" in
		true_START)
			# arlo is enabled and WPS was requested 
			
			# start monitoring wps progress
			hostapd_cli ${HOSTAPD_FLAGS} -a /usr/bin/arlowpsmon.sh &
			WPSMON=$!
			
			# issue request for WPS PBC
			hostapd_cli ${HOSTAPD_FLAGS} wps_pbc
			;;
		true_CANCEL)
			# arlo is enabled and WPS has to be canceled
			hostapd_cli ${HOSTAPD_FLAGS} wps_cancel
			
			# stop monitoring process
			kill -9 ${WPSMON}
			;;
		*)
		;;
	esac
done;
