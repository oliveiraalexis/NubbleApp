import React from 'react'
import { Text } from '../Text/Text'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { buttonPresets } from './ButtonPresets';

export type ButtonPreset = 'primary' | 'outline'

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string,
    loading?: boolean,
    preset?: ButtonPreset,
    disabled?: boolean
}

export const Button = ({title, loading, preset = "primary", disabled,...touchableOpacityProps}: ButtonProps) => {

    const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']

    return (
        <TouchableOpacityBox
            disabled ={disabled || loading}
            paddingHorizontal="s20"
            borderRadius="s16"
            height={50}
            alignItems="center"
            justifyContent="center"
            {...touchableOpacityProps}
            {...buttonPreset.container}
        >
            {
                loading ? <ActivityIndicator color={buttonPreset.content} /> : 
                <Text color={buttonPreset.content} preset='paragraphMedium' bold>{title}</Text>
            }
        </TouchableOpacityBox>
    )
}