import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { TextInput, TextInputProps } from '../TextInput/TextInput'
import { Icon } from '../Icon/Icon'

type PasswordTypeProps = TextInputProps

export const PasswordInput = (props: PasswordTypeProps) => {

    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)

    const toggleSecureTextEntry = () => {
        setIsSecureTextEntry(prev => !prev)
    }

    return (
        <TextInput
            secureTextEntry={isSecureTextEntry}
            RightComponent={
                <Icon
                    onPress={toggleSecureTextEntry}
                    name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
                    color='gray2'
                />
            }
            {...props}
        />
    )
}
