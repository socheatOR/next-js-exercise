import { AppBar, Toolbar, Typography, MenuItem } from "@mui/material";
import Link from "next/link";
import AdbIcon from "@mui/icons-material/Adb";

function Navigate() {
  const pages = ["Staff", "new-staff", "File Upload"];
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          SATHAPANA
        </Typography>

        <MenuItem>
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            <Link href="/">List Staff</Link>
          </Typography>
        </MenuItem>

        <MenuItem>
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            <Link href="/list-file">File Upload</Link>
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
export default Navigate;
