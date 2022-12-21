import {
    Box,
    styled,
    Typography,
    Container,
    Grid,
    Stack,
    TextField,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import useIsDesktop from '../../hooks/useMedia'
import { colors } from '../../theme'
import Frame from '../../Assets/Frame.png'
import Right from '../../Assets/Right.png'
export default function Form() {
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string)
    }
    const isDesktop = useIsDesktop()
    const SectionContainer = styled(Box)({
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        background: colors.blue,
    })
    return (
        <>
            <SectionContainer>
                <Container maxWidth="sm">
                    <img src={Right} alt="test" />
                    <img src={Frame} alt="test" />

                    <Grid
                        container
                        spacing={1}
                        sx={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            minHeight: '80vh',
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
                                            Work With Us
                                        </Typography>
                                        <hr style={{ width: '100%' }} />
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
                                            Tell us about your project and how
                                            we can help.
                                        </Typography>
                                    </>
                                </>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}
                        >
                            <Grid container>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-basic"
                                        label="Your Name "
                                        variant="standard"
                                        sx={{ color: colors.purple }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-basic"
                                        label="Your Orginization"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="standard-basic"
                                        label="Your Email"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl
                                        variant="standard"
                                        sx={{
                                            width: '64%',
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Your Budget
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>
                                                Twenty
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Thirty
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                alignItems: 'center',
                                alignSelf: 'center',
                            }}
                        >
                            <TextField
                                id="standard-basic"
                                label="Write Your Proposal Here"
                                variant="standard"
                                sx={{ width: '43vw' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </SectionContainer>
        </>
    )
}
