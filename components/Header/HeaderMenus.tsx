import { useState } from "react";
import { IconButton, Menu, MenuItem, SwipeableDrawer } from "@mui/material";
import { Search as SearchIcon, AccountCircle } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "./StyledBadge";
import ProfileModal from "./ProfileModal";
import DrawerContent from "./DrawerContent";

type HeaderMenusProps = {
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  closeMenus: () => void;
};

const menuProps = {
  anchorOrigin: { vertical: "top", horizontal: "right" },
  transformOrigin: { vertical: "top", horizontal: "right" },
  keepMounted: true,
} as const;

export default function HeaderMenus({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  closeMenus,
}: HeaderMenusProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenProfileModal = () => {
    closeMenus();
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
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
        <MenuItem onClick={() => toggleDrawer(true)}>
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

      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        ModalProps={{ sx: { zIndex: 1400 } }}
        slotProps={{
          paper: { sx: { width: "100vw", maxWidth: "100vw" } },
        }}
      >
        <DrawerContent onClose={() => toggleDrawer(false)} width="100vw" />{" "}
      </SwipeableDrawer>

      <ProfileModal
        open={isProfileModalOpen}
        onClose={handleCloseProfileModal}
      />
    </>
  );
}
