#
#
#

include $(TOPDIR)/rules.mk

PKG_NAME:=libjsonn
PKG_VERSION:=7.6.1

PKG_BUILD_DIR:=$(BUILD_DIR)/libjsonn-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

define Package/libjsonn
  SECTION:=utils
  CATEGORY:=ARLO
  TITLE:=JSON library
endef

define Package/libjsonn/description
 JSON library
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	unzip ./libjson_$(PKG_VERSION).zip -d $(PKG_BUILD_DIR)
	cat patches/*.patch | (cd $(PKG_BUILD_DIR); patch -p0 )
endef

define Build/Compile
	unset CXXFLAGS; CXX=$(TARGET_CXX) AR=$(TARGET_AR) SHARED=0 \
	$(MAKE) -C $(PKG_BUILD_DIR)/libjson BUILD_TYPE="debug" exec_prefix=$(PKG_INSTALL_DIR) prefix=$(PKG_INSTALL_DIR) all 
endef

define Build/InstallDev
	$(INSTALL_DIR) $(1)/usr/include/libjson
	$(INSTALL_DIR) $(1)/usr/lib

	unset CXXFLAGS; CXX=$(TARGET_CXX) AR=$(TARGET_AR) SHARED=0 \
	$(MAKE) -C $(PKG_BUILD_DIR)/libjson BUILD_TYPE="debug" exec_prefix="$(1)/usr/lib" prefix="$(1)/usr/" install
	
	$(INSTALL_DATA) $(PKG_BUILD_DIR)/libjson/libjson*.a $(1)/usr/lib
endef

define Package/libjsonn/install
endef

$(eval $(call BuildPackage,libjsonn))
