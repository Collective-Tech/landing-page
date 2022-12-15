import React from "react";
import { Box, Container, Grid, Stack, Typography} from "@mui/material";
import { colors } from "../../theme";
import Blockchain from '../../Assets/Blockchain.svg';
import Tokenomics from '../../Assets/Tokenomics.svg';
import SYT from '../../Assets/SYT.svg';
import MVP from '../../Assets/MVP.svg';

const benefits = [
  {
    slug: "Intro",
   
    icon: Blockchain,
    title: "Blockchain",
    description:
            "Lorem Ipsum"
    },
  {
    slug: "tech",
   
    icon: Tokenomics,
    title: "Tokenomics",
    description:
      "Lorem Ipsum",
  },
  {
    slug: "coordination",
 
    icon: SYT,
    title: "Grants",
    description:
      "Lorem Ipsum",
    },
    {
        slug: "coordination",
     
        icon: MVP,
        title: "MVP",
        description:
          "Lorem Ipsum",
      },
    

];

export const SectionWWD: React.FC = () => {
  return (
    <Box mt={[16, 24, 32]} position="relative" sx={{bgcolor: colors.white}}>
      
      <Container maxWidth="lg" sx={{ position: "relative", marginTop: '-170px'}}>
        <Typography
                  variant="h6"
                  component="h2"
                  textTransform="uppercase"
                  textAlign="center"
                  letterSpacing={2}
                  sx={{
                      color: colors.black,
                      marginBottom: '-20px'
                  }}
        >
          What we do.
      
        </Typography>
              <Grid container justifySelf='center' mt={8}>
          {benefits.map((benefit) => {
            return (
              <Grid item key={benefit.slug} xs={12} sm={6} lg={3}>
                <Stack
                //   px={3}
                  py={8}
                  direction="column"
                  spacing={3}
                        sx={{
                    borderRadius: "24px",
                    height: "100%",
                  }}
                >
                        <img
                    src={benefit.icon}
                    alt={benefit.slug}
                    height={50}
                    width="auto"
                  />
                  <Typography sx={{color: colors.black, fontSize: '25px'}} variant="h6"  textAlign="center">
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