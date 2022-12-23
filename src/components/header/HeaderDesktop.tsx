import React from 'react'
import {
    Box,
    Container,
    Grid,
    Stack,
    styled,
    Typography,
    Button,
    Link,
} from '@mui/material'
import useIsDesktop from '../../hooks/useMedia'
import { colors } from '../../theme'

const PresentationSectionContainer = styled(Box)({
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    background: colors.blue,
    // paddingTop: '20px'
})
const MenuItemButton = styled(Typography)({
    cursor: 'pointer',
    fontSize: 17,
})

export const PresentationSection: React.FC = () => {
    const isDesktop = useIsDesktop()

    return (
        <PresentationSectionContainer>
            <Container maxWidth="lg" sx={{ position: 'center' }}>
                <Grid
                    container
                    spacing={1}
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '90vh',
                    }}
                >
                    <Grid
                        item
                        sx={{
                            justifyContent: 'flex-start',
                            alignItems: 'center',

                            alignSelf: 'center',
                            display: 'flex',
                        }}
                        mt={isDesktop ? '120px' : 0}
                    >
                        <Stack maxWidth={1000}>
                            <>
                                <>
                                    <Typography
                                        sx={{
                                            fontSize: '56px',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                        }}
                                        textAlign={
                                            isDesktop ? 'initial' : 'center'
                                        }
                                    >
                                        Build the future of the internet with
                                        our on-demand team!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '20px',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            opacity: '70%',
                                            color: colors.white,
                                        }}
                                        textAlign={
                                            isDesktop ? 'initial' : 'center'
                                        }
                                    >
                                        Get in touch with us. We'd love to hear
                                        from you.
                                    </Typography>
                                </>
                            </>
                            <Grid
                                container
                                gap={5}
                                mt={isDesktop ? '40px' : 0}
                                flexDirection={isDesktop ? 'row' : 'column'}
                                alignSelf={'center'}
                                justifyContent={
                                    isDesktop ? 'initial' : 'center'
                                }
                                sx={{
                                    width: '220px',
                                }}
                            >
                                <Grid item>
                                    <Button
                                        href="/#/estimate"
                                        variant="outlined"
                                        sx={{
                                            border: '1px solid #FFFFFF',
                                            backgroundColor: '#474267',
                                        }}
                                    >
                                        Lets Talk!
                                    </Button>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>
                    <Typography
                        sx={{
                            display: 'flex',
                            alignSelf: 'center',
                            opacity: '50%',
                            fontSize: '220px',
                            WebkitTextFillColor: 'transparent',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: colors.gray,
                            transform: 'rotate(5deg)',
                            marginTop: '-2px',
                            marginLeft: '80px',
                        }}
                    >
                        Collective
                    </Typography>
                </Grid>
            </Container>
        </PresentationSectionContainer>
    )
}
