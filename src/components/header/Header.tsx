import React, { useEffect, useState } from "react";
import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import useIsDesktop from "../../hooks/useMedia";
import { HeaderMobile } from "./HeaderMobile";
import { PresentationSection } from "./HeaderDesktop";
import theme from "../../theme";


export const Header: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    
    return <><Box>
     
            {isMobile ? <HeaderMobile /> :<PresentationSection /> }
         
    </Box>
    </>
}