import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import theme from '../../theme'
import { FooterMobile } from './FooterMobile'
import { FooterDesktop } from './FooterDesktop'

export const Header: React.FC = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box>{isMobile ? <FooterMobile /> : <FooterDesktop />}</Box>
        </>
    )
}
