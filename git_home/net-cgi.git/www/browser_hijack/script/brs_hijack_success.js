function initPage(){if((top.have_broadband=="1"||top.have_lte_flag=="1")&&top.multi_wan_mode=="multi"&&top.multi_wan_mode_ether=="0"){loadValue()}else{if(an_router_flag=="0"){if(wl_sectype==1){noPreSecurityInit()}else{preSecurityInit()}}else{if(wl_sectype==1&&wla_sectype==1){noPreSecurityInit()}else{preSecurityInit()}}}}function loadValue(){if(top.multi_wan_mode=="multi"){if(top.multi_wan_mode_ether=="0"){top.multi_wan_mode_ether="1";this.location.href="WIZ_failover_01.htm"}}}function preSecurityInit(){var b=document.getElementsByTagName("h2");var f=document.createTextNode(bh_congratulations);b[0].appendChild(f);var c=document.getElementsByTagName("p");var g=document.createTextNode(bh_connect_success_1);c[0].appendChild(g);if(wl_tooltip1==1||wla_tooltip1==1){var i=document.getElementById("key_tooltip_1");addTooltip(i)}var e=document.getElementById("network_name");var d;if(an_router_flag=="0"){d=document.createTextNode(bh_wirless_name)}else{if(an_router_flag=="1"){d=document.createTextNode("2.4GHz "+bh_wirless_name)}}e.appendChild(d);e=document.getElementById("network_name_5G");d=document.createTextNode("5GHz "+bh_wirless_name);e.appendChild(d);var h=document.getElementById("div_5G");var a=document.getElementById("passwd_5G");if(an_router_flag=="0"){h.style.display="none";a.style.display="none"}else{if(an_router_flag=="1"){h.style.display="";if(wl_sectype==wla_sectype&&wl_passphrase==wla_passphrase){a.style.display="none"}else{a.style.display=""}}}if(wl_tooltip1==1||wla_tooltip1==1){i=document.getElementById("key_tooltip_2");addTooltip(i)}if(wla_tooltip1==1){i=document.getElementById("key_tooltip_3");addTooltip(i)}initBtnsAction()}function noPreSecurityInit(){var d=document.getElementsByTagName("h1");var e=document.createTextNode(bh_congratulations);d[0].appendChild(e);var f=document.getElementsByTagName("p");var a=document.createTextNode(bh_connect_success_1);f[0].appendChild(a);if(an_router_flag=="0"){var c=document.getElementById("info_div_24");c.style.display="none"}else{var b=document.getElementById("info_div");b.style.display="none"}initBtnsAction()}function initBtnsAction(){var d=document.getElementById("btnsContainer_div1");if(d){if(top.is_ru_version==0){d.style.display="none"}else{if(master=="admin"){d.onclick=function(){return saveSettings()}}var e=d.getElementsByTagName("div");var c=document.createTextNode(bh_save_settings);e[0].appendChild(c)}}var b=document.getElementById("btnsContainer_div2");if(b){if(master=="admin"){b.onclick=function(){return printSucessPage()}}e=b.getElementsByTagName("div");c=document.createTextNode(bh_print_this);e[0].appendChild(c)}var a=document.getElementById("btnsContainer_div3");var f=document.getElementById("btnsContainer_div4");if(a&&f){if(cd_less_download==0){if(a){if(master=="admin"){a.onclick=function(){return toInternet()}}e=a.getElementsByTagName("div");c=document.createTextNode(bh_take_to_internet);e[0].appendChild(c);f.style.display="none"}else{a.style.display="none";if(master=="admin"){f.onclick=function(){return toDownloadApps()}}e=f.getElementsByTagName("div");c=document.createTextNode(bh_next_mark);e[0].appendChild(c)}}}showFirmVersion("none")}function toDownloadApps(){this.location.href="BRS_download_apps.html"}function addTooltip(a){a.setAttribute("title",bh_rollover_help_text);a.className="tooltip"}function printSucessPage(){if(window.print){window.print()}else{alert(bh_not_support_print);return false}return true}function saveSettings(){var a=document.getElementsByTagName("form");var b=a[0];b.action="/brs_backup.cgi";b.submit_flag.value="";b.submit();return true}function toInternet(){var a=document.getElementsByTagName("form");var b=a[0];var c="width=960,height=800,menubar=yes,scrollbars=yes,toolbar=yes,status=yes,location=yes,resizable=yes";window.open("to_internet_no_auth.htm","brs_ng",c);return true}function click_here(){var a=document.getElementsByTagName("form")[0];a.click_flag.value="1";a.action="apply.cgi?/BRS_success.html timestamp="+ts;if(a.encoding){a.encoding="application/x-www-form-urlencoded"}else{if(a.enctype){a.enctype="application/x-www-form-urlencoded"}}a.submit_flag.value="hijack_success";a.submit();var b="width=960,height=800,menubar=yes,scrollbars=yes,toolbar=yes,status=yes,location=yes,resizable=yes";window.open("change_to_wireless.htm","chge_towl",b)}function XXXtoInternet(){var a="width=960,height=800,menubar=yes,scrollbars=yes,toolbar=yes,status=yes,location=yes,resizable=yes";window.open("BRS_netgear_success.html",null,a)}addLoadEvent(initPage);