#!/bin/sh
#
# Copyright: (c) 2017 Netgear, Inc.
#            All rights reserved
#
# ODMSTART ORBI
#Notice:This scrip call by vzdaemon.init , if you change the Start sequence of 
#vzdaemon ,should ensure this config wl2g_ARLO_AP can be get correct
export IFNAME="`/bin/config get wl2g_ARLO_AP`"
export HOSTAPD_FLAGS="-p /var/run/hostapd-wifi0 -i $IFNAME"
# ODMSTOP ORBI

LOGFILE="/tmp/system-log"
VZPID=
WPSHDLR=

# Add $2 to value of symbol $1 as csv 
csv_add() {
 local SEP=""
 local VAL=$(d2 -s "${1}")
 for item in ${VAL//,/ }; do
    [ "${item}" = "${2}" ] && return 0
    SEP="," 
 done
 d2 -c "${1}" "${VAL}${SEP}${2}"
}
# Remove $2 to value of symbol $1 as csv 
csv_rem() {
 local NEW=""
 local SEP=""
 local VAL=$(d2 -s "${1}")
 for item in ${VAL//,/ }; do
    [ "${item}" != "${2}" ] && NEW="${NEW}${SEP}${item}" && SEP="," 
 done
 d2 -c "${1}" "${NEW}"
}

set_if_empty() {
    SYM="$1"
    
    # read value, make sure d2d is up.
    until VAL=$(d2 -s ${SYM}); do sleep .1; done
    if [ "${VAL}empty" == "empty" ]; 
    then
        d2 -c ${SYM} "$2"; 
    fi
}

log_rotate() {
	MAX=$((2*1024*1024))
	FILE=$1
	
	while [ 1 ];
	do
	   read LINE || exit 1
	   echo "${LINE}" >> ${FILE}
	
	   SIZE=$(stat -c "%s" ${FILE})
	   if [ ${SIZE} -ge ${MAX} ]; then
	     mv ${FILE} ${FILE}.0
	   fi
	done
}

start_vzdaemon() {
	
	CERT_PATH="/usr/share/ntgr/certs"
	/usr/bin/d2 -c XagentCfg.x_handler_1002       "127.0.0.1:4001"
	csv_add XagentCfg.x_handler_event_sink "127.0.0.1:4002"
	
	CAMERA_LOG_PATH="/tmp/clog"
	mkdir -p ${CAMERA_LOG_PATH}
	set_if_empty arlocfg[0].camera_log_path ${CAMERA_LOG_PATH} 
		
	echo "Starting vzdaemon" >> ${LOGFILE}
	/usr/bin/vzdaemon "SerialNum=$(/usr/bin/d2 -s General.FSN)" \
	                  "ModelId=$(/usr/bin/d2 -s General.DeviceModel)" \
	                  CameraInputIx=brarlo \
	                  HttpServerIx=brarlo HttpServerPort=9090 \
	                  "BackendUrl=$(/usr/bin/d2 -s ArloCfg.vz_server_url)" \
	                  "CertPath=${CERT_PATH}/ca-bundle-mega.crt" \
	                  "MediaServerCertPath=${CERT_PATH}/wowza.netgear.com_Certificate_Only.pem" \
	                  "LogLevel=$(/usr/bin/d2 -s ArloCfg.vz_log_level)" \
	                  "UpdateUrl=$(/usr/bin/d2 -s ArloCfg.vz_update_url)" \
					  | log_rotate ${LOGFILE} 2>&1 &
	/usr/bin/arlowpshdlr.sh ${HOSTAPD_FLAGS} &
	WPSHDLR=$!
}

stop_vzdaemon() {
	    echo -en "\nStopping vzdaemon\n" >> ${LOGFILE}
		
		killall -9 vzdaemon
		kill -9 ${WPSHDLR}
	
		csv_rem XagentCfg.x_handler_event_sink "127.0.0.1:4002"
		
		VZPID=""
		WPSHDLR=""
		
		# TODO - waiting process hangs there, make it exit.  
		d2 -c arloctrl.wpsctrl CANCEL 
}

isEnabled () {
 case "$(/usr/bin/d2 -s ArloCfg.Enabled)" in
  true)
   return 1;
   ;;
  false)
   return 0;
   ;;
  *)
   # there was an error!
   sleep 1;
   return 2;
   ;;
 esac
}

while [ 1 ];
do
	# while not enabled
	isEnabled
	while [ "$?" != "1" ] ; do /usr/bin/d2 -w ArloCfg.Enabled; isEnabled; done

    # ODMSTART ORBI
    /bin/config set wlg_arlo_endis_arloNet=1
    ifconfig $IFANME up
    # ODMSTOP ORBI

	start_vzdaemon

	# while enabled
	isEnabled
	while [ "$?" != "0" ]; do /usr/bin/d2 -w ArloCfg.Enabled ; isEnabled; done
	
    # ODMSTART ORBI
    /bin/config set wlg_arlo_endis_arloNet=0
    ifconfig $IFANME down
    # ODMSTOP ORBI

	stop_vzdaemon
	
done
