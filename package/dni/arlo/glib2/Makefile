#
# Copyright (C) 2007-2015 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=glib2
PKG_VERSION:=2.44.1
PKG_RELEASE:=1

PKG_SOURCE:=glib-$(PKG_VERSION).tar.xz
PKG_BUILD_DIR:=$(BUILD_DIR)/glib-$(PKG_VERSION)
PKG_SOURCE_URL:=@GNOME/glib/2.44
PKG_MD5SUM:=83efba4722a9674b97437d1d99af79db

#PKG_BUILD_DEPENDS:=glib2/host libpthread zlib libintl libffi libiconv
PKG_BUILD_DEPENDS:= libpthread zlib libintl-full libffi libiconv-full
HOST_BUILD_DEPENDS:=libiconv-full/host libffi/host libintl-full/host 

PKG_INSTALL:=1
PKG_USE_MIPS16:=0

PKG_FIXUP:=autoreconf

HOST_BUILD_DIR:=$(BUILD_DIR_HOST)/glib-$(PKG_VERSION)
LOCAL_PKG_NAME_EXT:=glib2

include $(INCLUDE_DIR)/host-build.mk
include $(INCLUDE_DIR)/package.mk
#include $(INCLUDE_DIR)/nls.mk

define Package/glib2
  SECTION:=libs
  CATEGORY:=ARLO
  DEPENDS:= +zlib +libpthread +libffi +libattr +libiconv-full +libintl-full
  TITLE:=glib 2.0
  MAINTAINER:=Peter Wagner <tripolar@gmx.at>
  URL:=http://www.gtk.org/
endef

define Package/glib2/description
  The GLib library of C routines
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	$(PKG_UNPACK)
	$(call Build/Patch/Default)
	$(if $(PLATFORM_PATCH_DIR), $(call PatchDir,$(PKG_BUILD_DIR),$(PLATFORM_PATCH_DIR),))
	$(call Dni_Prepare_Ext,$(LOCAL_PKG_NAME_EXT))
endef

HOST_CONFIGURE_ARGS += \
	--disable-selinux

CONFIGURE_ARGS += \
	--enable-shared \
	--enable-static \
	--enable-debug=no \
	--disable-selinux \
	--disable-fam \
	--with-libiconv=gnu

CONFIGURE_VARS += \
	glib_cv_stack_grows=no \
	glib_cv_uscore=no \
	ac_cv_path_GLIB_GENMARSHAL=$(STAGING_DIR_HOST)/bin/glib-genmarshal \
	ac_cv_func_mmap_fixed_mapped=yes \
	ac_cv_func_posix_getpwuid_r=yes \
	ac_cv_func_posix_getgrgid_r=yes

TARGET_CFLAGS += -I "$(STAGING_DIR)/usr/lib/libiconv-full/include" 
TARGET_CFLAGS += -I "$(STAGING_DIR)/usr/lib/libintl-full/include" 
TARGET_LDFLAGS += -L$(STAGING_DIR)/usr/lib/libiconv-full/lib 
TARGET_LDFLAGS += -L$(STAGING_DIR)/usr/lib/libintl-full/lib 

HOST_CFLAGS += -I "$(STAGING_DIR_HOST)/usr/lib/libiconv-full/include" 
HOST_CFLAGS += -I "$(STAGING_DIR_HOST)/usr/lib/libintl-full/include" 
HOST_LDFLAGS += -L$(STAGING_DIR_HOST)/usr/lib/libiconv-full/lib 
HOST_LDFLAGS += -L$(STAGING_DIR_HOST)/usr/lib/libintl-full/lib 

PKG_BUILD_PARALLEL:=1

define Build/InstallDev
	$(INSTALL_DIR) $(1)/usr/include
	$(CP) \
		$(PKG_INSTALL_DIR)/usr/include/glib-2.0 \
		$(1)/usr/include/
	$(CP) \
		$(PKG_INSTALL_DIR)/usr/lib/glib-2.0/include/*.h \
		$(1)/usr/include/glib-2.0/
	$(CP) \
		$(PKG_INSTALL_DIR)/usr/include/gio-unix-2.0 \
		$(1)/usr/include/

	$(INSTALL_DIR) $(1)/usr/lib
	$(CP) \
		$(PKG_INSTALL_DIR)/usr/lib/glib-2.0 \
		$(1)/usr/lib/

	$(CP) \
		$(PKG_INSTALL_DIR)/usr/lib/*.{so*,a,la} \
		$(1)/usr/lib/

	$(INSTALL_DIR) $(1)/usr/lib/pkgconfig
	$(INSTALL_DATA) \
		$(PKG_INSTALL_DIR)/usr/lib/pkgconfig/*.pc \
		$(1)/usr/lib/pkgconfig

	$(INSTALL_DIR) $(2)/share/aclocal/
	$(INSTALL_DATA) \
		$(PKG_INSTALL_DIR)/usr/share/aclocal/*.m4  \
		$(2)/share/aclocal/
endef

define Package/glib2/install
	$(INSTALL_DIR) $(1)/usr/lib
	$(CP) \
		$(PKG_INSTALL_DIR)/usr/lib/*.so* \
		$(1)/usr/lib/
endef

$(eval $(call HostBuild))
$(eval $(call BuildPackage,glib2))
