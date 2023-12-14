import React from 'react'
import {  } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { RootStackParamList } from '../../../routes/Routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Icon } from '../../../components/Icon/Icon'

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export const SuccessScreen = ({navigation, route}: ScreenProps) => {

    function goBackToBegin(){
        navigation.goBack()
    }

    return (
        <Screen>
            <Icon {...route.params.icon}/>
            <Text preset="headingLarge" mt='s24' marginBottom="s16">{route.params.title}</Text>
            <Text preset="paragraphLarge" marginBottom="s40">{route.params.description}</Text>
            <Button onPress={goBackToBegin} title='Voltar ao início'/>
        </Screen>
    )
}
