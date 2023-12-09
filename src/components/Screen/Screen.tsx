import React from 'react'
import { Box } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'

interface screenProps {
    children: React.ReactNode
}

export const Screen = ({children}: screenProps) => {

    const {top} = useAppSafeArea()
    const {spacing} = useAppTheme()

    return (
        <Box paddingHorizontal='s24' style={{padding: top}}>
            {children}
        </Box>
    )
}
