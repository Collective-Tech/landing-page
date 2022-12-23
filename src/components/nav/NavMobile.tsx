import React from 'react'
import { Dialog, Grid, Link, Typography, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { colors } from '../../theme'
import { useState } from 'react'

const CloseButton = styled(CloseIcon)({
    color: colors.white,
    width: 32,
    height: 32,
    cursor: 'pointer',
})

const MenuButton = styled(MenuIcon)({
    color: colors.white,
    width: 32,
    height: 32,
    cursor: 'pointer',
})

const MenuItemButton = styled(Typography)({
    cursor: 'pointer',
})

export type MenuItem = {
    name: string
    path?: string
    external?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'Home',
    },
    {
        name: 'Estimate Project',
        path: '/#/estimate',
    },
]

const HeaderMobile: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)

    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (
        <>
            <Link href="/" display="inline-flex">
                <Typography
                    sx={{
                        opacity: '50%',
                        fontSize: '15px',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: colors.gray,
                    }}
                >
                    The Collective
                </Typography>
            </Link>
            <MenuButton onClick={handleOpen} />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                sx={{ '& .MuiPaper-root': { background: 'transparent' } }}
            >
                <Grid
                    container
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: `linear-gradient(180deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
                        boxSizing: 'border-box',
                        height: '100%',
                        minHeight: '100%',
                        px: 2,
                        pt: 2,
                        pb: 25,
                    }}
                >
                    <Grid
                        container
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            sx={{ display: 'flex' }}
                        ></Link>
                        <CloseButton onClick={handleClose} />
                    </Grid>
                    <Grid
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={4}
                        flexDirection={'column'}
                    >
                        {MENU_ITEMS.map((item: MenuItem, index) => (
                            <Link
                                underline="none"
                                href={item.path}
                                target="_blank"
                                key={index}
                                onClick={() => setOpen(false)}
                            >
                                <MenuItemButton
                                    variant="h4"
                                    color={colors.white}
                                    fontWeight="bold"
                                >
                                    {item.name}
                                </MenuItemButton>
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Dialog>
        </>
    )
}

export default HeaderMobile
