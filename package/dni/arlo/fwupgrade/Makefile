
include $(TOPDIR)/rules.mk

PKG_NAME:=fwupgrade
PKG_VERSION:=1.0.0
PKG_RELEASE:=1

PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

PKG_BUILD_PARALLEL:=1


define Package/fwupgrade
  SECTION:=fwupgrade
  CATEGORY:=ARLO
  TITLE:=fwupgrade
  DEPENDS:=+libpthread +librt +libc +libcrypto +libcurl +libssl +libstdc +libz +libstdc++ +libstdcpp
endef


define Package/fwupgrade/description
 Netgear camera upgrade
endef


define Build/Prepare
endef

define Build/Compile
endef

define Package/fwupgrade/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) ./files/usr/bin/fwupgrade $(1)/usr/bin/
endef


$(eval $(call BuildPackage,fwupgrade))


