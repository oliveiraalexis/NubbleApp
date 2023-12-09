import React from 'react'
import { Box } from '../Box/Box'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppTheme } from '../../hooks/useAppTheme'

interface screenProps {
    children: React.ReactNode
}

export const Screen = ({children}: screenProps) => {

    const {top} = useSafeAreaInsets()
    const {spacing} = useAppTheme()

    return (
        <Box paddingHorizontal='s24' style={{padding: top}}>
            {children}
        </Box>
    )
}
