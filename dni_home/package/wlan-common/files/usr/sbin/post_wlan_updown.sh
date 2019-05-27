#!/bin/sh

#This script is for customize actions after wlan up/down per projects or platform


if [ "$1" = "enable" ]; then
    echo "[wlan]=========time:`date` wlan post up ==================" >/dev/console
    [ -f "/etc/init.d/netscan_if.init" ] && {
        echo "[wlan]========= restart netscan ==================" >/dev/console
        /etc/init.d/netscan start
        /etc/init.d/wifi-listener stop
        /etc/init.d/wifi-listener start
    }
    echo "`/bin/config get wlg_ARLO_AP`" > /proc/sys/net/ipv4/arloifname
    
    #set brarlo's interface
    #base:ath2.2 ath01.2
    #satellite:ath2.2 ath21.2 ath01.2 ath02.2
    if [ "`/bin/config get enable_arlo_function`" = "1" ];then
        vid="`/bin/config get wlg_ap_bh_vids`"
        ifname_backhaul_sta_2g="`/bin/config get wlg_BACKHAUL_STA`"
        ifname_backhaul_sta_5g="`/bin/config get wla_BACKHAUL_STA`"
        ifname_backhaul_ap_2g="`/bin/config get wlg_BACKHAUL_AP`"
        ifname_backhaul_ap_5g="`/bin/config get wla_BACKHAUL_AP`"
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 0:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 1:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 2:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 3:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 4:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 5:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 6:5
        ip link set dev $ifname_backhaul_ap_5g.$vid type vlan egress-qos-map 7:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 0:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 1:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 2:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 3:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 4:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 5:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 6:5
        ip link set dev $ifname_backhaul_ap_2g.$vid type vlan egress-qos-map 7:5
        if [ "`cat /tmp/orbi_type`" = "Satellite" ];then
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 0:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 1:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 2:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 3:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 4:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 5:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 6:5
            ip link set dev $ifname_backhaul_sta_5g.$vid type vlan egress-qos-map 7:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 0:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 1:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 2:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 3:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 4:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 5:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 6:5
            ip link set dev $ifname_backhaul_sta_2g.$vid type vlan egress-qos-map 7:5
        fi
    fi

    second_fronthaul=`/bin/config get wla_NORMAL_AP`
    second_guest=`/bin/config get wla_GUEST_AP`
	enable_guest=`/bin/config get wla1_endis_guestNet`
    if [ `/bin/config get dns_hijack` = 0 ] && [ `/bin/config get hijack_process` = 3 ]; then
        if [ `/bin/config get tri_band_status` = "up" ]; then
            ifconfig $second_fronthaul up
			if [ "x$enable_guest" = "x1" ];then
				ifconfig $second_guest up
			fi
            echo "Seecond 5G Fronthaul UP!!!!!" > /dev/console
        else
            ifconfig $second_fronthaul down
            ifconfig $second_guest down
            echo "Detect satellite, Seecond 5G Fronthaul DOWN!!!!!" > /dev/console
        fi
    else
        ifconfig $second_fronthaul down
        ifconfig $second_guest down
		/bin/config set tri_band_status="down"
        echo "Seecond 5G Fronthaul DOWN!!!!!" > /dev/console
    fi

fi

if [ "$1" = "disable" ]; then
echo "[wlan]=========time:`date` wlan post down ==================" >/dev/console



fi
