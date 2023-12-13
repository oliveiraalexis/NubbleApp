import React from 'react'
import { Box } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer'

interface screenProps {
    children: React.ReactNode,
    canGoBack?: boolean,
    scrollable?: boolean
}

export const Screen = ({children, canGoBack = false, scrollable = false}: screenProps) => {

    const {top, bottom} = useAppSafeArea()
    const {colors} = useAppTheme()
    const Container = scrollable ? ScrollViewContainer : ViewContainer

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>    
            <Container backgroundColor={colors.background}>
                <Box paddingHorizontal='s24' paddingBottom='s24' style={{paddingTop: top, paddingBottom: bottom}}>
                    {canGoBack && (<Box mb='s24' flexDirection='row' alignItems='center'>
                        <Icon name='arrowLeft' color='primary'/>
                        <Text ml='s4' preset='paragraphMedium' semibold>Voltar</Text>
                    </Box>)}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}
