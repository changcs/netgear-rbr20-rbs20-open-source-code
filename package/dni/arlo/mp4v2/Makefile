#
#
#

include $(TOPDIR)/rules.mk

PKG_NAME:=mp4v2
PKG_VERSION:=1.9.1
PKG_BUILD_DIR:=$(BUILD_DIR)/mp4v2-$(PKG_VERSION)
#PKG_INSTALL:=1
PKG_LICENSE:=MPLv1.1

LOCAL_PKG_NAME_EXT:=mp4v2

include $(INCLUDE_DIR)/package.mk

define Package/mp4v2
  SECTION:=utils
  CATEGORY:=ARLO
  TITLE:=mp4v2
  DEPENDS:=+libstdcpp
endef

define Package/mp4v2/description
  This library provides functions to read, create, and modify mp4 file
endef



define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	tar xf mp4v2-$(PKG_VERSION).tar.gz -C $(PKG_BUILD_DIR)/..
	$(call Build/Patch/Default)
	$(if $(PLATFORM_PATCH_DIR), $(call PatchDir,$(PKG_BUILD_DIR),$(PLATFORM_PATCH_DIR),))
	$(call Dni_Prepare_Ext,$(LOCAL_PKG_NAME_EXT))
endef

define Build/InstallDev
	$(MAKE) -C $(PKG_BUILD_DIR) DESTDIR="$1" install 
endef


define Package/mp4v2/install
	$(MAKE) -C $(PKG_BUILD_DIR) DESTDIR="$1" install-am 
#	$(INSTALL_DIR) $(1)/usr/lib
#	$(CP) $(PKG_INSTALL_DIR)/usr/lib/libmp4v2.so.* $(1)/usr/lib/
endef


$(eval $(call BuildPackage,mp4v2))
