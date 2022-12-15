import React from "react";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { colors } from "../../theme";
import Coding from '../../Assets/Coding.png';
import plan from '../../Assets/plan.png';
import rocket from '../../Assets/Coding.png';
import useIsDesktop from "../../hooks/useMedia";

const benefits = [
  {
    slug: "Intro",
   
    icon: Coding,
    title: "Intro",
    description:
      "Lorem Ipsum",
  },
  {
    slug: "tech",
   
    icon: plan,
    title: "Develop",
    description:
    "Lorem Ipsum"
  },
  {
    slug: "coordination",
 
    icon: rocket,
    title: "Launch",
    description:
    "Lorem Ipsum"
  },

];

export const Process: React.FC = () => {
    const isDesktop = useIsDesktop();
  return (
    <Box mt={[16, 24, 32]} position="relative" >
      
      <Container maxWidth="lg" sx={{ position: "relative", marginTop: '-150px', paddingBottom: '50px' }}>
      <Typography
                                  sx={{
                                      fontSize: '27px',
                                      textAlign: 'center',
                      fontWeight: 'bold',
                                      color: colors.black
                                  }}
                                  textAlign={isDesktop ? "initial" : "center"}
                              >
                                  How we work?
                              </Typography><Typography
                                  sx={{
                                      fontSize: '15px',
                                      textAlign: 'center',
                                      fontWeight: 'bold',
                      opacity: '70%',
                      color: colors.black
                                  }}
                                  textAlign={isDesktop ? "initial" : "center"}
                              >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  

</Typography>
        <Grid container spacing={5} alignItems="center" justifyContent='center' mt={8}>
          {benefits.map((benefit) => {
            return (
              <Grid item key={benefit.slug} sx={{ display: 'flex', justifyItems: 'center', alignSelf: 'center'}} xs={12} sm={6} lg={3} >
                <Stack
                  px={3}
                  py={8}
                  direction="column"
                  spacing={3}
                        sx={{
                    bgcolor: colors.light_gray,
                    borderRadius: "24px",
                    height: "100%",
                    "&:hover": {
                      background: colors.gray,
                    },
                  }}
                >
                        <img
                    src={benefit.icon}
                    alt={benefit.slug}
                    height={'auto'}
                    width={'100%'}
                  />
                  <Typography sx={{color: colors.black}} variant="h6" component="h3" textAlign="center">
                    {benefit.title}
                  </Typography>
                        <Typography
                             sx={{color: colors.black}}
                    variant="body1"
                    lineHeight={1.5}
                    textAlign="center"
                  >
                    {benefit.description}
                  </Typography>
                 
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};