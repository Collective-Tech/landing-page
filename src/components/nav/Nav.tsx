import React, { useEffect, useState } from "react";
import { Box, Container, Stack, useTheme } from "@mui/material";
import HeaderDesktop from "./NavBarDesktop";
import { colors } from "../../theme";

export type MenuItem = {
  name: string;
  path: string;
  external?: boolean;
};


export const Nav: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const theme = useTheme();
 

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsFixed(position > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Box
      component="header"
      sx={{
          background: colors.blue,
          borderBottom: '1px solid purple',
        backdropFilter: isFixed ? "blur(2px)" : undefined,
        // paddingBottom: theme.spacing(isFixed ? 2 : 4),
        paddingTop: theme.spacing(isFixed ? 2 : 4),
        position: "fixed",
        top: 0,
        transition: "all 0.25s ease-in-out",
        width: "100vw",
        zIndex: 99,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <HeaderDesktop />
        </Stack>
      </Container>
    </Box>
  );
}