import React from 'react'
import { Link, Stack, Typography, styled } from '@mui/material'
import { colors } from '../../theme'

const MenuItemButton = styled(Typography)({
    cursor: 'pointer',
    fontSize: 17,
})

export type MenuItem = {
    name: string
    path?: string
    external?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'Estimate Project',
        path: '/#/estimate',
    },
]

const HeaderDesktop: React.FC = () => {
    return (
        <>
            <Link
                href="/"
                sx={{
                    textDecoration: 'none',
                }}
            >
                <Typography
                    sx={{
                        opacity: '60%',
                        fontSize: '35px',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: colors.gray,
                    }}
                >
                    The Collective
                </Typography>
            </Link>
            <Stack
                direction="row"
                spacing={4}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {MENU_ITEMS.map((item: MenuItem, index) => (
                    <Link
                        display="inherit"
                        href={item.path}
                        underline="none"
                        key={index}
                    >
                        <MenuItemButton
                            color={colors.white}
                            key={index}
                            sx={{
                                fontWeight: 800,
                                transition: 'color 0.25s ease-in-out',
                                '&:hover': {
                                    borderBottom: '1px solid purple',
                                },
                            }}
                        >
                            {item.name}
                        </MenuItemButton>
                    </Link>
                ))}
            </Stack>
        </>
    )
}

export default HeaderDesktop
