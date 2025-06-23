"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const navItems = [
  {
    label: "DÉCOUVRIR",
    submenu: [
      "Nouveautés",
      "Les emblématiques",
      "Coffrets découvertes",
      "Sélection cadeaux",
    ],
  },
  {
    label: "COLLECTIONS",
    submenu: [
      "Nouveautés",
      "Mystères Olfactifs",
      "Évasions Olfactives",
      "Chocs Olfactifs",
      "Expériences Olfactives",
    ],
  },
  {
    label: "FRAGRANCES",
    submenu: [
      "Tout savoir",
      "Extraits de parfum",
      "Eaux de parfum",
      "Coffrets découverte",
      "Coffrets cadeaux",
    ],
  },
  {
    label: "LA MAISON",
    submenu: ["Fondateurs", "Philosophie", "Engagement"],
  },
  {
    label: "POINTS DE VENTE",
  },
  {
    label: "CONTACT",
  },
];

export default function HeaderNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuLabel(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuLabel(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2.5,
        py: 1.5,
      }}
    >
      {navItems.map(({ label, submenu }) => (
        <Box key={label}>
          <Button
            onClick={submenu ? (e) => handleOpen(e, label) : undefined}
            sx={{
              color: "#333",
              textTransform: "uppercase",
              fontWeight: 200,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {label}
            {submenu && (
              <KeyboardArrowDownIcon sx={{ fontSize: "1rem", mt: "1px" }} />
            )}
          </Button>

          {submenu && (
            <Menu
              anchorEl={anchorEl}
              open={openMenuLabel === label}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              slotProps={{ paper: { sx: { width: "220px" } } }}
            >
              {submenu.map((item, idx) => (
                <Box key={idx}>
                  <MenuItem onClick={handleClose}>
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "uppercase",
                        width: "100%",
                        fontWeight: 200,
                        textAlign: "center",
                      }}
                    >
                      {item}
                    </Typography>
                  </MenuItem>
                  {idx < submenu.length - 1 && <Divider />}
                </Box>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );
}
