import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledBadge from "./StyledBadge";

type HeaderAppBarProps = {
  handleProfileMenuOpen: () => void;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function HeaderAppBar({
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}: HeaderAppBarProps) {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", color: "#333", boxShadow: "none" }}
    >
      <Toolbar sx={{ minHeight: 80 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "serif",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Niche Perfumery
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
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

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
