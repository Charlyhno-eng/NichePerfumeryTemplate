"use client";

import { useState } from "react";
import { Box, Divider } from "@mui/material";
import HeaderAppBar from "./HeaderAppBar";
import HeaderNav from "./HeaderNav";
import HeaderMenus from "./HeaderMenus";
import ProfileModal from "./ProfileModal";

export default function Header() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const closeMenus = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = () => {
    closeMenus();
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderAppBar
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
      <HeaderNav />
      <HeaderMenus
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        closeMenus={closeMenus}
      />
      <ProfileModal
        open={isProfileModalOpen}
        onClose={handleCloseProfileModal}
      />
      <Divider />
    </Box>
  );
}
