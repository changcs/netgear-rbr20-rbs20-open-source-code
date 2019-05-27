#
#
#

include $(TOPDIR)/rules.mk

PKG_NAME:=libnice
PKG_VERSION:=0.1.10
PKG_BUILD_DIR:=$(BUILD_DIR)/libnice-$(PKG_VERSION)
#PKG_INSTALL:=1
PKG_LICENSE:=LGPLv2.1 & MPLv1.1

LOCAL_PKG_NAME_EXT:=libnice

include $(INCLUDE_DIR)/package.mk

CONFIGURE_ARGS+= --disable-gupnp

define Package/libnice
  SECTION:=utils
  CATEGORY:=ARLO
  TITLE:=LibNICE
  DEPENDS:= +glib2 +librt 
endef

define Package/libnice/description
 Libnice is an implementation of the IETF's Interactive Connectivity Establishment (ICE) standard (RFC 5245).
endef

TARGET_LDFLAGS += -L$(STAGING_DIR)/usr/lib/libintl-full/lib 
TARGET_LDFLAGS += -L$(STAGING_DIR)/usr/lib/libiconv-full/lib -liconv 

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	tar xf libnice-$(PKG_VERSION).tar.gz -C $(PKG_BUILD_DIR)/..
	$(call Build/Patch/Default)
	$(if $(PLATFORM_PATCH_DIR), $(call PatchDir,$(PKG_BUILD_DIR),$(PLATFORM_PATCH_DIR),))
	$(call Dni_Prepare_Ext,$(LOCAL_PKG_NAME_EXT))
endef

define Build/InstallDev
	$(MAKE) -C $(PKG_BUILD_DIR) DESTDIR="$1" install
endef

define Package/libnice/install
	$(MAKE) -C $(PKG_BUILD_DIR) DESTDIR="$1" install
endef

$(eval $(call BuildPackage,libnice))
