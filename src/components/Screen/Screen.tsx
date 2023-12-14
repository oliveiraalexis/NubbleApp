import React from 'react'
import { Box, TouchableOpacityBox } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'
import { useAppSafeArea } from '../../hooks/useAppSafeArea'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer'
import { useNavigation } from '@react-navigation/native'

interface screenProps {
    children: React.ReactNode,
    canGoBack?: boolean,
    scrollable?: boolean
}

export const Screen = ({children, canGoBack = false, scrollable = false}: screenProps) => {

    const {top, bottom} = useAppSafeArea()
    const {colors} = useAppTheme()
    const navigation = useNavigation()
    const Container = scrollable ? ScrollViewContainer : ViewContainer

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>    
            <Container backgroundColor={colors.background}>
                <Box paddingHorizontal='s24' paddingBottom='s24' style={{paddingTop: top, paddingBottom: bottom}}>
                    {canGoBack && (<TouchableOpacityBox onPress={navigation.goBack} mb='s24' flexDirection='row' alignItems='center'>
                        <Icon name='arrowLeft' color='primary'/>
                        <Text ml='s4' preset='paragraphMedium' semibold>Voltar</Text>
                    </TouchableOpacityBox>)}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}
