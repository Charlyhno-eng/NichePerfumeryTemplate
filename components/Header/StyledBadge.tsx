import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export default function StyledBadge(props: React.ComponentProps<typeof Badge>) {
  const CustomBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#333",
      color: "#fff",
    },
  }));

  return <CustomBadge {...props} />;
}
