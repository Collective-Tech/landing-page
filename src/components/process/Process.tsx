import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { colors } from '../../theme'
import Intro from '../../Assets/Intro.svg'
import Develop from '../../Assets/Develop.svg'
import Launch from '../../Assets/Launch.svg'
import useIsDesktop from '../../hooks/useMedia'

const benefits = [
    {
        slug: 'Intro',

        icon: Intro,
        title: 'Intro',
        description: 'Lorem Ipsum',
    },
    {
        slug: 'tech',

        icon: Develop,
        title: 'Develop',
        description: 'Lorem Ipsum',
    },
    {
        slug: 'coordination',

        icon: Launch,
        title: 'Launch',
        description: 'Lorem Ipsum',
    },
]

export const Process: React.FC = () => {
    const isDesktop = useIsDesktop()
    return (
        <Box
            mt={[16, 24, 32]}
            position="relative"
            sx={{ bgcolor: colors.white }}
        >
            <Container
                maxWidth="lg"
                sx={{ position: 'relative', marginTop: '-150px' }}
            >
                <Typography
                    variant="h6"
                    component="h2"
                    textTransform="uppercase"
                    textAlign="center"
                    letterSpacing={2}
                    sx={{
                        color: colors.black,
                    }}
                    mb={isDesktop ? '-20px' : 0}
                    pt={isDesktop ? 0 : 5}
                    pb={isDesktop ? 0 : 5}
                >
                    How we work.
                </Typography>
                <Typography
                    variant="h6"
                    component="h2"
                    textTransform="uppercase"
                    textAlign="center"
                    letterSpacing={2}
                    sx={{
                        color: colors.black,
                        opacity: '70%',
                        fontSize: '15px',
                    }}
                    mb={isDesktop ? '-20px' : 0}
                    pb={isDesktop ? 0 : 5}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    ornare cursus sed nunc eget dictum Sed ornare cursus sed
                    nunc eget dictumd nunc eget dictum Sed ornare cursus sed
                    nunc eget dictum
                </Typography>
                <Grid
                    container
                    justifySelf="center"
                    justifyContent="center"
                    mt={isDesktop ? 8 : 0}
                    pb={10}
                >
                    {benefits.map((benefit) => {
                        return (
                            <Grid item key={benefit.slug} xs={12} sm={6} lg={3}>
                                <Stack
                                    //   px={3}
                                    py={8}
                                    direction="column"
                                    spacing={3}
                                    sx={{
                                        borderRadius: '24px',
                                        height: '90%',
                                        bgcolor: colors.light_gray,
                                        marginRight: '15px',
                                    }}
                                >
                                    <img
                                        src={benefit.icon}
                                        alt={benefit.slug}
                                        height={50}
                                        width="auto"
                                    />
                                    <Typography
                                        sx={{
                                            color: colors.black,
                                            fontSize: '25px',
                                        }}
                                        variant="h6"
                                        textAlign="center"
                                    >
                                        {benefit.title}
                                    </Typography>
                                    <Typography
                                        sx={{ color: colors.black }}
                                        variant="body1"
                                        lineHeight={1.5}
                                        textAlign="center"
                                    >
                                        {benefit.description}
                                    </Typography>
                                </Stack>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}
