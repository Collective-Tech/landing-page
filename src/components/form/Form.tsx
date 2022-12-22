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
    })

    return (
        <>
            <SectionContainer>
                <Box
                    justifyContent="space-between"
                    sx={{
                        paddingTop: '60px',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Typography component="div" maxWidth="sm">
                        <img src={Right} alt="test" />
                    </Typography>
                    <Stack pt={10}>
                        <Typography variant="h2" component="h1">
                            Work With Us
                        </Typography>
                        <hr style={{ width: '100%' }} />
                        <FormInput label="Your Name" variant="standard" />
                        <FormInput
                            label="Your Orginization"
                            variant="standard"
                        />
                        <FormInput label="Your Email" variant="standard" />
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
                                <MenuItem sx={{ color: 'black' }} value={10}>
                                    $0 - $10,000
                                </MenuItem>
                                <MenuItem sx={{ color: 'black' }} value={20}>
                                    $10,000 - $50,000
                                </MenuItem>
                                <MenuItem sx={{ color: 'black' }} value={30}>
                                    $50,000 - $100,000
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Typography component="div" maxWidth="sm">
                        <img src={Frame} alt="test" />
                    </Typography>
                </Box>
            </SectionContainer>
        </>
    )
}
