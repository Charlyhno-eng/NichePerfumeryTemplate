import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  SwipeableDrawer,
} from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "./StyledBadge";
import Link from "next/link";
import DrawerContent from "./DrawerContent";

type HeaderAppBarProps = {
  handleProfileMenuOpen: () => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function HeaderAppBar({
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}: HeaderAppBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "#333", boxShadow: "none" }}
      >
        <Toolbar sx={{ minHeight: 80, px: 2 }}>
          <Box
            sx={{
              width: { xs: "auto", md: 200 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: { xs: "1.8rem", sm: "2.2rem" },
                  cursor: "pointer",
                  lineHeight: 1.2,
                }}
              >
                Niche Perfumery
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              width: { xs: "auto", md: 200 },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <IconButton size="large" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => toggleDrawer(true)}
                aria-label="Ouvrir le panier"
              >
                <StyledBadge badgeContent={4}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <IconButton
                size="large"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        slotProps={{
          paper: { sx: { width: "25vw", maxWidth: "25vw" } },
        }}
      >
        <DrawerContent onClose={() => toggleDrawer(false)} width="25vw" />
      </SwipeableDrawer>
    </>
  );
}
