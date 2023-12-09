import React from 'react'
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, StyleSheet, TextStyle } from 'react-native'
import { Text, $fontFamily, $fontSizes } from '../Text/Text'
import { Box, BoxProps } from '../Box/Box'
import { useAppTheme } from '../../hooks/useAppTheme'

interface TextInputProps extends RNTextInputProps {
    label: string
    placeholder?: string
}

export const TextInput = ({label, placeholder,...rnTextInputProps}: TextInputProps) => {

    const {colors} = useAppTheme()
    return (
        <Box mb='s12'>
            <Text preset="paragraphMedium" mb="s4">{label}</Text>
            <Box {...$textInputContainer}>
                <RNTextInput 
                    style={$textInputStyle}
                    placeholder={placeholder}
                    placeholderTextColor={colors.gray2}
                    {...rnTextInputProps}
                />
            </Box>
        </Box>
    )
}

const $textInputContainer: BoxProps = {
    borderWidth:1,
    padding: "s16",
    borderColor: "gray4",
    borderRadius: "s12"
}

const $textInputStyle: TextStyle = {
    borderWidth:1,
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,borderColor: "gray4",
}
