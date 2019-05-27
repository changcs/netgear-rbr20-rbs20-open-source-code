
include $(TOPDIR)/rules.mk

PKG_NAME:=xagent
PKG_VERSION:=3.2.7

PKG_BUILD_DIR:=$(BUILD_DIR)/xagent-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/xagent
  SECTION:=arlo
  CATEGORY:=ARLO
  TITLE:=Netgear xagent
  DEPENDS:=+libpthread +curl +libopenssl +d2
endef

define Package/xagent/description
 Netgear arlo xagent
endef

define Build/Prepare
endef

define Build/Compile
endef

define Package/xagent/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/xagent $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/xagent_control $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/evsinkd2 $(1)/usr/bin

	$(INSTALL_DIR) $(1)/usr/share/ntgr/certs
	$(INSTALL_DATA) ./files/usr/share/ntgr/certs/ca-bundle-mega.crt $(1)/usr/share/ntgr/certs
    
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/xagent.init $(1)/etc/init.d/xagent

	$(INSTALL_DIR) $(1)/etc/xagent
	$(CP) -rp ./files/envswitch/* $(1)/etc/xagent

endef

$(eval $(call BuildPackage,xagent))
