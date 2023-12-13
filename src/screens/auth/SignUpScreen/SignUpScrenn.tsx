import React from 'react'
import {  } from 'react-native'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Icon } from '../../../components/Icon/Icon'
import { Button } from '../../../components/Button/Button'
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput'

export const SignUpScreen = () => {

    function submitForm() {
        //TO DO
    }

    return (
        <Screen canGoBack scrollable>
            <Text 
                preset="headingLarge" 
                marginBottom="s8">
                    Criar uma conta
            </Text>

            <TextInput 
                label='Seu sobrenome' 
                placeholder='@'
                boxProps={{mb: 's20'}}
            />
            
            <TextInput 
                label='Nome completo' 
                placeholder='Digite seu nome completo'
                boxProps={{mb: 's20'}}
            />

            <TextInput 
                label='E-mail' 
                placeholder='Digite seu e-mail'
                boxProps={{mb: 's20'}}
            />

            <PasswordInput
                label='Senha'
                placeholder='Digite sua nova senha'
            />

            <Button onPress={submitForm} title='Criar minha conta' mt='s48'/>
        </Screen>
        
    )
}
