import { Box, styled, Typography, Grid, TextField, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { colors } from '../../theme'
import Frame from '../../Assets/Frame.png'
import Right from '../../Assets/Right.png'
export default function Form() {
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string)
    }
    const SectionContainer = styled(Box)({
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        background: colors.blue,
    })

    const FormInput = styled(TextField)({
        '& .css-171tsfm-MuiFormLabel-root-MuiInputLabel-root': {
            color: 'white',
        },
        '& .css-dyp27q-MuiInputBase-root-MuiInput-root:before ': {
            borderBottom: '1px solid white',
            color: 'white',
        },
        '& .css-dyp27q-MuiInputBase-root-MuiInput-root:after': {
            borderBottom: '2px solid purple',
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        marginTop: '30px',
        width: '100%',
    })

    return (
        <>
            <SectionContainer>
                <Box
                    justifyContent="space-evenly"
                    sx={{
                        paddingTop: '60px',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Typography component="div" maxWidth="sm">
                        <img src={Right} alt="test" />
                    </Typography>
                    <Grid>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{ marginLeft: '28%' }}
                        >
                            Work With Us
                        </Typography>
                        <hr />
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            gutterBottom
                            sx={{ marginLeft: '15%' }}
                        >
                            Tell us about your project and how we can help.
                        </Typography>

                        <form>
                            <Grid
                                container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',

                                    width: '100%',
                                }}
                            >
                                <Grid xs={12} item>
                                    <FormInput
                                        placeholder="Enter your name"
                                        label="Your Name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <FormInput
                                        type="email"
                                        placeholder="Enter your email"
                                        label="Your Email"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormInput
                                        placeholder="Enter your orginization"
                                        label="Your Orginization"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl
                                        variant="standard"
                                        sx={{
                                            borderBottom: '1px solid white',
                                            color: 'white',
                                            '.css-171tsfm-MuiFormLabel-root-MuiInputLabel-root':
                                                { color: 'white' },
                                            '.css-1or3es3-MuiFormLabel-root-MuiInputLabel-root':
                                                {
                                                    color: 'white',
                                                },
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                            marginTop: '30px',
                                            width: '100%',
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
                                            <MenuItem
                                                sx={{ color: 'black' }}
                                                value={10}
                                            >
                                                $0 - $10,000
                                            </MenuItem>
                                            <MenuItem
                                                sx={{ color: 'black' }}
                                                value={20}
                                            >
                                                $10,000 - $50,000
                                            </MenuItem>
                                            <MenuItem
                                                sx={{ color: 'black' }}
                                                value={30}
                                            >
                                                $50,000 - $100,000
                                            </MenuItem>
                                            <FormInput
                                                label="Write Your Proposal Here"
                                                variant="standard"
                                            />
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormInput
                                        label="Write Your Proposal Here"
                                        multiline
                                        variant="standard"
                                        sx={{
                                            width: '30vw',
                                            '& .css-wjf4vu-MuiInputBase-root-MuiInput-root:before':
                                                {
                                                    borderBottom:
                                                        '1px solid white',
                                                },

                                            '& .css-wjf4vu-MuiInputBase-root-MuiInput-root:after':
                                                {
                                                    borderBottom:
                                                        '2px solid purple',
                                                },
                                            '& .css-1mj32ne-MuiFormControl-root-MuiTextField-root':
                                                {
                                                    borderBottom:
                                                        '1px solid white',
                                                },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        href="/#/estimate"
                                        variant="outlined"
                                        sx={{
                                            border: '1px solid #FFFFFF',
                                            backgroundColor: '#474267',
                                            marginTop: '30px',
                                            width: '100%',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Typography component="div" maxWidth="sm">
                        <img src={Frame} alt="test" />
                    </Typography>
                </Box>
            </SectionContainer>
        </>
    )
}
