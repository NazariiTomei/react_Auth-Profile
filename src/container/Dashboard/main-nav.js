import React, { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileNav } from "./MobileNav";
import { Grid, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import { paths } from "@/paths";
// import Logo from "@/components/core/logo";
// import { truncateString } from "@/lib/helper";
import { paths } from "../../utils/path";
import { Logo } from "../../component/logo";
import { truncateString } from "../../utils/helper";

export function MainNav() {
  // const { fullName } = useSelector((store) => store.auth);

  const fullName = "My Name is Sajjan";
  const [openNav, setOpenNav] = useState(false);

  return (
    <Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid var(--mui-palette-divider)",
          backgroundColor: "var(--mui-palette-background-paper)",
          position: "sticky",
          top: 0,
          zIndex: "var(--mui-zIndex-appBar)",
          display: { lg: "none" },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={() => setOpenNav(true)}
              sx={{ display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              sx={{ p: 1, display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Box
                // component={Link}
                href={paths.private.dashboard}
                sx={{ display: "block", width: "fit-content" }}
              >
                <Logo emblem color="dark" />
              </Box>
              <Typography variant="h6">
                {truncateString(fullName, 20)}
              </Typography>
            </Grid>
          </Stack>
        </Stack>
      </Box>
      <MobileNav onClose={() => setOpenNav(false)} open={openNav} />
    </Fragment>
  );
}
