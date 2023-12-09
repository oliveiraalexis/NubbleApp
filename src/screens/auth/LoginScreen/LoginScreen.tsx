import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Icon } from '../../../components/Icon/Icon'
import { TextInput } from '../../../components/TextInput/TextInput'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'

export const LoginScreen = () => {

    return (
        <SafeAreaView>
            <View style={{paddingHorizontal: 24}} >
            <Text preset="headingLarge" marginBottom="s8">Olá!</Text>
            <Text preset="paragraphLarge" marginBottom="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput 
                label='E-mail' 
                placeholder='Digite seu e-mail'
                boxProps={{mb: 's20'}}
            />

            <TextInput
                label='Senha'
                placeholder='Digite sua senha'
                errorMessage='Senha incorreta'
                RightComponent={<Icon name='eyeOn' color='gray2'/>}
                boxProps={{mb: 's10'}}
            />

            <Text color="primary" preset="paragraphSmall" bold>Esqueci minha senha</Text>
            <Button title='Entrar' mt='s48'/>
            <Button preset='outline' title='Criar uma conta' mt='s12'/>
            </View>
        </SafeAreaView>
    )
}
