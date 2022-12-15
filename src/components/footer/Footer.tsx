import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  styled,
  // TextField,
  Typography,
  useTheme,
  Button
} from "@mui/material";
import Discord from '../../Assets/Discord.svg';
import Twitter from '../../Assets/Twit.svg';
import Mail from '../../Assets/Mail.svg';



import theme, { colors } from "../../theme";

const StyledLogo = styled("img")({
  height: "auto",
  objectFit: "contain",
  transition: "opacity 0.25s ease-in-out",
  width: 200,
  "&:hover": {
    opacity: 0.8,
  },
});

const FooterTitle = {
  color: colors.gray,
  fontSize: "1rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
};

const FooterLink = styled(Stack)({
  cursor: "pointer",
  height: theme.spacing(0),
  opacity: 0.6,
  transition: "opacity 0.25s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
});

export type MenuItem = {
  name: string;
  path?: string;
  external?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Home",
    path: "/#/hire",
  },
  {
    name: "About us",
    path: "/#/join",
  },
  {
    name: "Services",
  },
  {
    name: "Estimate Project"

  },
];

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        // px: 4,
        width: "100vw",
        height: "30vh",
        bgcolor: colors.blue,
      

      }}
    >
      
      <Container sx={{ display: 'flex', flexDirection: 'row', height: "20vh",  marginTop: '-20px', marginBottom: '30px'}}>
        <Container sx={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        <Stack spacing={3} mt={4} height={"193px"}>
          LOGO
          
          <Typography component='div' sx={{ display: 'flex', flexDirection: 'row', marginTop: '80px'}}>
          <img height={'38px'} src={Discord} alt='discord' />
              <img height={'38px'} src={Twitter} alt='twitter' />
              <img height={'38px'}  src={Mail} alt='twitter' />
          </Typography>
        
</Stack>
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column',  width: '200px' }}>
        <Typography component="h2" variant="h6" sx={{ ...FooterTitle }}>
                  The Collective
                </Typography>
                <Stack spacing={3} mt={4} height={"193px"}>
                  {MENU_ITEMS.map((item: MenuItem, index) => {
                    return (
                      <Link
                        href={item.path}
                        target={item.external ? "_blank" : undefined}
                        key={index}
                      >
                        <FooterLink sx={{ justifyContent: "center" }}>
                          <Typography
                            variant="body1"
                            lineHeight={1}
                            color={colors.white}
                          >
                            {item.name}
                          </Typography>
                        </FooterLink>
                      </Link>
                    );
                  })}
                </Stack>

        </Container>
        <Stack
              
              sx={{
                display: "inline-flex",
                [theme.breakpoints.down("lg")]: { width: "100%" },
              }}
            >
              <Typography variant="h6" sx={{ color: colors.gray,
  fontSize: "48px",
  letterSpacing: "1px",
            textTransform: "uppercase",     }}>
Build your dream today              </Typography>
              <Link
                target="_blank"
                rel="noredirect"
                underline="none"
              >
                <Button variant="outlined" size="small" sx={{backgroundColor: '#474267'}}>
                  Get a quote
                </Button>
          </Link>
         
        </Stack>
        
      </Container>
      <Typography variant="body1" color={colors.gray} sx={{marginLeft: '80%'}}>
            © 2022 The Collective
          </Typography>
    </Box>
  );
};