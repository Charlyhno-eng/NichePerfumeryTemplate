import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Search as SearchIcon, AccountCircle } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "./StyledBadge";
import ProfileModal from "./ProfileModal";

type HeaderMenusProps = {
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  closeMenus: () => void;
};

const menuProps = {
  anchorOrigin: { vertical: "top" as const, horizontal: "right" as const },
  transformOrigin: { vertical: "top" as const, horizontal: "right" as const },
  keepMounted: true,
};

export default function HeaderMenus({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  closeMenus,
}: HeaderMenusProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleOpenProfileModal = () => {
    closeMenus();
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        open={isMobileMenuOpen}
        onClose={closeMenus}
        {...menuProps}
      >
        <MenuItem>
          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <StyledBadge badgeContent={4}>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleOpenProfileModal}>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
        </MenuItem>
      </Menu>

      <ProfileModal
        open={isProfileModalOpen}
        onClose={handleCloseProfileModal}
      />
    </>
  );
}
