"use client";

import { useRouter } from "next/navigation";
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
      { label: "Nouveautés", href: "/decouvrir/nouveautes" },
      { label: "Les emblématiques", href: "/decouvrir/les-emblematiques" },
      { label: "Coffrets découverte", href: "/decouvrir/coffrets-decouverte" },
      { label: "Sélection cadeaux", href: "/decouvrir/selection-cadeaux" },
    ],
  },
  {
    label: "COLLECTIONS",
    submenu: [
      { label: "Nouveautés", href: "/decouvrir/nouveautes" },
      { label: "Mystères Olfactifs", href: "/collections/mysteres-olfactifs" },
      {
        label: "Évasions Olfactives",
        href: "/collections/evasions-olfactives",
      },
      { label: "Chocs Olfactifs", href: "/collections/chocs-olfactifs" },
      {
        label: "Expériences Olfactives",
        href: "/collections/experiences-olfactives",
      },
    ],
  },
  {
    label: "FRAGRANCES",
    submenu: [
      { label: "Tout savoir", href: "/fragrances/tout-savoir" },
      { label: "Extraits de parfum", href: "/fragrances/extraits-parfum" },
      { label: "Eaux de parfum", href: "/fragrances/eaux-parfum" },
      { label: "Coffrets découverte", href: "/decouvrir/coffrets-decouverte" },
      { label: "Coffrets cadeau", href: "/fragrances/coffrets-cadeau" },
    ],
  },
  {
    label: "LA MAISON",
    submenu: [
      { label: "Fondateurs", href: "/la-maison/fondateurs" },
      { label: "Philosophie", href: "/la-maison/philosophie" },
      { label: "Engagement", href: "/la-maison/engagement" },
    ],
  },
  {
    label: "POINTS DE VENTE",
    href: "/points-de-vente",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export default function HeaderNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);
  const router = useRouter();

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuLabel(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuLabel(null);
  };

  const handleRedirect = (href: string) => {
    handleClose();
    router.push(href);
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
      {navItems.map(({ label, submenu, href }) => (
        <Box key={label}>
          <Button
            onClick={
              submenu
                ? (e) => handleOpen(e, label)
                : href
                  ? () => router.push(href)
                  : undefined
            }
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
                  <MenuItem onClick={() => handleRedirect(item.href)}>
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "uppercase",
                        width: "100%",
                        fontWeight: 200,
                        textAlign: "center",
                      }}
                    >
                      {item.label}
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
