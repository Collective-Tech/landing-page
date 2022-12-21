import React from 'react'
import {
    Box,
    Container,
    Link,
    Stack,
    styled,
    Typography,
    useTheme,
    Button,
    Grid,
} from '@mui/material'
import discord from '../../Assets/Discord.svg'
import Twitter from '../../Assets/Twit.svg'
import Collect from '../../Assets/Collect.svg'
import mail from '../../Assets/Mail.svg'

import theme, { colors } from '../../theme'

const FooterTitle = styled(Typography)({
    color: colors.gray,
    fontSize: '1rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
})

const FooterLink = styled(Stack)({
    cursor: 'pointer',
    height: theme.spacing(0),
    opacity: 0.6,
    transition: 'opacity 0.25s ease-in-out',
    '&:hover': {
        opacity: 1,
    },
})

export type MenuItem = {
    name: string
    path?: string
    external?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About us',
        path: '/about',
    },
    {
        name: 'Services',
    },
    {
        name: 'Estimate Project',
    },
]

const StyledLogo = styled('img')({
    height: 'auto',
    objectFit: 'contain',
    transition: 'opacity 0.25s ease-in-out',
    width: 200,
    '&:hover': {
        opacity: 0.8,
    },
})

export const FooterDesktop: React.FC = () => {
    const theme = useTheme()

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 4,
                bgcolor: colors.blue,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} lg={4}>
                        <Link href="/">
                            <StyledLogo src={Collect} alt="Logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Grid container flexDirection="row" spacing={4}>
                            <Grid item xs={6} sx={{ marginLeft: '50%' }}>
                                <FooterTitle variant="h6">
                                    The Collective
                                </FooterTitle>
                                <Stack spacing={3} mt={4}>
                                    {MENU_ITEMS.map((item: MenuItem, index) => {
                                        return (
                                            <Link href={item.path} key={index}>
                                                <FooterLink
                                                    sx={{
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        lineHeight={1}
                                                        color={colors.white}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </FooterLink>
                                            </Link>
                                        )
                                    })}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        sx={{
                            display: 'flex',
                            // justifyContent: "stretch",
                            [theme.breakpoints.up('md')]: {
                                justifyContent: 'flex-end',
                            },
                        }}
                    >
                        <Stack
                            spacing={3}
                            sx={{
                                display: 'inline-flex',
                                [theme.breakpoints.down('lg')]: {
                                    width: '100%',
                                },
                            }}
                        >
                            <FooterTitle variant="h6">
                                Build Your Dream Today
                            </FooterTitle>
                            <Link
                                target="_blank"
                                rel="noredirect"
                                underline="none"
                            >
                                <Button
                                    sx={{
                                        border: '1px solid #FFFFFF',
                                        backgroundColor: '#474267',
                                    }}
                                    variant="outlined"
                                    size="small"
                                >
                                    Get a quote
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <hr style={{ marginTop: '20px' }} />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box width={theme.spacing(3)} sx={{ display: 'flex' }}>
                    <img
                        height={'28px'}
                        style={{ marginRight: '10px' }}
                        src={discord}
                        alt="discord"
                    />
                    <img
                        height={'28px'}
                        style={{ marginRight: '10px' }}
                        src={Twitter}
                        alt="twitter"
                    />
                    <img src={mail} alt="twitter" />
                </Box>

                <Typography variant="body1" color={colors.gray}>
                    © 2022 The Collective
                </Typography>
            </Container>
        </Box>
    )
}
