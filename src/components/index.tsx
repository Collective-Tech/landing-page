import React from 'react'
import { Box } from '@mui/material'
import { Header } from './header/Header'
import { Process } from './process/Process'
import { SectionWWD } from './WhatWeDo/WhatWeDo'

export default function Homepage() {
    return (
        <>
            <Box>
                <Header />
                <Process />
                <SectionWWD />
            </Box>
        </>
    )
}
