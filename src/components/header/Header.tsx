import React from "react";
import { Box, useMediaQuery } from "@mui/material";
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