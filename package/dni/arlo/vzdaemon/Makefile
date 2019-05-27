
include $(TOPDIR)/rules.mk

PKG_NAME:=vzdaemon
PKG_VERSION:=1.9.8.0

PKG_BUILD_DIR:=$(BUILD_DIR)/vzdaemon-$(PKG_VERSION)
#PKG_INSTALL:=1
LOCAL_PKG_NAME_EXT:=vzdaemon

include $(INCLUDE_DIR)/package.mk

define Package/vzdaemon
  SECTION:=arlo
  CATEGORY:=ARLO
  TITLE:=vzdaemon
  DEPENDS:=+libpthread +curl +libjsonn +libjpeg +libopenssl +alljoyn +libmicrohttpd \
           +libnice +libsrtp +libuuid +mp4v2 +libiconv-full +libintl-full \
           +d2 +xagent
endef

define Package/vzdaemon/description
 Netgear arlo vzdaemon
endef

define Build/Prepare
	$(CP) ./files/ $(PKG_BUILD_DIR)/
	$(call Build/Patch/Default)
	$(if $(PLATFORM_PATCH_DIR), $(call PatchDir,$(PKG_BUILD_DIR),$(PLATFORM_PATCH_DIR),))
	$(call Dni_Prepare_Ext,$(LOCAL_PKG_NAME_EXT))
endef

define Build/Compile
endef

define Package/vzdaemon/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/usr/bin/vzdaemon $(1)/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/usr/bin/msgsend $(1)/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/usr/bin/vzcmd $(1)/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/usr/bin/msgwps $(1)/usr/bin/

	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/arloen.sh $(1)/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/arlowpsmon.sh $(1)/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/arlowpshdlr.sh $(1)/usr/bin/

	$(INSTALL_DIR) $(1)/usr/share/ntgr/certs/
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/files/wowza.netgear.com_Certificate_Only.pem  $(1)/usr/share/ntgr/certs/

	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/vzdaemon.init $(1)/etc/init.d/vzdaemon

	$(INSTALL_DIR) $(1)/usr/sbin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/arlo-net-scan $(1)/usr/sbin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/files/restartsw/* $(1)/usr/sbin/
endef

$(eval $(call BuildPackage,vzdaemon))
