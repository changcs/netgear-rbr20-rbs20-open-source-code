#!/bin/sh

regeneral_arlovap(){
    #Matthew figure out at that time SSID/KEY already  regeneral so just get&set
    new_ssid="`d2 -s arlocfg.SSID`"
    new_pwd="`d2 -s arlocfg.Passphrase`"
    /bin/config set wlg_arlo_ssid="$new_ssid"
    /bin/config set wlg_arlo_wpa2_psk="$new_pwd"
}

restart_wireless(){
    wlan updateconf
    wlan down fronthaul
    wlan up
}

sync_satellite(){
    rm -rf /tmp/soapclient/arlo_sync/* 
    config set soap_setting=AllConfig
    killall -SIGUSR1 soap_agent

}

while [ 1 ];
do
	# wait for value change
	/usr/bin/d2 -w arloctrl.restart
	
	case "$(/usr/bin/d2 -s arloctrl.restart)" in
	true)
	   # regeneral arlo ssid/key ,sync to satellite
	   regeneral_arlovap
       sync_satellite
       sleep 3
       restart_wireless
	   ;;
    esac
	/usr/bin/d2 -c arloctrl.restart false
done
