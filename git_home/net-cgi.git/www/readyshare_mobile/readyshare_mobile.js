function show_idleout(a){if(a.conn_modetype[0].selected==true){document.getElementById("tim").disabled=true}else{document.getElementById("tim").disabled=false}}function click_status(){window.open("mobile_conn_status.htm","mobile_connect_status","width=625,height=600,top=50,left=200,status=yes,resizable=yes")}function click_detect_install(){var a=document.forms[0];if(a.use_file.checked==true){if(a.choose_file.value.length==0){alert("$filename_null");return false}a.action="/mobile_install.cgi";a.enctype="multipart/form-data";a.submit()}else{a.submit_flag.value="mobile_detect_install";a.action="/apply.cgi?/BAS_mobile.htm timestamp="+ts;a.submit()}return true}function change_mode(){var a=document.forms[0];if(a.conn_mode.value=="ethonly"){document.getElementById("btn_0").style.display="";document.getElementById("btn_1").style.display="none";document.getElementById("mobile_tr").style.display="none";document.getElementById("mobile_tr_1").style.display="none";document.getElementById("mobile_tr_2").style.display="none";document.getElementById("bluebar_tr").style.display="none";document.getElementById("bluebar_tr_1").style.display="none";document.getElementById("bluebar_tr_2").style.display="none";document.getElementById("3g_conn_mode").style.display="none";document.getElementById("3g_conn_mode_1").style.display="none"}else{document.getElementById("btn_0").style.display="none";document.getElementById("btn_1").style.display="";document.getElementById("bluebar_tr").style.display="";document.getElementById("mobile_tr").style.display="";isp_display();if(a.conn_mode.value=="3g"){document.getElementById("bluebar_tr_2").style.display="";document.getElementById("3g_conn_mode").style.display="";document.getElementById("3g_conn_mode_1").style.display=""}a.Apply_1.disabled=false;document.getElementById("Apply_1").className="apply_bt";setDisabled(false,a.mobile_login,a.mobile_passwd,a.mobile_access_num,a.mobile_apn,a.mobile_pdptype);setDisabled(false,a.WRegion,a.mobile_pincode);for(i=1;i<=21;i++){document.getElementsByName("isp_type"+i)[0].disabled=false}}}function isp_display(){var c=document.forms[0];var a=c.WRegion.selectedIndex;var b;for(b=0;b<21;b++){if(b==a){document.getElementById("coun"+b).style.display=""}else{document.getElementById("coun"+b).style.display="none"}}isp_apn()}function choose_other(){document.getElementById("mobile_tr_1").style.display="";document.getElementById("bluebar_tr_1").style.display="";document.getElementById("mobile_tr_2").style.display="none";document.forms[0].puk_code.value=wan_mobile_puk_code;document.forms[0].mobile_access_num.selectedIndex="0"}function check_default(){var b=document.forms[0];var c=document.getElementById("coun"+wan_mobile_region);var a=c.getElementsByTagName("select")[0];if(b.WRegion.selectedIndex==wan_mobile_region&&a.value==wan_mobile_isp){b.mobile_login.value=wan_mobile_login;b.mobile_passwd.value=wan_mobile_password;b.mobile_pincode.value=wan_mobile_pincode;b.mobile_access_num.selectedIndex=wan_mobile_access_num;b.mobile_apn.value=wan_mobile_apn;b.mobile_pdptype.value=wan_mobile_pdp_type}}function isp_apn(){var c=document.forms[0];document.getElementById("mobile_tr_1").style.display="none";document.getElementById("bluebar_tr_1").style.display="none";c.mobile_login.value="";c.mobile_passwd.value="";c.mobile_apn.value="";c.mobile_access_num.selectedIndex="0";c.mobile_pdptype.selectedIndex="0";var a=c.WRegion.selectedIndex;var b=a+1;if(mobile_status=="3"&&document.getElementsByName("isp_type"+b)[0].value!="Other"){document.getElementById("mobile_tr_2").style.display="";document.getElementById("bluebar_tr_1").style.display="";document.getElementById("mobile_tr_1").style.display="none";c.pin_error_puk_code.value=wan_mobile_puk_code}if(a==0){if(c.isp_type1.selectedIndex==2||c.isp_type1.selectedIndex==7||c.isp_type1.selectedIndex==8||c.isp_type1.selectedIndex==9||c.isp_type1.selectedIndex==11||c.isp_type1.selectedIndex==13){c.mobile_access_num.value=0;c.hid_access_number.value="*99#"}else{if(c.isp_type1.selectedIndex==3){c.mobile_access_num.selectedIndex=3;c.hid_access_number.value="*99***3#"}else{if(c.isp_type1.selectedIndex==5){c.mobile_access_num.selectedIndex=2;c.hid_access_number.value="*99***2#"}else{c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#"}}}if(c.isp_type1.selectedIndex==0){c.mobile_apn.value="internet"}else{if(c.isp_type1.selectedIndex==1||c.isp_type1.selectedIndex==14){c.mobile_apn.value="connect"}else{if(c.isp_type1.selectedIndex==2||c.isp_type1.selectedIndex==3){c.mobile_apn.value="telstra.internet"}else{if(c.isp_type1.selectedIndex==4){c.mobile_apn.value="telstra.pcpack"}else{if(c.isp_type1.selectedIndex==5){c.mobile_apn.value="telstra.datapack"}else{if(c.isp_type1.selectedIndex==6){c.mobile_apn.value="telstra.bigpond";c.mobile_login.value="User";c.mobile_passwd.value="password"}else{if(c.isp_type1.selectedIndex==7){c.mobile_apn.value="3netaccess"}else{if(c.isp_type1.selectedIndex==8||c.isp_type1.selectedIndex==15){c.mobile_apn.value="3services"}else{if(c.isp_type1.selectedIndex==9){c.mobile_apn.value="VirginBroadband"}else{if(c.isp_type1.selectedIndex==10){c.mobile_apn.value="vfinternet.au"}else{if(c.isp_type1.selectedIndex==11){c.mobile_apn.value="WirelessBroadband"}else{if(c.isp_type1.selectedIndex==12){c.mobile_apn.value="dodolns1"}else{if(c.isp_type1.selectedIndex==13){c.mobile_apn.value="primuslns1"}else{if(c.isp_type1.selectedIndex==16){c.mobile_apn.value="splns555a1"}else{choose_other()}}}}}}}}}}}}}}}else{if(a==1){c.mobile_access_num.selectedIndex=0;c.hid_access_number.value="*99#";if(c.isp_type2.selectedIndex==0){c.mobile_apn.value="A1.net";c.mobile_login.value="ppp@A1plus.at";c.mobile_passwd.value="ppp"}else{if(c.isp_type2.selectedIndex==1){c.mobile_apn.value="gprsinternet";c.mobile_login.value="gprs"}else{if(c.isp_type2.selectedIndex==2){c.mobile_apn.value="web.one.at";c.mobile_login.value="web";c.mobile_passwd.value="web"}else{if(c.isp_type2.selectedIndex==3){c.mobile_apn.value="drei.at"}else{if(c.isp_type2.selectedIndex==4){c.mobile_apn.value="web";c.mobile_login.value="web@telering.at";c.mobile_passwd.value="web"}else{if(c.isp_type2.selectedIndex==5){c.mobile_apn.value="web"}else{choose_other()}}}}}}}else{if(a==2){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type3.selectedIndex==0){c.mobile_apn.value="gprs.base.be"}else{if(c.isp_type3.selectedIndex==1){c.mobile_apn.value="internet.be"}else{if(c.isp_type3.selectedIndex==2){c.mobile_apn.value="web.pro.be"}else{if(c.isp_type3.selectedIndex==3){c.mobile_apn.value="orangeinternet"}else{if(c.isp_type3.selectedIndex==4){c.mobile_apn.value="internet.proximus.be"}else{choose_other()}}}}}}else{if(a==3){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type4.selectedIndex==0){c.mobile_apn.value="claro.com.br"}else{if(c.isp_type4.selectedIndex==1){c.mobile_apn.value="gprs.oi.com.br"}else{if(c.isp_type4.selectedIndex==2){c.mobile_apn.value="wapgprs.oi.com.br"}else{if(c.isp_type4.selectedIndex==3){c.mobile_apn.value="tim.br"}else{if(c.isp_type4.selectedIndex==4){c.mobile_apn.value="wap.telcel.com"}else{choose_other()}}}}}}else{if(a==4){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type5.selectedIndex==0){c.mobile_apn.value="wap.clarochile.cl"}else{if(c.isp_type5.selectedIndex==1){c.mobile_apn.value="imovil.entelpcs.cl"}else{if(c.isp_type5.selectedIndex==2){c.mobile_apn.value="wap.tmovil.cl"}else{if(c.isp_type5.selectedIndex==3){c.mobile_apn.value="web.tmovil.cl"}else{choose_other()}}}}}else{if(a==5){if(c.isp_type6.selectedIndex==0){c.mobile_apn.value="cmnet";c.mobile_access_num.selectedIndex=5;c.hid_access_number.value="*98*1#"}else{if(c.isp_type6.selectedIndex==1){c.mobile_apn.value="3gnet";c.mobile_access_num.selectedIndex=0;c.hid_access_number.value="*99#"}else{if(c.isp_type6.selectedIndex==2){c.mobile_login.value="ctnet@mycdma.cn";c.mobile_passwd.value="vnet.mobi";c.mobile_access_num.selectedIndex=6;c.hid_access_number.value="#777"}else{choose_other()}}}}else{if(a==6){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type7.selectedIndex==0||c.isp_type7.selectedIndex==1||c.isp_type7.selectedIndex==3){c.mobile_apn.value="internet"}else{if(c.isp_type7.selectedIndex==2){c.mobile_apn.value="internet.saunalahti"}else{if(c.isp_type7.selectedIndex==4){c.mobile_apn.value="internet.song.fi"}else{choose_other()}}}}else{if(a==7){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type8.selectedIndex==0){c.mobile_apn.value="surfo2"}else{if(c.isp_type8.selectedIndex==1){c.mobile_apn.value="internet"}else{if(c.isp_type8.selectedIndex==2){c.mobile_apn.value="tagesflat.eplus.de";c.mobile_login.value="eplus";c.mobile_passwd.value="gprs"}else{if(c.isp_type8.selectedIndex==3){c.mobile_apn.value="internet.t-mobile";c.mobile_login.value="t-mobile";c.mobile_passwd.value="tm"}else{if(c.isp_type8.selectedIndex==4){c.mobile_apn.value="web.vodafone.de"}else{choose_other()}}}}}}else{if(a==8){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type9.selectedIndex==0||c.isp_type9.selectedIndex==1||c.isp_type9.selectedIndex==3||c.isp_type9.selectedIndex==4||c.isp_type9.selectedIndex==5){c.mobile_apn.value="internet"}else{if(c.isp_type9.selectedIndex==2){c.mobile_apn.value="web.orangehk.com"}else{if(c.isp_type9.selectedIndex==6){c.mobile_apn.value="mobile.three.com.hk"}else{choose_other()}}}}else{if(a==9){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type10.selectedIndex==0){c.mobile_apn.value="internet.postemobile.it"}else{if(c.isp_type10.selectedIndex==1){c.mobile_apn.value="tre.it"}else{if(c.isp_type10.selectedIndex==2){c.mobile_apn.value="ibox.tim.it"}else{if(c.isp_type10.selectedIndex==3){c.mobile_apn.value="web.omnitel.it"}else{if(c.isp_type10.selectedIndex==4){c.mobile_apn.value="internet.wind"}else{choose_other()}}}}}}else{if(a==10){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type11.selectedIndex==0){c.mobile_apn.value="portalmmm.nl"}else{if(c.isp_type11.selectedIndex==1||c.isp_type11.selectedIndex==2||c.isp_type11.selectedIndex==3||c.isp_type11.selectedIndex==4){c.mobile_apn.value="internet"}else{if(c.isp_type11.selectedIndex==5){c.mobile_apn.value="live.vodafone.com"}else{if(c.isp_type11.selectedIndex==6){c.mobile_apn.value="office.vodafone.nl"}else{choose_other()}}}}}else{if(a==11){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type12.selectedIndex==0){c.mobile_apn.value="live.vodafone.com"}else{if(c.isp_type12.selectedIndex==1){c.mobile_apn.value="internet"}else{if(c.isp_type12.selectedIndex==2){c.mobile_apn.value="www.vodafone.net.nz"}else{choose_other()}}}}else{if(a==12){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type13.selectedIndex==0||c.isp_type13.selectedIndex==1){c.mobile_apn.value="internet.netcom.no"}else{if(c.isp_type13.selectedIndex==2){c.mobile_apn.value="internet.telenor.no"}else{if(c.isp_type13.selectedIndex==3){c.mobile_apn.value="internet.ventelo.no"}else{choose_other()}}}}else{if(a==13){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type14.selectedIndex==0){c.mobile_apn.value="tim.pe"}else{choose_other()}}else{if(a==14){c.mobile_access_num.selectedIndex=0;c.hid_access_number.value="*99#";if(c.isp_type15.selectedIndex==0){c.mobile_apn.value="internet.mts.ru";c.mobile_login.value="mts";c.mobile_passwd.value="mts"}else{if(c.isp_type15.selectedIndex==1){c.mobile_apn.value="internet";c.mobile_login.value="gdata";c.mobile_passwd.value="gdata"}else{if(c.isp_type15.selectedIndex==2){c.mobile_apn.value="internet.beeline.ru";c.mobile_login.value="beeline";c.mobile_passwd.value="beeline"}else{if(c.isp_type15.selectedIndex==3){c.mobile_apn.value="internet.TELE2.ru"}else{if(c.isp_type15.selectedIndex==4){c.mobile_login.value="mobile";c.mobile_passwd.value="internet";c.mobile_access_num.selectedIndex=6;c.hid_access_number.value="#777"}}}}}}else{if(a==15){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type16.selectedIndex==0){c.mobile_apn.value="sunsurf"}else{if(c.isp_type16.selectedIndex==1){c.mobile_apn.value="internet"}else{if(c.isp_type16.selectedIndex==2){c.mobile_apn.value="shwap"}else{choose_other()}}}}else{if(a==16){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type17.selectedIndex==0||c.isp_type17.selectedIndex==1||c.isp_type17.selectedIndex==3){c.mobile_apn.value="internet"}else{if(c.isp_type17.selectedIndex==2){c.mobile_apn.value="vdata"}else{choose_other()}}}else{if(a==17){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type18.selectedIndex==0||c.isp_type18.selectedIndex==1){c.mobile_apn.value="internet.tele2.se"}else{if(c.isp_type18.selectedIndex==2){c.mobile_apn.value="internet.vodafone.net"}else{if(c.isp_type18.selectedIndex==3){c.mobile_apn.value="services.vodafone.net"}else{if(c.isp_type18.selectedIndex==4){c.mobile_apn.value="online.telia.se"}else{if(c.isp_type18.selectedIndex==5){c.mobile_apn.value="internet.djuice.se"}else{choose_other()}}}}}}else{if(a==18){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";c.mobile_apn.value="internet";if(c.isp_type19.selectedIndex==7){choose_other()}}else{if(a==19){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type20.selectedIndex==0){c.mobile_apn.value="three.co.uk"}else{if(c.isp_type20.selectedIndex==1){c.mobile_apn.value="3internet"}else{if(c.isp_type20.selectedIndex==2){c.mobile_apn.value="airtel-ci-gprs.com"}else{if(c.isp_type20.selectedIndex==3){c.mobile_apn.value="pepper"}else{if(c.isp_type20.selectedIndex==4){c.mobile_apn.value="wap.o2.co.uk";c.mobile_login.value="o2wap";c.mobile_passwd.value="password"}else{if(c.isp_type20.selectedIndex==5){c.mobile_apn.value="mobile.o2.co.uk";c.mobile_login.value="faster";c.mobile_passwd.value="web"}else{if(c.isp_type20.selectedIndex==6){c.mobile_apn.value="bb-m.o2.co.uk";c.mobile_login.value="o2bb";c.mobile_passwd.value="password"}else{if(c.isp_type20.selectedIndex==7){c.mobile_apn.value="payandgo.o2.co.uk"}else{if(c.isp_type20.selectedIndex==8||c.isp_type20.selectedIndex==9){c.mobile_apn.value="orangeinternet"}else{if(c.isp_type20.selectedIndex==10){c.mobile_apn.value="general.t-mobile.uk"}else{if(c.isp_type20.selectedIndex==11){c.mobile_apn.value="prepay.tesco-mobile.com"}else{if(c.isp_type20.selectedIndex==12){c.mobile_apn.value="goto.virginmobile.uk"}else{if(c.isp_type20.selectedIndex==13){c.mobile_apn.value="internet";c.mobile_login.value="web";c.mobile_passwd.value="web"}else{if(c.isp_type20.selectedIndex==14){c.mobile_apn.value="pp.vodafone.co.uk"}else{choose_other()}}}}}}}}}}}}}}}else{if(a==20){c.mobile_access_num.selectedIndex=1;c.hid_access_number.value="*99***1#";if(c.isp_type21.selectedIndex==0||c.isp_type21.selectedIndex==2){c.mobile_apn.value="isp.cingular"}else{if(c.isp_type21.selectedIndex==1){c.mobile_apn.value="internet"}else{choose_other()}}}}}}}}}}}}}}}}}}}}}}}check_default()}function check_mobile_conn(b){var a=b.WRegion.selectedIndex+1;b.hid_mobile_isp.value=document.getElementsByName("isp_type"+a)[0].value;if(mobile_status=="3"&&b.hid_mobile_isp.value!="Other"){b.hid_puk_code.value=b.pin_error_puk_code.value}else{b.hid_puk_code.value=b.puk_code.value}return true};