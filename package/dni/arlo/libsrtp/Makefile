#
# Copyright (C) 2014 OpenWrt.org
# Copyright (C) 2011 Victor Seva <linuxmaniac@torreviejawireless.org>
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

PKG_NAME:=libsrtp
PKG_VERSION:=1.5.2
PKG_RELEASE:=0

#PKG_SOURCE_PROTO:=git
#PKG_SOURCE_URL:=https://github.com/cisco/libsrtp.git
#PKG_SOURCE_SUBDIR:=$(PKG_NAME)-$(PKG_VERSION)
#PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION)-$(PKG_SOURCE_VERSION).tar.gz

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)
PKG_INSTALL:=1

LOCAL_PKG_NAME_EXT:=libsrtp

PKG_LICENSE:=BSD-3-Clause
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=Jiri Slachta <slachta@cesnet.cz>

include $(INCLUDE_DIR)/package.mk

TARGET_CFLAGS += $(FPIC) -DDEV_URANDOM
CONFIGURE_ARGS += \
	--disable-kernel-linux \
	--enable-debug \
	--enable-generic-aesicm \
	--enable-openssl \
	--enable-syslog \
	--enable-stdout \
	--disable-console \
	--disable-gdoi

define Package/libsrtp
  SUBMENU:=Telephony
  SECTION:=libs
  CATEGORY:=ARLO
  TITLE:=Secure Real-time Transport Protocol (SRTP) library
  URL:=http://sourceforge.net/projects/srtp
  DEPENDS:=+libpcap +libopenssl
endef

define Package/libsrtp/description
Open-source implementation of the Secure Real-time Transport
Protocol (SRTP) originally authored by Cisco Systems, Inc.
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	tar -xf libsrtp-$(PKG_VERSION).tar.gz -C $(PKG_BUILD_DIR)/../
	$(call Build/Patch/Default)
	$(if $(PLATFORM_PATCH_DIR), $(call PatchDir,$(PKG_BUILD_DIR),$(PLATFORM_PATCH_DIR),))
	$(call Dni_Prepare_Ext,$(LOCAL_PKG_NAME_EXT))
endef

define Build/Compile
	$(call Build/Compile/Default, shared_library libsrtp.a)
endef

define Build/InstallDev
 	
	$(INSTALL_DIR) $(1)/usr/include
	$(CP) $(PKG_INSTALL_DIR)/usr/include/srtp $(1)/usr/include/
	
	$(INSTALL_DIR) $(1)/usr/lib
	$(CP) $(PKG_INSTALL_DIR)/usr/lib/libsrtp.{a,so}* $(1)/usr/lib/

	$(INSTALL_DIR) $(1)/usr/lib/pkgconfig
	$(CP) $(PKG_INSTALL_DIR)/usr/lib/pkgconfig/libsrtp.pc $(1)/usr/lib/pkgconfig/
endef

define Package/libsrtp/install
	$(INSTALL_DIR) $(1)/usr/lib
	$(CP) $(PKG_INSTALL_DIR)/usr/lib/libsrtp.so.* $(1)/usr/lib/
endef

$(eval $(call BuildPackage,libsrtp))

